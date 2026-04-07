/* ============================================
   PORTFOLIO — Custom JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll Reveal ---------- */
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  
  revealElements.forEach((el) => revealObserver.observe(el));

  /* ---------- Navbar active link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#mainNav .nav-link');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ---------- Close mobile nav on link click ---------- */
  const navCollapse = document.getElementById('navContent');
  if (navCollapse) {
    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          bsCollapse.hide();
        }
      });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  
  

});
