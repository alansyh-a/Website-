document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#surpriseBtn');
  const section = document.querySelector('#surpriseSection');

  btn.addEventListener('click', function() {
    section.scrollIntoView({ behavior: 'smooth' });
  });

});
function smoothScrollTo(target, duration) {
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('surpriseBtn');
  const section = document.getElementById('surpriseSection');

  btn.addEventListener('click', function () {
    smoothScrollTo(section, 400); // 🔥 300ms = cepet
  });
});
