// Scroll Reveal

ScrollReveal({ reset: true });

ScrollReveal().reveal('.slideDown', {
  duration: 1500,
  origin: 'top',
  distance: '100px',
  easing: 'cubic-bezier(.37,.01,.74,1)',
  opacity: 0.3,
  scale: 0.5,
});

ScrollReveal().reveal('.scaleUp', {
  duration: 3000,
  scale: 0.85,
});
ScrollReveal().reveal('.scaleDown', {
  duration: 3000,
  scale: 0.85,
});

ScrollReveal().reveal('.slideUp', {
  duration: 1500,
  origin: 'bottom',
  distance: '100px',
  easing: 'cubic-bezier(.37,.01,.74,1)',
  opacity: 0.3,
  scale: 0.5,
});
