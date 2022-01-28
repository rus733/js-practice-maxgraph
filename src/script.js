'use strict';
//console.log('script');
// document.addEventListener('DOMContentLoaded', () => {
//   const accordions = document.querySelectorAll('.accordion');

//   accordions.forEach((el) => {
//     el.addEventListener('click', (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector('.accordion__control');
//       const content = self.querySelector('.accordion__content');

//       self.classList.toggle('is-open');

//       // если открыт аккордеон
//       if (self.classList.contains('is-open')) {
//         control.setAttribute('aria-expanded', true);
//         content.setAttribute('aria-hidden', false);
//         content.style.maxHeight = content.scrollHeight + 'px';
//         //content.style.opacity = '1';
//       } else {
//         control.setAttribute('aria-expanded', false);
//         content.setAttribute('aria-hidden', true);
//         content.style.maxHeight = null;
//       }
//     });
//   });
// });
class GraphAccordion {
  constructor(selector, options) {
    //
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300,
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
  }
}
