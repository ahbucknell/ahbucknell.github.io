/* ─── Scroll reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Hero: protein interaction network canvas ────────────── */
const canvas = document.getElementById('network-canvas');
const ctx    = canvas.getContext('2d');
let W, H, nodes;

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener('resize', resize, { passive: true });

nodes = Array.from({ length: 80 }, (_, i) => ({
  x:    Math.random() * W,
  y:    Math.random() * H,
  r:    i % 5 === 0 ? Math.random() * 3 + 3 : Math.random() * 2.5 + 0.8,
  vx:   (Math.random() - 0.5) * 0.28,
  vy:   (Math.random() - 0.5) * 0.28,
  hub:  i % 5 === 0,
}));

(function draw() {
  ctx.clearRect(0, 0, W, H);

  nodes.forEach(n => {
    n.x += n.vx; n.y += n.vy;
    if (n.x < -40)    n.x = W + 40;
    if (n.x > W + 40) n.x = -40;
    if (n.y < -40)    n.y = H + 40;
    if (n.y > H + 40) n.y = -40;
  });

  const MAX = 140;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx   = nodes[i].x - nodes[j].x;
      const dy   = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAX) {
        ctx.strokeStyle = `rgba(210,117,74,${(1 - dist / MAX) * 0.35})`;
        ctx.lineWidth   = 0.7;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = n.hub ? 'rgba(210,117,74,0.9)' : 'rgba(241,236,226,0.55)';
    ctx.fill();
  });

  requestAnimationFrame(draw);
}());
