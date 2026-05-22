(function () {
  // Switch theme-color between dark (hero) and light (rest of page)
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const hero = document.getElementById('hero');
  if (themeMeta && hero) {
    const updateTheme = () => {
      themeMeta.content = hero.getBoundingClientRect().bottom > 0 ? '#1e3028' : '#f8f7f4';
    };
    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
  }

  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close menu when any link is clicked (handles anchor + page links)
  links.addEventListener('click', e => {
    if (e.target.closest('a')) {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}());
