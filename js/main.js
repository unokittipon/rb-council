// Mobile menu toggle
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// Mark active nav link based on current page
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// Scroll reveal
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  });
})();
