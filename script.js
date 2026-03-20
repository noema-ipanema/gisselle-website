const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const sparkleLayer = document.getElementById('sparkle-layer');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (sparkleLayer && !prefersReducedMotion) {
  const symbols = ['❤', '✦', '✧'];

  const createSparkle = () => {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${75 + Math.random() * 20}%`;
    sparkle.style.fontSize = `${0.65 + Math.random() * 0.65}rem`;
    sparkle.style.animationDuration = `${7 + Math.random() * 4}s`;
    sparkle.style.animationDelay = `${Math.random() * 0.6}s`;

    sparkleLayer.appendChild(sparkle);

    window.setTimeout(() => {
      sparkle.remove();
    }, 11500);
  };

  createSparkle();
  window.setInterval(createSparkle, 950);
}
