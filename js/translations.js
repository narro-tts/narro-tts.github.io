/**
 * Narro Organization — Internationalization (i18n) Translations
 * Supports:
 * - 'en' (English - Primary / Default)
 * - 'pt-BR' (Português do Brasil)
 * - 'zh-CN' (简体中文)
 */

const translations = {
  en: {
    // Page Meta
    page_title: "Narro Organization | TTS & Accessibility Solutions for Linux GNOME",
    page_description: "Narro Organization — Modern, accessible, and native Text-to-Speech (TTS) applications for Linux and GNOME: NarroPDF and Narro RSA.",

    // Nav
    skip_link: "Skip to main content",
    nav_home: "Home",
    nav_narropdf: "NarroPDF",
    nav_narrorsa: "Narro RSA",
    nav_tech: "Technologies",
    nav_about: "About",
    theme_light: "Switch to light theme",
    theme_dark: "Switch to dark theme",
    select_language: "Select language",

    // Hero
    hero_badge: "Open Source Ecosystem for Linux & GNOME",
    hero_title: "Accessibility & Native Speech Synthesis for Linux",
    hero_description: "The <strong>Narro Organization</strong> develops modern, accessible <em>Text-to-Speech (TTS)</em> applications for the GNOME desktop. We turn any text or document into natural speech with real-time visual synchronization, 100% offline neural models, and deep system integration.",
    pillar_opensource: "100% Open Source",
    pillar_piper: "Piper Neural Offline",
    pillar_gnome: "GNOME Libadwaita Design",
    pillar_flatpak: "Flatpak Sandboxed",
    btn_explore_apps: "Explore Applications",
    btn_about_narro: "About Narro",

    // NarroPDF
    badge_gtk4: "GTK4 & Libadwaita",
    badge_engines: "Piper Neural + Edge TTS",
    badge_reader_annotator: "Reader & Annotator",
    narropdf_subtitle: "Modern, Minimalist PDF Reader and Annotator with Synchronized Speech Synthesis",
    narropdf_desc: "<strong>NarroPDF</strong> is a modern, minimalist, and accessible PDF reader and annotator built in Python using <strong>GTK4</strong> and <strong>Libadwaita</strong>. It combines advanced document viewing, rich text annotation tools, and an integrated Text-to-Speech (TTS) synthesizer with real-time visual synchronization.",
    showcase_narropdf_title: "NarroPDF — Main Window & Synchronized TTS Playback",
    zoom_button: "Enlarge Screenshot",
    narropdf_caption: "NarroPDF main interface showing document reading, synchronized word highlighting, sidebar, and TTS playback bar",

    feature_pdf_sync_title: "Word-by-Word Synchronization",
    feature_pdf_sync_desc: "Follow along as you listen. NarroPDF visually highlights each sentence and word in real-time synchronization with neural voice synthesis.",

    feature_pdf_controls_title: "Interactive Playback Controls",
    feature_pdf_controls_desc: "Bottom playback bar and right-side panel: play/pause, stop, skip sentence, loop mode, speed adjustment from 0.5x up to 4.0x, and double-click any sentence to start reading immediately.",

    feature_pdf_annotations_title: "Annotations & Markups",
    feature_pdf_annotations_desc: "Highlight, Underline, and Notes with interactive text entry. Resizable handles at selection boundaries, custom opacity palette (10% to 100%), and full Undo/Redo (Ctrl+Z, Ctrl+Shift+Z).",

    feature_pdf_sidebar_title: "Comprehensive Left Sidebar",
    feature_pdf_sidebar_desc: "Three dedicated tabs: Pages thumbnail list, hierarchical Table of Contents (TOC) with indentation, and consolidated Annotations list with bidirectional synchronization.",

    feature_pdf_hand_title: "Smart Reading & Hand Mode",
    feature_pdf_hand_desc: "Smooth Hand Mode (Ctrl+1) with Drag-to-Scroll navigation, automatic hyphenation joining across line breaks, and smart margin/header filtering for natural speech flow.",

    feature_pdf_safety_title: "Safe Exit Protection",
    feature_pdf_safety_desc: "Built strictly following GNOME Libadwaita design guidelines with safe exit confirmation to prevent losing unsaved annotations.",

    shortcuts_pdf_title: "Productivity Keyboard Shortcuts",
    shortcut_space: "Play / Pause Speech",
    shortcut_ctrl1: "Hand Mode (Drag-to-Scroll)",
    shortcut_ctrl4: "Selection Mode",
    shortcut_1: "Highlight Tool",
    shortcut_2: "Underline Tool",
    shortcut_3: "Add Note Tool",
    shortcut_ctrlf: "Search in PDF",
    shortcut_ctrlz: "Undo Annotation",

    // NarroPDF Download
    download_pdf_badge: "Latest Release",
    download_pdf_title: "Download NarroPDF",
    download_pdf_desc: "Get the latest Flatpak release package directly from GitHub.",
    btn_download_release: "Download Latest Release",
    btn_view_github: "View on GitHub",

    // Narro RSA
    badge_wayland: "GNOME / Wayland Native",
    badge_hotkeys: "Global Hotkeys",
    badge_selection_reader: "Selection Reader",
    narrorsa_title: "Narro - Read Selection Aloud (RSA)",
    narrorsa_subtitle: "Universal Text & Clipboard Reader for GNOME/Wayland with Auto-Configured Shortcuts",
    narrorsa_desc: "<strong>Narro RSA</strong> turns any application on your system into material for listening. Select any text in your browser, terminal, PDF reader, or document, copy it, and use a global keyboard shortcut to launch the native GTK4 player with reading history, speed controls, and offline neural voice downloads.",
    tab_main_window: "Main Window & Player",
    tab_settings_window: "Settings & Piper Models",
    narrorsa_main_caption: "Narro RSA — Main Window with TTS Player, Reading History and Playback Controls",
    narrorsa_settings_caption: "Narro RSA — Dynamic Settings Dialog with Piper Voice Management and Real-Time Downloads",

    feature_rsa_universal_title: "Universal Reading in Any App",
    feature_rsa_universal_desc: "Select text in any application (browser, terminal, editor, chat) and listen immediately. No need to open separate files: a simple hotkey triggers the reading.",

    feature_rsa_shortcuts_title: "Auto-Configured Global Hotkeys",
    feature_rsa_shortcuts_desc: "On first launch, Narro RSA automatically registers and activates all global GNOME keyboard shortcuts without requiring manual system setup.",

    feature_rsa_dynamic_title: "Dynamic Piper Model Downloads",
    feature_rsa_dynamic_desc: "Browse a rich catalog of languages and local neural voices for Piper TTS, monitoring downloads with real-time progress bars right inside the settings window.",

    feature_rsa_speed_title: "Real-Time Speed Control via MPV",
    feature_rsa_speed_desc: "Adjust speech playback speed on the fly via high-precision MPV IPC Unix sockets, seamlessly accelerating or slowing down speech.",

    feature_rsa_tray_title: "System Tray Indicator",
    feature_rsa_tray_desc: "Optional host AppIndicator running in the notification area to trigger playback, pause, or open preferences with a single click.",

    feature_rsa_engines_title: "Online and Offline Dual Engines",
    feature_rsa_engines_desc: "Effortlessly switch between local, privacy-first Piper TTS offline neural voices and expressive Microsoft Edge TTS natural cloud voices.",

    shortcuts_rsa_title: "Global Shortcuts Registered in GNOME",
    th_action: "Action",
    th_shortcut: "Default Shortcut",
    th_command: "Executed Command",
    action_clipboard: "Read Clipboard",
    action_primary: "Read Selection Direct",
    action_pause: "Pause / Resume",
    action_stop: "Stop Playback",

    // Narro RSA Download
    download_rsa_badge: "Latest Release",
    download_rsa_title: "Download Narro RSA",
    download_rsa_desc: "Get the latest Flatpak release package directly from GitHub.",

    // Tech Section
    tech_badge: "Technology & Architecture",
    tech_title: "What Powers Narro Applications",
    tech_subtitle: "Built on open standards, respecting your data privacy and the principles of the free software desktop.",
    tech_piper_title: "Piper TTS — Neural & 100% Offline",
    tech_piper_desc: "Piper is a local, ultra-fast neural text-to-speech synthesizer optimized for consumer hardware. It generates impressively natural speech <strong>without sending a single byte over the Internet</strong>, guaranteeing total privacy for confidential reading and offline availability while traveling.",
    tech_edge_title: "Microsoft Edge TTS — Natural Cloud Voices",
    tech_edge_desc: "For users looking for human-like inflection and broad language variety, Edge TTS provides hundreds of expressive neural voices in over 70 languages and dialects with rich prosody and no API cost.",
    tech_gtk4_title: "GTK4 & Libadwaita — GNOME HIG",
    tech_gtk4_desc: "Native desktop interfaces that blend seamlessly into GNOME. Automatic light and dark theme switching, responsive layouts, Cantarell typography, and polished squircle design.",
    tech_flatpak_title: "Flatpak & Wayland — Security & Portability",
    tech_flatpak_desc: "Universal distribution inside a secure sandbox container. Runs consistently across Fedora, Arch Linux, Debian, Ubuntu, openSUSE, and any other modern Linux distribution.",

    // About Section
    about_badge: "Our Mission",
    about_title: "About the Narro Organization",
    about_text1: "The <strong>Narro Organization</strong> was founded on the conviction that the Linux desktop deserves Text-to-Speech and accessibility tools that are as elegant, well-integrated, and intuitive as those found on proprietary platforms.",
    about_text2: "Whether for students reviewing textbooks, researchers parsing academic papers, professionals boosting productivity while multitasking, or people with visual impairments or dyslexia, our mission is to deliver first-class open-source solutions.",
    stat_projects: "Active Projects",
    stat_opensource: "Free & Open Source",
    stat_offline: "Total Privacy",
    quote_text: "“Accessibility is not merely a feature; it is a fundamental right in the free software desktop.”",
    quote_author: "— Narro Organization",
    banner_join_title: "Join the Community",
    banner_join_desc: "Narro projects are developed openly and collaboratively on GitHub. Contributions in code, translations, bug reports, and new ideas are warmly welcomed!",
    btn_explore_github: "Explore on GitHub",

    // Footer
    footer_text: "Developing modern, accessible Text-to-Speech (TTS) tools native to the Linux and GNOME ecosystem.",
    footer_heading_apps: "Applications",
    footer_heading_code: "Source Code",
    footer_heading_tech: "Technologies",
    footer_pdf_link: "NarroPDF (PDF Reader & Annotator)",
    footer_rsa_link: "Narro RSA (Selection & Clipboard)",
    footer_author_link: "Developer Profile",
    footer_copyright: "© 2026 Narro Organization. Licensed under Open Source Licenses (MIT / GPL). Built following GNOME Libadwaita guidelines.",
    footer_back_to_top: "Back to top",
    modal_close_label: "Close viewer"
  },

  "pt-BR": {
    // Page Meta
    page_title: "Organização Narro | Soluções TTS & Acessibilidade para Linux GNOME",
    page_description: "Organização Narro - Aplicativos modernos, acessíveis e nativos de Text-to-Speech (TTS) para Linux e GNOME: NarroPDF e Narro RSA.",

    // Nav
    skip_link: "Pular para o conteúdo principal",
    nav_home: "Início",
    nav_narropdf: "NarroPDF",
    nav_narrorsa: "Narro RSA",
    nav_tech: "Tecnologias",
    nav_about: "Sobre",
    theme_light: "Alternar para tema claro",
    theme_dark: "Alternar para tema escuro",
    select_language: "Selecionar idioma",

    // Hero
    hero_badge: "Ecossistema Open Source para Linux & GNOME",
    hero_title: "Acessibilidade e Síntese de Voz Nativa para o Linux",
    hero_description: "A <strong>Organização Narro</strong> desenvolve ferramentas modernas e acessíveis de <em>Text-to-Speech (TTS)</em> para o ecossistema GNOME. Transformamos qualquer texto ou documento em fala natural com sincronização em tempo real, suporte neural 100% offline e integração profunda ao sistema.",
    pillar_opensource: "100% Código Aberto",
    pillar_piper: "Piper Neural Offline",
    pillar_gnome: "Design GNOME Libadwaita",
    pillar_flatpak: "Empacotado em Flatpak",
    btn_explore_apps: "Conhecer os Aplicativos",
    btn_about_narro: "Sobre a Narro",

    // NarroPDF
    badge_gtk4: "GTK4 & Libadwaita",
    badge_engines: "Piper Neural + Edge TTS",
    badge_reader_annotator: "Leitor & Anotador",
    narropdf_subtitle: "Leitor e Anotador de PDF com Leitura em Voz Alta e Sincronização Visual em Tempo Real",
    narropdf_desc: "O <strong>NarroPDF</strong> é um leitor e anotador de arquivos PDF moderno, minimalista e acessível, desenvolvido em Python usando a biblioteca gráfica <strong>GTK4</strong> e <strong>Libadwaita</strong>. Ele combina visualização avançada de documentos, ferramentas completas de anotação e um sintetizador de voz integrado (Text-to-Speech) com sincronização visual em tempo real.",
    showcase_narropdf_title: "NarroPDF — Interface Principal & Sincronização TTS",
    zoom_button: "Ampliar Imagem",
    narropdf_caption: "Interface do NarroPDF com visualização de documento, destaque de palavras sincronizado, barra lateral e reprodutor TTS",

    feature_pdf_sync_title: "Sincronização Palavra por Palavra",
    feature_pdf_sync_desc: "Acompanhe o texto enquanto escuta. O NarroPDF destaca visualmente cada frase e palavra em sincronia exata com a síntese de voz neural.",

    feature_pdf_controls_title: "Controles Interativos de Reprodução",
    feature_pdf_controls_desc: "Barra inferior e painel lateral com Play/Pause, avançar/retroceder, velocidade de 0.5x a 4.0x, repetição de frase e clique duplo para ler de qualquer trecho.",

    feature_pdf_annotations_title: "Anotações e Marcações Avançadas",
    feature_pdf_annotations_desc: "Realce (Highlight), Sublinhado e Notas com diálogo interativo. Alças de redimensionamento, opacidade customizável (10% a 100%) e Undo/Redo completo (Ctrl+Z, Ctrl+Shift+Z).",

    feature_pdf_sidebar_title: "Barra Lateral Esquerda Completa",
    feature_pdf_sidebar_desc: "Três abas essenciais: Lista de Páginas, Capítulos hierárquicos do documento (TOC) e Aba Anotações consolidada com navegação bidirecional instantânea.",

    feature_pdf_hand_title: "Modo Mão e Leitura Fluida",
    feature_pdf_hand_desc: "Rolagem suave arrastando a página (Drag-to-Scroll) no Modo Mão (Ctrl+1), junção automática de palavras com hífen em quebras de linha e remoção de cabeçalhos/rodapés.",

    feature_pdf_safety_title: "Proteção de Alterações",
    feature_pdf_safety_desc: "Construído seguindo as diretrizes do GNOME Libadwaita com confirmação de segurança ao sair para evitar perda acidental de anotações não salvas.",

    shortcuts_pdf_title: "Atalhos Rápidos de Produtividade",
    shortcut_space: "Play / Pausar Leitura",
    shortcut_ctrl1: "Modo Mão (Arrastar)",
    shortcut_ctrl4: "Modo Seleção",
    shortcut_1: "Realce (Highlight)",
    shortcut_2: "Sublinhado",
    shortcut_3: "Adicionar Nota",
    shortcut_ctrlf: "Buscar no PDF",
    shortcut_ctrlz: "Desfazer Ação",

    // NarroPDF Download
    download_pdf_badge: "Última Versão",
    download_pdf_title: "Baixar NarroPDF",
    download_pdf_desc: "Obtenha o pacote de instalação Flatpak mais recente diretamente no GitHub.",
    btn_download_release: "Baixar Última Versão",
    btn_view_github: "Ver no GitHub",

    // Narro RSA
    badge_wayland: "GNOME / Wayland Nativo",
    badge_hotkeys: "Atalhos Globais",
    badge_selection_reader: "Leitor de Seleção",
    narrorsa_title: "Narro - Ler Seleção em Voz Alta (RSA)",
    narrorsa_subtitle: "Leitor Universal de Texto Selecionado e Área de Transferência com Atalhos Globais",
    narrorsa_desc: "O <strong>Narro RSA</strong> transforma qualquer aplicativo do seu sistema em material de escuta. Selecione um trecho de texto no navegador, terminal, leitor ou documento, copie e use um atalho global para acionar o player nativo em GTK4 com histórico visual, velocidade dinâmica e download de vozes neurais locais.",
    tab_main_window: "Janela Principal & Player",
    tab_settings_window: "Configurações & Modelos Piper",
    narrorsa_main_caption: "Narro RSA — Janela Principal com Player TTS, Histórico e Controles",
    narrorsa_settings_caption: "Narro RSA — Diálogo de Configurações com Gerenciamento e Download de Vozes Piper",

    feature_rsa_universal_title: "Leitura Direta da Seleção / Clipboard",
    feature_rsa_universal_desc: "Selecione qualquer texto em qualquer programa (navegador, terminal, editor, chat) e ouça imediatamente. Basta um atalho de teclado global.",

    feature_rsa_shortcuts_title: "Atalhos Globais Auto-configurados",
    feature_rsa_shortcuts_desc: "No primeiro início, o Narro RSA detecta e registra de forma automática todos os atalhos de teclado no ambiente GNOME sem necessidade de setup manual.",

    feature_rsa_dynamic_title: "Download Dinâmico de Modelos Piper",
    feature_rsa_dynamic_desc: "Navegue pelo catálogo de idiomas e vozes neurais locais do Piper, acompanhando o download com barra de progresso em tempo real na janela de configurações.",

    feature_rsa_speed_title: "Velocidade Dinâmica via MPV",
    feature_rsa_speed_desc: "Altere a velocidade da fala dinamicamente durante a reprodução, utilizando a integração de alta precisão via socket IPC Unix com o MPV.",

    feature_rsa_tray_title: "Indicador na Bandeja do Sistema",
    feature_rsa_tray_desc: "Indicador na bandeja (AppIndicator) opcional rodando no host que permite acionar, pausar e abrir preferências rapidamente.",

    feature_rsa_engines_title: "Dois Motores: Online e Offline",
    feature_rsa_engines_desc: "Alterne com facilidade entre a privacidade do Piper TTS neural local (offline) e a expressividade das vozes neurais Microsoft Edge TTS na nuvem.",

    shortcuts_rsa_title: "Atalhos Globais Registrados no GNOME",
    th_action: "Ação",
    th_shortcut: "Atalho Padrão",
    th_command: "Comando Executado",
    action_clipboard: "Ler Área de Transferência",
    action_primary: "Ler Seleção Direta",
    action_pause: "Pausar / Retomar",
    action_stop: "Parar Reprodução",

    // Narro RSA Download
    download_rsa_badge: "Última Versão",
    download_rsa_title: "Baixar Narro RSA",
    download_rsa_desc: "Obtenha o pacote de instalação Flatpak mais recente diretamente no GitHub.",

    // Tech Section
    tech_badge: "Tecnologia & Arquitetura",
    tech_title: "O que alimenta os aplicativos Narro",
    tech_subtitle: "Construídos sobre padrões abertos, respeitando a privacidade dos seus dados e as diretrizes do desktop livre.",
    tech_piper_title: "Piper TTS — Neural & 100% Offline",
    tech_piper_desc: "O Piper é um sintetizador de voz neural local ultrarrápido otimizado para o hardware do usuário. Ele gera fala com naturalidade impressionante <strong>sem enviar uma única palavra para a internet</strong>, garantindo total privacidade em textos confidenciais ou leituras offline em viagens.",
    tech_edge_title: "Microsoft Edge TTS — Vozes Naturais em Nuvem",
    tech_edge_desc: "Para quem busca a entonação mais humana e emotiva possível, o motor Edge TTS oferece centenas de opções de vozes neurais de altíssima fidelidade em mais de 70 idiomas e dialetos, sem custo de API.",
    tech_gtk4_title: "GTK4 & Libadwaita — GNOME HIG",
    tech_gtk4_desc: "Interfaces que parecem pertencer ao seu sistema. Respeitam instantaneamente as preferências de Tema Escuro ou Claro do GNOME, tipografia Cantarell e bordas suaves no formato squircle.",
    tech_flatpak_title: "Flatpak & Wayland — Segurança & Portabilidade",
    tech_flatpak_desc: "Distribuição universal em contêiner seguro (sandbox). Os pacotes rodam de maneira idêntica no Fedora, Arch Linux, Debian, Ubuntu, openSUSE ou em qualquer outra distribuição Linux moderna.",

    // About Section
    about_badge: "Nossa Missão",
    about_title: "Sobre a Organização Narro",
    about_text1: "A <strong>Organização Narro</strong> nasceu da convicção de que o ecossistema Linux desktop merece ferramentas de síntese de voz e acessibilidade tão elegantes, integradas e intuitivas quanto as encontradas em qualquer outro sistema operacional comercial.",
    about_text2: "Seja para estudantes revisando livros didáticos, pesquisadores lendo artigos extensos, profissionais buscando produtividade enquanto realizam outras tarefas, ou pessoas com dificuldades visuais e dislexia, nosso compromisso é oferecer soluções abertas, gratuitas e de primeira linha.",
    stat_projects: "Projetos Ativos",
    stat_opensource: "Software Livre",
    stat_offline: "Privacidade Total",
    quote_text: "“Acessibilidade não é apenas uma funcionalidade; é um direito fundamental no desktop livre.”",
    quote_author: "— Organização Narro",
    banner_join_title: "Junte-se à Comunidade",
    banner_join_desc: "Os projetos da Narro são desenvolvidos de forma colaborativa e aberta no GitHub. Você pode contribuir com código, traduções, reporte de bugs ou novas ideias!",
    btn_explore_github: "Explorar no GitHub",

    // Footer
    footer_text: "Desenvolvendo ferramentas modernas e acessíveis de Text-to-Speech (TTS) nativas para o ecossistema Linux e GNOME.",
    footer_heading_apps: "Aplicativos",
    footer_heading_code: "Código Fonte",
    footer_heading_tech: "Tecnologias",
    footer_pdf_link: "NarroPDF (Leitor e Anotador)",
    footer_rsa_link: "Narro RSA (Seleção e Clipboard)",
    footer_author_link: "Perfil do Desenvolvedor",
    footer_copyright: "© 2026 Organização Narro. Licenciado sob licenças de Código Aberto (MIT / GPL). Construído com base nas diretrizes do GNOME Libadwaita.",
    footer_back_to_top: "Voltar ao topo",
    modal_close_label: "Fechar visualizador"
  },

  "zh-CN": {
    // Page Meta
    page_title: "Narro 组织 | 适用于 Linux GNOME 的文本转语音与无障碍工具",
    page_description: "Narro 组织 —— 专为 Linux 与 GNOME 打造的现代、无障碍且原生的文本转语音 (TTS) 应用：NarroPDF 与 Narro RSA。",

    // Nav
    skip_link: "跳转至主要内容",
    nav_home: "首页",
    nav_narropdf: "NarroPDF",
    nav_narrorsa: "Narro RSA",
    nav_tech: "技术架构",
    nav_about: "关于我们",
    theme_light: "切换至浅色模式",
    theme_dark: "切换至深色模式",
    select_language: "选择语言",

    // Hero
    hero_badge: "专为 Linux 与 GNOME 打造的开源生态",
    hero_title: "赋能 Linux 桌面原生语音朗读与无障碍体验",
    hero_description: "<strong>Narro 组织</strong>为 GNOME 桌面环境开发现代、注重无障碍体验的<em>文本转语音 (TTS)</em> 工具。我们将任意文本或文档转化为流畅自然的语音，支持词句实时同步高亮、100% 本地离线神经网络模型以及与系统深度集成。",
    pillar_opensource: "100% 开源自由软件",
    pillar_piper: "Piper 本地离线神经语音",
    pillar_gnome: "GNOME Libadwaita 原生设计",
    pillar_flatpak: "Flatpak 沙盒安全打包",
    btn_explore_apps: "探索系列应用",
    btn_about_narro: "关于 Narro",

    // NarroPDF
    badge_gtk4: "GTK4 与 Libadwaita",
    badge_engines: "Piper 离线 + Edge 在线 TTS",
    badge_reader_annotator: "阅读与批注工具",
    narropdf_subtitle: "现代、简约且具备实时语音同步朗读功能的 PDF 阅读器与批注工具",
    narropdf_desc: "<strong>NarroPDF</strong> 是一款现代、简约且注重无障碍体验的 PDF 阅读与批注工具，使用 Python 基于 <strong>GTK4</strong> 和 <strong>Libadwaita</strong> 库开发。它将先进的文档浏览、全套批注工具以及集成的实时同步文本转语音（TTS）朗读功能融为一体。",
    showcase_narropdf_title: "NarroPDF —— 主窗口与实时同步朗读界面",
    zoom_button: "放大查看截图",
    narropdf_caption: "NarroPDF 主界面展示文档阅读、词句实时高亮同步、章节/批注侧边栏及播放控制面板",

    feature_pdf_sync_title: "字句实时高亮同步",
    feature_pdf_sync_desc: "边听边看，实时跟读。NarroPDF 会在界面上与神经网络语音朗读节奏完全精准同步，实时高亮正在朗读的句子与词语。",

    feature_pdf_controls_title: "交互式朗读播放控制",
    feature_pdf_controls_desc: "底部播放工具栏与右侧面板：支持播放/暂停、停止、句子跳转、单句循环播放以及 0.5x 至 4.0x 语速调节；双击 PDF 任意句子即可立即开读。",

    feature_pdf_annotations_title: "全套文档批注工具",
    feature_pdf_annotations_desc: "支持高亮 (Highlight)、下划线 (Underline) 与笔记 (Note)。配备交互式边界微调手柄、可调不透明度调色板 (10% 至 100%) 及完整撤销/重做支持 (Ctrl+Z)。",

    feature_pdf_sidebar_title: "功能完备的侧边栏",
    feature_pdf_sidebar_desc: "三大标签页：页面缩略列表、多层级大纲目录 (TOC) 以及汇总全部批注且支持双向定位同步的批注列表。",

    feature_pdf_hand_title: "抓手模式与连贯阅读",
    feature_pdf_hand_desc: "抓手模式 (Ctrl+1) 下支持平滑拖拽滚屏浏览，智能合并跨行断词连字符，自动过滤页眉页脚与页码杂音，带来连贯自然的听读体验。",

    feature_pdf_safety_title: "防误关闭安全保护",
    feature_pdf_safety_desc: "严格遵循 GNOME Libadwaita 设计规范，当存在未保存的修改时退出前会弹出确认对话框提示保存，防止笔记丢失。",

    shortcuts_pdf_title: "高效生产力快捷键",
    shortcut_space: "播放 / 暂停语音朗读",
    shortcut_ctrl1: "抓手模式 (拖拽滚屏)",
    shortcut_ctrl4: "文本选择模式",
    shortcut_1: "高亮工具 (Highlight)",
    shortcut_2: "下划线工具 (Underline)",
    shortcut_3: "添加笔记工具 (Note)",
    shortcut_ctrlf: "在文档中查找",
    shortcut_ctrlz: "撤销操作",

    // NarroPDF Download
    download_pdf_badge: "最新版本",
    download_pdf_title: "下载 NarroPDF",
    download_pdf_desc: "直接从 GitHub 获取最新的 Flatpak 发布安装包。",
    btn_download_release: "下载最新发布版本",
    btn_view_github: "在 GitHub 上查看",

    // Narro RSA
    badge_wayland: "GNOME / Wayland 原生",
    badge_hotkeys: "系统全局快捷键",
    badge_selection_reader: "选中文本朗读器",
    narrorsa_title: "Narro - 朗读选中文本 (RSA)",
    narrorsa_subtitle: "适用于 GNOME/Wayland 的通用选中文本与剪贴板语音朗读工具",
    narrorsa_desc: "<strong>Narro RSA</strong> 能将您系统中的任意文本转化为有声内容。在浏览器、终端、PDF 阅读器或文档中选中文本复制后，只需按下全局快捷键即可唤出 GTK4 原生播放器，支持朗读历史记录、实时调速及本地离线语音模型下载。",
    tab_main_window: "主窗口与播放器",
    tab_settings_window: "配置设置与 Piper 模型",
    narrorsa_main_caption: "Narro RSA —— 主窗口播放器界面、朗读历史与播放控制",
    narrorsa_settings_caption: "Narro RSA —— 动态配置对话框，支持实时管理并下载 Piper 本地语音模型",

    feature_rsa_universal_title: "任意应用即选即读",
    feature_rsa_universal_desc: "在任何软件中选中文本即可朗读，无需单独打开文件：一个全局快捷键立刻将文字转换为清晰语音。",

    feature_rsa_shortcuts_title: "自动配置全局快捷键",
    feature_rsa_shortcuts_desc: "首次启动图形界面时，Narro RSA 会自动检测并向 GNOME 桌面注册所有快捷键，完全无需手动配置。",

    feature_rsa_dynamic_title: "Piper 本地模型动态下载",
    feature_rsa_dynamic_desc: "在设置面板中直接浏览丰富的语种与 Piper 本地神经网络声音库，带实时下载进度条显示。",

    feature_rsa_speed_title: "基于 MPV 的实时语速调节",
    feature_rsa_speed_desc: "通过 MPV Unix IPC 套接字进行高精度控制，在语音朗读过程中即可随时无级调节播放速度。",

    feature_rsa_tray_title: "系统托盘状态指示器",
    feature_rsa_tray_desc: "可选的运行于宿主机的 AppIndicator 系统托盘指示器，点击即可快速触发朗读、暂停或打开偏好设置。",

    feature_rsa_engines_title: "在线与离线双引擎切换",
    feature_rsa_engines_desc: "随心在注重隐私的 Piper 本地极速离线声音与表现力极佳的 Microsoft Edge 在线自然云端声音之间自由切换。",

    shortcuts_rsa_title: "在 GNOME 中注册的全局快捷键",
    th_action: "操作",
    th_shortcut: "默认快捷键",
    th_command: "执行命令",
    action_clipboard: "朗读剪贴板文本",
    action_primary: "直接朗读当前选中文本",
    action_pause: "暂停 / 恢复播放",
    action_stop: "停止朗读播放",

    // Narro RSA Download
    download_rsa_badge: "最新版本",
    download_rsa_title: "下载 Narro RSA",
    download_rsa_desc: "直接从 GitHub 获取最新的 Flatpak 发布安装包。",

    // Tech Section
    tech_badge: "技术与架构",
    tech_title: "驱动 Narro 应用程序的核心技术",
    tech_subtitle: "构建于现代开放标准之上，恪守数据隐私，践行自由桌面生态理念。",
    tech_piper_title: "Piper TTS —— 神经网络与 100% 离线",
    tech_piper_desc: "Piper 是一款针对普通硬件深度优化的极速本地神经文本转语音合成引擎。它具备惊人的拟真度，且<strong>绝不向互联网发送任何文本数据</strong>，完全保障保密阅读与离线出行的隐私与可用性。",
    tech_edge_title: "Microsoft Edge TTS —— 高品质云端自然语音",
    tech_edge_desc: "针对追求极为自然、富有情感起伏语音的用户，Edge TTS 提供了覆盖 70 多种语言与方言的数百种高质量神经网络声音，无 API 调用成本。",
    tech_gtk4_title: "GTK4 与 Libadwaita —— 纯正 GNOME 体验",
    tech_gtk4_desc: "与 GNOME 桌面浑然一体的原生界面。原生自适应深浅色主题切换、响应式布局、Cantarell 优雅字体以及经典的 Adwaita squircle 圆角设计。",
    tech_flatpak_title: "Flatpak 与 Wayland —— 安全与跨发行版通用",
    tech_flatpak_desc: "采用安全的沙盒容器打包分发。在 Fedora、Arch Linux、Debian、Ubuntu、openSUSE 以及任意现代 Linux 发行版上表现完全一致。",

    // About Section
    about_badge: "我们的使命",
    about_title: "关于 Narro 组织",
    about_text1: "<strong>Narro 组织</strong>始于这样一个信念：Linux 桌面生态应当拥有与主流商业操作系统相媲美、甚至更为优雅集成且易用的语音合成与无障碍辅助工具。",
    about_text2: "无论是学生研读教材、研究员阅读长篇学术论文、专业人士在多任务中倾听资讯，还是视力障碍与阅读障碍人士，我们的目标始终是打造一流且完全自由开源的解决方案。",
    stat_projects: "活跃项目",
    stat_opensource: "自由开源软件",
    stat_offline: "完全离线隐私",
    quote_text: "“无障碍体验不仅是一项功能，更是自由软件桌面的一项基本权利。”",
    quote_author: "—— Narro 组织",
    banner_join_title: "加入开源社区",
    banner_join_desc: "Narro 系列项目在 GitHub 上完全公开透明、协作开发。热烈欢迎您贡献代码、改进翻译、提交缺陷报告或提出创意！",
    btn_explore_github: "在 GitHub 上探索",

    // Footer
    footer_text: "致力于为 Linux 和 GNOME 生态开发原生、现代且注重无障碍的文本转语音 (TTS) 工具。",
    footer_heading_apps: "系列应用",
    footer_heading_code: "源代码仓库",
    footer_heading_tech: "核心技术",
    footer_pdf_link: "NarroPDF (PDF 阅读与批注)",
    footer_rsa_link: "Narro RSA (选区与剪贴板朗读)",
    footer_author_link: "开发者 GitHub 主页",
    footer_copyright: "© 2026 Narro 组织。遵循开源协议 (MIT / GPL)。遵循 GNOME Libadwaita 规范开发。",
    footer_back_to_top: "返回顶部",
    modal_close_label: "关闭图片查看器"
  }
};

// Exportar para uso no navegador
if (typeof window !== 'undefined') {
  window.narroTranslations = translations;
}
