// Swiper initialization
const swiper = new Swiper('.heroSwiper', {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  speed: 1200,
});

// Mobile menu toggle
const navMenu = document.getElementById('nav-menu');
const menuOpenBtn = document.getElementById('menu-open-button');
const menuCloseBtn = document.getElementById('menu-close-button');

menuOpenBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
});
menuCloseBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Animate menu cards on scroll (for better effect)
function revealMenuCards() {
  const cards = document.querySelectorAll('.menu-card');
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < trigger) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealMenuCards);
window.addEventListener('load', revealMenuCards);
