/**
 * Yoru Cafe — Lightbox de imágenes
 * Usa delegación de eventos en el documento para capturar clics
 * en cualquier <img> dentro de un <article>, sin importar cuándo
 * React los renderice (compatible con SPA de Docusaurus).
 */

function createLightbox() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('yc-lightbox')) return;

  const overlay = document.createElement('div');
  overlay.id = 'yc-lightbox';
  overlay.innerHTML = `
    <button id="yc-lightbox-close" aria-label="Cerrar">&times;</button>
    <img id="yc-lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const imgEl = document.getElementById('yc-lightbox-img');
  const closeBtn = document.getElementById('yc-lightbox-close');

  function open(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    overlay.classList.add('yc-lightbox--open');
    document.body.classList.add('yc-lightbox-noscroll');
  }

  function close() {
    overlay.classList.remove('yc-lightbox--open');
    document.body.classList.remove('yc-lightbox-noscroll');
    // Limpiar src después de la transición para evitar flash
    setTimeout(() => { if (!overlay.classList.contains('yc-lightbox--open')) imgEl.src = ''; }, 200);
  }

  // Cerrar al hacer clic en el fondo
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Botón de cerrar
  closeBtn.addEventListener('click', close);

  // Tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('yc-lightbox--open')) close();
  });

  // ─── DELEGACIÓN DE EVENTOS ───────────────────────────────────
  // Un solo listener en el documento que detecta clics sobre
  // imágenes de artículos, sin importar cuándo se rendericen.
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.tagName === 'IMG' &&
      target.closest('article') &&
      !target.closest('#yc-lightbox')
    ) {
      e.preventDefault();
      e.stopPropagation();
      open(target.src, target.alt);
    }
  }, true); // capture phase para interceptar antes que otros handlers
}

function createMobileMenu() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('yc-mobile-menu')) return;

  // Create overlay background
  const overlay = document.createElement('div');
  overlay.id = 'yc-mobile-menu-overlay';
  overlay.className = 'yc-mobile-menu-overlay';
  document.body.appendChild(overlay);

  // Create menu drawer
  const menu = document.createElement('div');
  menu.id = 'yc-mobile-menu';
  menu.className = 'yc-mobile-menu';
  menu.innerHTML = `
    <div class="yc-mobile-menu-header">
      <div class="yc-mobile-menu-brand">
        <img src="/img/logo.png" alt="Yoru Cafe Logo" class="yc-mobile-menu-logo" />
        <span class="yc-mobile-menu-title">Yoru Cafe</span>
      </div>
      <button id="yc-mobile-menu-close" class="yc-mobile-menu-close" aria-label="Cerrar">&times;</button>
    </div>
    <nav class="yc-mobile-menu-nav">
      <a href="/" class="yc-mobile-menu-item" data-path="/">
        <span class="yc-mobile-menu-icon">🏠</span>
        <span class="yc-mobile-menu-text">inicio</span>
      </a>
      <a href="/Inicio/Guia principal/introduccion" class="yc-mobile-menu-item" data-path="/Inicio/Guia principal/introduccion">
        <span class="yc-mobile-menu-icon">📖</span>
        <span class="yc-mobile-menu-text">Guía principal</span>
        <span class="yc-mobile-menu-chevron"></span>
      </a>
      <a href="/Inicio/configuracion/YoruReader" class="yc-mobile-menu-item" data-path="/Inicio/configuracion/YoruReader">
        <span class="yc-mobile-menu-icon">⚙️</span>
        <span class="yc-mobile-menu-text">Configuración</span>
        <span class="yc-mobile-menu-chevron"></span>
      </a>
      <a href="/Inicio/Otras guias/Guia general" class="yc-mobile-menu-item" data-path="/Inicio/Otras guias/Guia general">
        <span class="yc-mobile-menu-icon">📚</span>
        <span class="yc-mobile-menu-text">Otras guías</span>
        <span class="yc-mobile-menu-chevron"></span>
      </a>
      <a href="/Inicio/miscelaneo/historial_cambios" class="yc-mobile-menu-item" data-path="/Inicio/miscelaneo/historial_cambios">
        <span class="yc-mobile-menu-icon">📋</span>
        <span class="yc-mobile-menu-text">Misceláneo</span>
        <span class="yc-mobile-menu-chevron"></span>
      </a>
    </nav>
  `;
  document.body.appendChild(menu);

  const closeBtn = document.getElementById('yc-mobile-menu-close');

  function openMenu() {
    // Update active class based on current path
    const currentPath = window.location.pathname;
    const items = menu.querySelectorAll('.yc-mobile-menu-item');
    items.forEach(item => {
      const itemPath = item.getAttribute('data-path');
      const itemPathEncoded = encodeURI(itemPath);
      const isHome = itemPath === '/' && (currentPath === '/' || currentPath === '/index.html');
      
      // Check for matching path or sub-paths
      const matches = isHome || (itemPath !== '/' && (
        currentPath.startsWith(itemPath) || 
        currentPath.startsWith(itemPathEncoded) ||
        decodeURIComponent(currentPath).startsWith(itemPath)
      ));

      if (matches) {
        item.classList.add('yc-mobile-menu-item--active');
      } else {
        item.classList.remove('yc-mobile-menu-item--active');
      }
    });

    menu.classList.add('yc-mobile-menu--open');
    overlay.classList.add('yc-mobile-menu-overlay--open');
    document.body.classList.add('yc-lightbox-noscroll');
  }

  function closeMenu() {
    menu.classList.remove('yc-mobile-menu--open');
    overlay.classList.remove('yc-mobile-menu-overlay--open');
    document.body.classList.remove('yc-lightbox-noscroll');
  }

  // Intercept click on the Docusaurus navbar hamburger toggle
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.navbar__toggle');
    if (toggle) {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    }
  }, true); // Capture phase to run before Docusaurus handlers

  // Close handlers
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  // Close menu on link click (since it's a SPA page change)
  menu.querySelectorAll('.yc-mobile-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(closeMenu, 150);
    });
  });

  // Tecla Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('yc-mobile-menu--open')) {
      closeMenu();
    }
  });
}

// Ejecutar cuando el DOM esté disponible
if (typeof window !== 'undefined') {
  const init = () => {
    createLightbox();
    createMobileMenu();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

export default undefined;
