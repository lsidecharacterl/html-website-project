const intro = document.querySelector('.intro');
const website = document.querySelector('.website');

setTimeout(() => {
  intro.classList.add('fade-out');
  website.classList.remove('hidden');
  document.body.style.overflow = 'auto';
}, 3500);
