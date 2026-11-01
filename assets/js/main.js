/**
 * EduCore — Main Interactive Scripts (Zero-dependency, Fastly-optimized)
 * SUBLIME ENTERPRISES
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.ec-mobile-toggle');
  const mobileMenu = document.querySelector('.ec-mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // Highlight current page in navigation if not already set
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ec-desktop-nav a, .ec-mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
