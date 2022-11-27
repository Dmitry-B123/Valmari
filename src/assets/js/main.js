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

// slider courses
$(function () {
   $('.courses__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slider-courses-btn-left'),
      nextArrow: $('.slider-courses-btn-right'),
      dots: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});

let x = document.querySelectorAll('ul.slick-dots li button');

x.forEach(el => {
   el.textContent = "";
   console.log(el);
});