/* ============================================================
   POLYMORPHE — language switch + small interactions
   ============================================================ */

(function () {
  var KEY = 'polymorphe-lang';
  var html = document.documentElement;

  function applyLang(lang) {
    if (lang === 'en') {
      html.classList.add('lang-en');
      html.setAttribute('lang', 'en');
    } else {
      html.classList.remove('lang-en');
      html.setAttribute('lang', 'fr');
    }
    // Update aria-current on toggle buttons
    var btns = document.querySelectorAll('[data-lang-btn]');
    btns.forEach(function (b) {
      b.setAttribute('aria-current', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
  }

  // Initial language: localStorage > <html lang> > 'fr'
  var initial = null;
  try { initial = localStorage.getItem(KEY); } catch (e) {}
  if (!initial) {
    initial = html.getAttribute('lang') === 'en' ? 'en' : 'fr';
  }
  applyLang(initial);

  // Wire up the toggle buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang-btn]');
    if (!btn) return;
    e.preventDefault();
    var lang = btn.getAttribute('data-lang-btn');
    applyLang(lang);
    try { localStorage.setItem(KEY, lang); } catch (err) {}
  });
})();

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
(function () {
  var btn = document.querySelector('.ro-nav-hamburger');
  var menu = document.querySelector('.ro-nav-mobile');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
  });

  // Fermer en cliquant sur un lien
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('is-open');
    });
  });
})();
