function toggleAbstract(id, btn) {
  const el = document.getElementById(id);
  const open = el.classList.toggle('open');
  btn.classList.toggle('open', open);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.pub-entry, .conf-entry').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 0.07}s`;
  observer.observe(el);
});
