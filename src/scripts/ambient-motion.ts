// Animate below-the-fold browsing surfaces once. Content is never hidden in CSS.
document.addEventListener('astro:page-load', () => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches) return;
  const animations = new Set<Animation>();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const animation = entry.target.animate(
        [{ opacity: .55, translate: '0 8px' }, { opacity: 1, translate: '0 0' }],
        { duration: 520, easing: 'cubic-bezier(.22, 1, .36, 1)' },
      );
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    }
  }, { threshold: .08 });
  document.querySelectorAll('.home-index-list .post-row, .journal-topics, .site-footer .newsletter').forEach((element) => {
    if (element.getBoundingClientRect().top >= innerHeight) observer.observe(element);
  });
  function stop() {
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
    animations.clear();
    preference.removeEventListener('change', stop);
  }
  preference.addEventListener('change', stop);
  document.addEventListener('astro:before-swap', stop, { once: true });
});
