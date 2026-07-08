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

// Ejecutar cuando el DOM esté disponible
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLightbox);
  } else {
    createLightbox();
  }
}

export default undefined;
