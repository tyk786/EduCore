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

  // Clean URL canonical history update if index.html is loaded directly
  if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/index.html') {
    const cleanUrl = window.location.origin + '/' + window.location.search + window.location.hash;
    window.history.replaceState(null, '', cleanUrl);
  }

  // Highlight current page in navigation if not already set
  const currentPath = window.location.pathname.split('/').pop() || '';
  document.querySelectorAll('.ec-desktop-nav a, .ec-mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || ((currentPath === '' || currentPath === 'index.html') && (href === '/' || href === 'https://educoreapp.in/'))) {
      link.classList.add('active');
    }
  });
});
