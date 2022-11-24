//burger
const btnBurger = document.querySelector(".burger");
const menuBurger = document.querySelector(".burger-window");
const menuClose = document.querySelector(".burger-close");

btnBurger.addEventListener('click', () => {
   menuBurger.classList.add('burger-window--active');
});
menuClose.addEventListener('click', () => {
   menuBurger.classList.remove('burger-window--active');
});

// langs button
const btnLangs = document.querySelectorAll(".header__langs img");
const menuLangs = document.querySelectorAll(".langs-list");

btnLangs.forEach((el) => {
   el.addEventListener('click', () => {
      menuLangs.forEach((m) => m.classList.toggle('langs-list-active'));
   });
});
