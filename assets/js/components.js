/* =========================================================
   Shared header & footer — injectat a totes les pàgines
   ========================================================= */

/* Google Font */
const fontLink = document.createElement('link');
fontLink.rel  = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap';
document.head.appendChild(fontLink);

const NAV_LINKS = [
  { href: 'presentacio.html', text: 'Presentació' },
  { href: 'valors.html',      text: 'Valors' },
  { href: 'objectius.html',   text: 'Objectius' },
  { href: 'qui-som.html',     text: 'Qui som' },
  { href: 'beneficis.html',   text: 'Beneficis' },
  { href: 'fer-se-soci.html', text: 'Fer-se Soci' },
  { href: 'contacte.html',    text: 'Contacte' },
  { href: 'collaboradors.html', text: 'Col·laboradors' },
];

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navItems = NAV_LINKS.map(link =>
  `<li><a href="${link.href}"${link.href === currentPage ? ' class="active"' : ''}>${link.text}</a></li>`
).join('');

document.getElementById('site-header').innerHTML = `
<header id="header">
  <div class="header-brand-row">
    <button class="nav-toggle" aria-label="Obrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="header-brand-content">
      <a href="index.html" class="logo-link">
        <img src="assets/img/logoclub.avif" alt="Logo Club Pesca Caiac Catalunya" class="logo" />
      </a>
      <span class="header-club-name">Club Pesca Caiac Catalunya</span>
      <a href="https://appconcursospesca-production.up.railway.app/login"
         class="btn-lliga" target="_blank" rel="noopener">Lliga</a>
    </div>
  </div>
  <nav id="main-nav">
    <ul>${navItems}</ul>
  </nav>
</header>`;

document.getElementById('site-footer').innerHTML = `
<footer>
  <div class="container footer-inner">
    <img src="assets/img/logoclub.avif" alt="Logo" class="footer-logo" />
    <p>Club Pesca Caiac Catalunya &copy; ${new Date().getFullYear()}</p>
    <div class="footer-social">
      <a href="https://www.facebook.com/clubpescacaiaccatalunya/"
         target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
        Facebook
      </a>
      <a href="https://www.instagram.com/clubpescacaiaccatalunya/"
         target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Instagram
      </a>
    </div>
    <a href="assets/decaleg.pdf" download="Decaleg-ClubPescaCaiacCatalunya.pdf" class="footer-decaleg-link">Descarregar el Decàleg</a>
    <p class="footer-credits">© 2026 Club Pesca Caiac Taurons Catalunya. Drets reservats</p>
  </div>
</footer>`;

/* Nav toggle */
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  });
});

/* Header scroll */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });
