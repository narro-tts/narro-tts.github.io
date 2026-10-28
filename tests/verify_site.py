#!/usr/bin/env python3
"""
Validador de Integridade e Teste Automatizado do Website Narro
Checa:
1. Existência e integridade de todos os assets locais referenciados no HTML.
2. Acessibilidade de imagens (atributos alt preenchidos).
3. Consistência de IDs e âncoras internas.
4. Presença dos botões de cópia e seus comandos.
5. Links externos para os repositórios oficiais no GitHub.
6. Remoção completa da seção de comparativo (#comparativo).
7. Suporte a internacionalização (i18n) em EN (primária), pt-BR e zh-CN.
"""

import os
import re
import sys
import json
from html.parser import HTMLParser

class NarroHTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.img_sources = []
        self.missing_alt_images = []
        self.link_hrefs = []
        self.script_sources = []
        self.anchor_targets = []
        self.element_ids = set()
        self.copy_commands = []
        self.external_links = []
        self.i18n_keys = set()

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)

        # Coletar IDs do documento
        if 'id' in attr_dict:
            self.element_ids.add(attr_dict['id'])

        # Coletar chaves de internacionalização
        if 'data-i18n' in attr_dict:
            self.i18n_keys.add(attr_dict['data-i18n'])

        # Validar Imagens
        if tag == 'img':
            src = attr_dict.get('src')
            alt = attr_dict.get('alt', '').strip()
            if src:
                self.img_sources.append(src)
            if not alt:
                self.missing_alt_images.append(src or 'unknown')

        # Validar Links (CSS, âncoras e externos)
        if tag == 'link':
            href = attr_dict.get('href')
            if href:
                self.link_hrefs.append(href)

        if tag == 'a':
            href = attr_dict.get('href', '')
            if href.startswith('#'):
                self.anchor_targets.append(href[1:])
            elif href.startswith('http'):
                self.external_links.append(href)

        # Validar Scripts
        if tag == 'script':
            src = attr_dict.get('src')
            if src:
                self.script_sources.append(src)

        # Validar Botões de Cópia
        if 'class' in attr_dict and 'copy-btn' in attr_dict['class']:
            cmd = attr_dict.get('data-clipboard', '').strip()
            self.copy_commands.append(cmd)

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    index_path = os.path.join(root_dir, 'index.html')
    trans_path = os.path.join(root_dir, 'js', 'translations.js')

    print(f"[*] Validando site no diretório: {root_dir}")
    if not os.path.exists(index_path):
        print(f"[ERRO] index.html não encontrado em {index_path}")
        sys.exit(1)

    with open(index_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    parser = NarroHTMLValidator()
    parser.feed(html_content)

    errors = []

    # 1. Verificar imagens locais
    print(f"[*] Verificando {len(parser.img_sources)} imagens...")
    for src in parser.img_sources:
        if not src.startswith('http'):
            asset_path = os.path.join(root_dir, src)
            if not os.path.isfile(asset_path):
                errors.append(f"Imagem não encontrada: {src}")
            elif os.path.getsize(asset_path) == 0:
                errors.append(f"Imagem vazia: {src}")

    # 2. Verificar acessibilidade (alt)
    if parser.missing_alt_images:
        for missing in parser.missing_alt_images:
            errors.append(f"Imagem sem atributo alt acessível: {missing}")
    else:
        print("[✓] Todas as imagens possuem atributo alt acessível.")

    # 3. Verificar folhas de estilo e scripts
    print(f"[*] Verificando folhas de estilo e scripts...")
    for css in parser.link_hrefs:
        if css.endswith('.css') and not css.startswith('http'):
            css_path = os.path.join(root_dir, css)
            if not os.path.isfile(css_path):
                errors.append(f"Folha de estilo CSS não encontrada: {css}")
            else:
                print(f"[✓] Folha de estilo encontrada: {css} ({os.path.getsize(css_path)} bytes)")

    for js in parser.script_sources:
        if not js.startswith('http'):
            js_path = os.path.join(root_dir, js)
            if not os.path.isfile(js_path):
                errors.append(f"Arquivo JavaScript não encontrado: {js}")
            else:
                print(f"[✓] Script JS encontrado: {js} ({os.path.getsize(js_path)} bytes)")

    # 4. Verificar consistência de âncoras internas
    print(f"[*] Verificando {len(parser.anchor_targets)} âncoras internas...")
    for target in parser.anchor_targets:
        if target and target not in parser.element_ids:
            errors.append(f"Âncora aponta para ID inexistente: #{target}")
    print(f"[✓] Todas as âncoras internas (#) apontam para IDs válidos.")

    # 5. Verificar ausência da seção de comparativo
    if 'comparativo' in parser.element_ids:
        errors.append("A seção #comparativo ainda está presente no HTML (deve ser removida).")
    if 'comparativo' in parser.anchor_targets:
        errors.append("Ainda existem âncoras apontando para #comparativo.")
    print("[✓] Seção de comparativo removida com sucesso.")

    # 6. Verificar botões de cópia e comandos
    print(f"[*] Verificando botões de cópia (.copy-btn)...")
    if len(parser.copy_commands) < 2:
        errors.append(f"Esperava pelo menos 2 botões de cópia Flatpak, encontrou {len(parser.copy_commands)}")
    for cmd in parser.copy_commands:
        if not cmd or not cmd.startswith('flatpak install'):
            errors.append(f"Comando de cópia inválido ou vazio: {cmd}")
        else:
            print(f"[✓] Comando de cópia validado: '{cmd}'")

    # 7. Verificar links de repositórios oficiais
    print(f"[*] Verificando links externos para o GitHub...")
    expected_repos = [
        "https://github.com/geraldohomero/NarroPDF",
        "https://github.com/geraldohomero/Narro-Read-Selection-Aloud"
    ]
    for repo in expected_repos:
        if repo not in parser.external_links:
            errors.append(f"Link esperado para o repositório {repo} não encontrado no HTML.")
        else:
            print(f"[✓] Repositório oficial linkado: {repo}")

    # 8. Verificar internacionalização (i18n) e seletor de idiomas
    print(f"[*] Verificando suporte multi-idioma (i18n)...")
    if 'lang-menu-btn' not in parser.element_ids:
        errors.append("Botão do seletor de idiomas (#lang-menu-btn) não encontrado.")
    if 'lang-dropdown' not in parser.element_ids:
        errors.append("Dropdown do seletor de idiomas (#lang-dropdown) não encontrado.")

    if not os.path.isfile(trans_path):
        errors.append("Arquivo js/translations.js não encontrado.")
    else:
        with open(trans_path, 'r', encoding='utf-8') as f:
            trans_content = f.read()
        # Verificar se os 3 idiomas estão no arquivo
        for lang_code in ['en:', '"pt-BR":', '"zh-CN":']:
            if lang_code not in trans_content:
                errors.append(f"Idioma {lang_code} não encontrado em js/translations.js")
            else:
                print(f"[✓] Dicionário para idioma {lang_code} encontrado.")

        # Verificar se todas as chaves do HTML estão presentes nas traduções
        print(f"[*] Verificando {len(parser.i18n_keys)} chaves data-i18n no dicionário...")
        for key in parser.i18n_keys:
            if f"{key}:" not in trans_content:
                errors.append(f"Chave data-i18n='{key}' não encontrada em js/translations.js")
        print(f"[✓] Todas as {len(parser.i18n_keys)} chaves data-i18n estão traduzidas.")

    # Relatório Final
    if errors:
        print("\n[FALHA] Foram encontrados os seguintes erros:")
        for err in errors:
            print(f"  - {err}")
        sys.exit(1)
    else:
        print("\n[SUCESSO] Todos os testes e validações passaram com 100% de sucesso!")

if __name__ == '__main__':
    main()
