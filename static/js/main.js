// Navbar: resaltar enlace activo al hacer scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.navbar__nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(s => observer.observe(s));

// Agregar estilo activo al enlace
const style = document.createElement('style');
style.textContent = `.navbar__nav a.active { background: var(--blue-pale); color: var(--blue-mid); }`;
document.head.appendChild(style);

// Animación fade-in al entrar en viewport
const fadeEls = document.querySelectorAll(
  '.intro-card, .contam-card, .rec-card'
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.45s ease ${i * 0.05}s, transform 0.45s ease ${i * 0.05}s`;
  fadeObserver.observe(el);
});
