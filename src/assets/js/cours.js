// accordion с реверсивным закрытием 
// .accordion__block родитель
let blockAccordionCours = document.querySelectorAll('.course-program__block');

function accordion(blockParent) {
   let btnAccordion = document.querySelectorAll('.accordion-btn');

   for (let btn of btnAccordion) {
      btn.addEventListener('click', function (e) {
         let panel = e.target.closest('.accordion__block');

         blockParent.forEach(block => {
            block.classList.remove('accordion__block-active');
         })
         panel.classList.add('accordion__block-active');

         btnAccordion.forEach(btn => {
            btn.classList.remove('accordion-btn-active');
         })
         e.target.classList.add('accordion-btn-active');
      })
   }
}

accordion(blockAccordionCours)