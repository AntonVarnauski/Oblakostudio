const menuBtn = document.querySelector('.nav__burger');
const mobMenu = document.querySelector('.mobile__nav');
const menuLinks = document.querySelectorAll('.mobile__nav a');
const callBtn = document.querySelector('.footer__callback');
const closeBtn = Array.from(document.querySelectorAll('.modal__close'));
const videoModal = Array.from(document.querySelectorAll('.production__item--video'));

callBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal').showModal();
});

closeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.modal').close();
  });
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('nav__burger--open');
  mobMenu.classList.toggle('mobile__nav--open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('nav__burger--open');
    mobMenu.classList.remove('mobile__nav--open');
  });
});

videoModal.forEach((video) => {
  video.querySelectorAll('.production__link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      videoModal.querySelector('.modal').showModal();
    });
  });
});

videoModal.forEach((video) => {
  video.querySelector('.modal__close').addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.querySelector('.modal').close();
  });
});
