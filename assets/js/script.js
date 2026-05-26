
// Registry toàn cục cho nhiều slider
window.sliders = window.sliders || {};

function initSlider(sliderId, indicatorsId) {
  const slider = document.getElementById(sliderId);
  const indicators = document.getElementById(indicatorsId);
  const slides = slider.children;
  const totalSlides = slides.length;

  let currentIndex = 0;
  let autoSlideInterval = null;

  function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('indicator');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      indicators.appendChild(dot);
    }
  }

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
  }

  function updateIndicators() {
    const dots = indicators.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === currentIndex);
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const threshold = 50;

    slider.parentElement.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].clientX;
    });

    slider.parentElement.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) nextSlide();
        else prevSlide();
      }
    });
  }

  function init() {
    createIndicators();
    showSlide(0);
    startAutoSlide();
    addTouchSupport();

    slider.parentElement.addEventListener('mouseenter', stopAutoSlide);
    slider.parentElement.addEventListener('mouseleave', startAutoSlide);
  }
  // 👇 Expose API cho inline onclick
  window.sliders[sliderId] = { prevSlide, nextSlide, goToSlide, startAutoSlide, stopAutoSlide };

  init();
}

// Chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  initSlider('slider1', 'indicators1');
  initSlider('slider2', 'indicators2');

  document.getElementById('prev1').addEventListener('click', () => sliders['slider1'].prevSlide());
  document.getElementById('next1').addEventListener('click', () => sliders['slider1'].nextSlide());
  document.getElementById('prev2').addEventListener('click', () => sliders['slider2'].prevSlide());
  document.getElementById('next2').addEventListener('click', () => sliders['slider2'].nextSlide());
});

// Chuyển đổi chế độ sáng/tối
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.theme-switcher');
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
