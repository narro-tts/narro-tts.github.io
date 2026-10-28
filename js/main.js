/**
 * Narro Organization — Main JavaScript (Vanilla JS)
 * Features:
 * 1. Internationalization (i18n): English (default), pt-BR, zh-CN
 * 2. Theme Manager (Dark / Light) with system detection & persistence
 * 3. Flatpak Terminal Command Copy with instant visual feedback
 * 4. Narro RSA Screenshot Tab Switcher
 * 5. Lightbox Modal with focus trap and Esc key support
 * 6. Mobile Menu & Active Navigation Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Internationalization (i18n) Manager
     ========================================================================== */
  const LANG_STORAGE_KEY = 'narro_lang';
  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langSelectorWrapper = document.getElementById('lang-selector-wrapper');
  const currentLangCodeEl = document.getElementById('current-lang-code');
  const langOptions = document.querySelectorAll('.lang-option');

  const langCodeMap = {
    'en': 'EN',
    'pt-BR': 'PT',
    'zh-CN': 'ZH'
  };

  function getSavedLanguage() {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && (saved === 'en' || saved === 'pt-BR' || saved === 'zh-CN')) {
      return saved;
    }
    // Default primary language is English
    return 'en';
  }

  function applyLanguage(lang) {
    if (!window.narroTranslations || !window.narroTranslations[lang]) {
      return;
    }
    const dict = window.narroTranslations[lang];

    // Set document lang attribute
    document.documentElement.lang = lang;

    // Update all text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update current language indicator badge
    if (currentLangCodeEl) {
      currentLangCodeEl.textContent = langCodeMap[lang] || 'EN';
    }

    // Update active state in dropdown
    langOptions.forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Update document title
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    // Update current captions in RSA Tab Meta
    if (window.rsaImageMeta) {
      window.rsaImageMeta.main.caption = dict.narrorsa_main_caption || '';
      window.rsaImageMeta.settings.caption = dict.narrorsa_settings_caption || '';
    }

    // Update lightbox caption if currently open
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal && lightboxModal.classList.contains('active') && lightboxImg) {
      const currentSrc = lightboxImg.getAttribute('src');
      if (currentSrc.includes('narro-pdf')) {
        lightboxCaption.textContent = dict.narropdf_caption;
      } else if (currentSrc.includes('settings')) {
        lightboxCaption.textContent = dict.narrorsa_settings_caption;
      } else if (currentSrc.includes('narro-rsa')) {
        lightboxCaption.textContent = dict.narrorsa_main_caption;
      }
    }
  }

  // Initialize Language
  let currentLang = getSavedLanguage();
  applyLanguage(currentLang);

  // Toggle Language Dropdown
  if (langMenuBtn && langDropdown) {
    langMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Handle Language Selection
    langOptions.forEach((option) => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        if (selectedLang) {
          currentLang = selectedLang;
          localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
          applyLanguage(selectedLang);
          langDropdown.classList.remove('open');
          langMenuBtn.setAttribute('aria-expanded', 'false');
          langMenuBtn.focus();
        }
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (langSelectorWrapper && !langSelectorWrapper.contains(e.target)) {
        langDropdown.classList.remove('open');
        langMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdown.classList.contains('open')) {
        langDropdown.classList.remove('open');
        langMenuBtn.setAttribute('aria-expanded', 'false');
        langMenuBtn.focus();
      }
    });
  }

  /* ==========================================================================
     2. Theme Manager (Dark / Light)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeMetaTag = document.querySelector('meta[name="theme-color"]');
  const THEME_STORAGE_KEY = 'narro_theme';

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeMetaTag) {
      themeMetaTag.setAttribute('content', theme === 'light' ? '#f6f8fa' : '#242424');
    }
    if (themeToggleBtn) {
      const isLight = theme === 'light';
      const label = isLight ? 'Switch to dark theme' : 'Switch to light theme';
      themeToggleBtn.setAttribute('aria-label', label);
      themeToggleBtn.setAttribute('title', label);
    }
  }

  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
      applyTheme(currentTheme);
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
      }
    });
  }

  /* ==========================================================================
     3. Copy Flatpak Commands with Visual Feedback
     ========================================================================== */
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const textToCopy = button.getAttribute('data-clipboard');
      if (!textToCopy) return;

      let success = false;

      // Modern Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          success = true;
        } catch (err) {
          console.warn('Clipboard API error, falling back:', err);
        }
      }

      // Legacy fallback
      if (!success) {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          success = true;
        } catch (fallbackErr) {
          console.error('Copy fallback failed:', fallbackErr);
        }
      }

      if (success) {
        const labelEl = button.querySelector('.copy-label');
        const originalText = labelEl ? labelEl.textContent : 'Copy';
        const dict = window.narroTranslations && window.narroTranslations[currentLang];
        const copiedText = dict ? dict.btn_copied : 'Copied!';

        button.classList.add('copied');
        if (labelEl) labelEl.textContent = copiedText;

        setTimeout(() => {
          button.classList.remove('copied');
          if (labelEl) labelEl.textContent = originalText;
        }, 2000);
      }
    });
  });

  /* ==========================================================================
     4. Screenshot Tab Switcher (Narro RSA)
     ========================================================================== */
  const rsaTabButtons = document.querySelectorAll('.tab-buttons .tab-btn');
  const rsaPanes = document.querySelectorAll('.showcase-tab-content .tab-pane');
  const rsaZoomBtn = document.getElementById('rsa-zoom-trigger');

  window.rsaImageMeta = {
    main: {
      src: 'assets/img/narro-rsa-main.png',
      caption: window.narroTranslations && window.narroTranslations[currentLang]
        ? window.narroTranslations[currentLang].narrorsa_main_caption
        : 'Narro RSA — Main Window with TTS Player, Reading History and Playback Controls'
    },
    settings: {
      src: 'assets/img/narro-rsa-settings.png',
      caption: window.narroTranslations && window.narroTranslations[currentLang]
        ? window.narroTranslations[currentLang].narrorsa_settings_caption
        : 'Narro RSA — Dynamic Settings Dialog with Piper Voice Management and Real-Time Downloads'
    }
  };

  rsaTabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const targetTab = tabBtn.getAttribute('data-tab');
      if (!targetTab) return;

      rsaTabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      tabBtn.classList.add('active');
      tabBtn.setAttribute('aria-selected', 'true');

      rsaPanes.forEach((pane) => {
        pane.classList.remove('active');
      });
      const activePane = document.getElementById(`pane-${targetTab}`);
      if (activePane) {
        activePane.classList.add('active');
      }

      if (rsaZoomBtn && window.rsaImageMeta[targetTab]) {
        rsaZoomBtn.setAttribute('data-target', window.rsaImageMeta[targetTab].src);
        rsaZoomBtn.setAttribute('data-caption', window.rsaImageMeta[targetTab].caption);
      }
    });
  });

  /* ==========================================================================
     5. Lightbox Modal for Screenshots
     ========================================================================== */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  let lastFocusedElement = null;

  function openLightbox(src, alt, caption) {
    if (!lightboxModal || !lightboxImg) return;

    lastFocusedElement = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Enlarged screenshot preview';
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
      lightboxCaption.style.display = caption ? 'inline-block' : 'none';
    }

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button with slight delay for smooth transition
    setTimeout(() => {
      if (lightboxCloseBtn) {
        lightboxCloseBtn.focus();
      }
    }, 50);
  }

  function closeLightbox() {
    if (!lightboxModal) return;

    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  document.querySelectorAll('.zoomable-img').forEach((img) => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt');
      const caption = img.getAttribute('data-caption') || alt;
      openLightbox(src, alt, caption);
    });
  });

  document.querySelectorAll('.zoom-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetSrc = btn.getAttribute('data-target');
      const caption = btn.getAttribute('data-caption');
      if (targetSrc) {
        openLightbox(targetSrc, caption, caption);
      }
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ==========================================================================
     6. Mobile Navigation Menu
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     7. Header Scroll Effect & Active Link Highlight
     ========================================================================== */
  const siteHeader = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const observedSections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if ('IntersectionObserver' in window && observedSections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    observedSections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
});
