// menu ul courses-menu__sublist-select  and  hidden for click li
let liSublistSelect = document.querySelectorAll('.courses-menu__select-item');

liSublistSelect.forEach(el => {
   el.addEventListener('click', function () {
      if (el.classList.contains('item-sublist')) {
         el.classList.toggle('courses-menu__select-item-active');
      } else {
         let titleListSelect = document.querySelectorAll('.courses-menu__select-title');

         titleListSelect.forEach(el => {
            el.classList.remove('courses-menu__list-select-active');
         });
      }
   });
});


// menu ul courses-menu__list-select
let titleListSelect = document.querySelectorAll('.courses-menu__select-title');

titleListSelect.forEach(el => {
   el.addEventListener('click', function () {
      el.classList.toggle('courses-menu__list-select-active');
   });
});


// сортировка данных
// window.onload = function () позволяет избежать конфликта с jquery
window.onload = function () {
   let coursesMenu = document.querySelector('.courses-menu__inner');
   let itemMenu = document.querySelectorAll('.courses-menu__item');
   let coursesItems = document.querySelectorAll('.courses-list__inner .courses__item');

   function startCourses() {
      itemMenu.forEach(el => {
         if (el.classList.contains('courses-menu__item-active')) {
            coursesItems.forEach(item => {
               item.classList.add('courses__item-active');
            })
         }
      })
   }
   startCourses()

   function sortCourses(menu) {
      menu.addEventListener('click', function (e) {
         let coursesItems = document.querySelectorAll('.courses-list__inner .courses__item');
         let target = e.target.closest('.courses-menu-btn');
         if (!target) return

         // фон кнопок
         let itemMenu = document.querySelectorAll('.courses-menu__item');
         itemMenu.forEach(el => {
            el.classList.remove('courses-menu__item-active');
         })
         target.classList.add('courses-menu__item-active');

         // перебор items
         coursesItems.forEach(item => {
            if ((item.dataset.cours == target.dataset.courses ||
               item.dataset.coursesAll == target.dataset.courses)) {
               item.classList.add('courses__item-active');
            } else {
               item.classList.remove('courses__item-active');
            }
         })
      })
   }
   sortCourses(coursesMenu)
}


// пагинация simplePagination.js + jQuery
$(function () {
   let items = $('.courses-list__inner .courses__item');
   let numItems = items.length;
   let perPage = 6;

   items.slice(perPage).hide();

   $('#pagin').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "<",
      nextText: ">",
      onPageClick: function (pageNumber) {
         let showFrom = perPage * (pageNumber - 1);
         let showTo = showFrom + perPage;
         items.hide().slice(showFrom, showTo).show();
      }
   });
});
