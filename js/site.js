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
   YouTube modal — opens when [data-youtube="ID"] is clicked
   ============================================================ */
(function () {
  function getOrMakeModal() {
    var m = document.getElementById('ro-modal');
    if (m) return m;
    m = document.createElement('div');
    m.id = 'ro-modal';
    m.className = 'ro-modal';
    m.innerHTML =
      '<button class="ro-modal-close" type="button" aria-label="Close">CLOSE</button>' +
      '<div class="ro-modal-frame"><iframe allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe></div>';
    document.body.appendChild(m);
    return m;
  }
  function open(id) {
    if (!id || id === 'TODO') {
      window.alert('Lien vidéo à venir.');
      return;
    }
    var modal = getOrMakeModal();
    var iframe = modal.querySelector('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&modestbranding=1';
    modal.classList.add('is-open');
    document.body.classList.add('ro-modal-open');
  }
  function close() {
    var modal = document.getElementById('ro-modal');
    if (!modal) return;
    var iframe = modal.querySelector('iframe');
    iframe.src = '';
    modal.classList.remove('is-open');
    document.body.classList.remove('ro-modal-open');
  }
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-youtube]');
    if (trigger) {
      e.preventDefault();
      open(trigger.getAttribute('data-youtube'));
      return;
    }
    var modal = document.getElementById('ro-modal');
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.target.closest('.ro-modal-close') || e.target === modal) {
      close();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
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
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('is-open');
    });
  });
})();
