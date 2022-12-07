// menu ul courses-menu__sublist-select
let liSublistSelect = document.querySelectorAll('.courses-menu__select-item');

liSublistSelect.forEach(el => {
   el.addEventListener('click', function () {
      el.classList.toggle('courses-menu__select-item-active');
   });
});

// menu ul courses-menu__list-select
let titleListSelect = document.querySelectorAll('.courses-menu__select-title');

titleListSelect.forEach(el => {
   el.addEventListener('click', function () {
      el.classList.toggle('courses-menu__list-select-active');
   });
});
