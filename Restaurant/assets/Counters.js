document.addEventListener('DOMContentLoaded', function() {
  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const duration = 1600; // ms
    const start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    let current = start;
    const increment = Math.ceil(target / (duration / stepTime));
    function update() {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
      } else {
        counter.textContent = current.toLocaleString();
        setTimeout(update, stepTime);
      }
    }
    update();
  }

  // Animate when in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  let animated = false;
  function checkAndAnimate() {
    if (animated) return;
    const counters = document.querySelectorAll('.counter-number');
    if (counters.length && isInViewport(counters[0])) {
      counters.forEach(animateCounter);
      animated = true;
    }
  }

  window.addEventListener('scroll', checkAndAnimate);
  window.addEventListener('load', checkAndAnimate);
});