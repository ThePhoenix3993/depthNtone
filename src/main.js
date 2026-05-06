// -----------------------------------------------------------------------------
// 0. Custom Scissors Cursor
// -----------------------------------------------------------------------------
const cursorScissors = document.querySelector('.cursor-scissors');

window.addEventListener('mousemove', (e) => {
  if (cursorScissors) {
    // The cursor image will follow the mouse.
    cursorScissors.style.left = `${e.clientX}px`;
    cursorScissors.style.top = `${e.clientY}px`;
  }
});

document.querySelectorAll('a, button, input, select, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorScissors) {
      cursorScissors.style.transform = 'translate(-50%, -50%) scale(1.3)';
    }
  });
  el.addEventListener('mouseleave', () => {
    if (cursorScissors) {
      cursorScissors.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });
});

// -----------------------------------------------------------------------------
// 1. GSAP ScrollTrigger Setup for Fade-Ups
// -----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.fade-up').forEach((el) => {
  // Respect animation delays if defined in classes
  let delay = 0;
  if (el.classList.contains('delay-1')) delay = 0.2;
  if (el.classList.contains('delay-2')) delay = 0.4;

  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: delay,
    ease: 'power3.out'
  });
});

// -----------------------------------------------------------------------------
// 2. Initialize VanillaTilt for Service Cards
// -----------------------------------------------------------------------------
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 5,           // Reduced max tilt for subtlety in light theme
  speed: 400,
  glare: true,
  "max-glare": 0.1, // Subtle glare
});

// -----------------------------------------------------------------------------
// Note: 
// 1. Removed Background floating flowers and scissors.
// 2. Removed heavy 3D carousel, using clean CSS flexbox standard layout.
// 3. Removed god-level heavy dark mode effects (liquid buttons, canvas smoke, svgs filters).
// -----------------------------------------------------------------------------
