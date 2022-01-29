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
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300,
      // classes: {
      //
      // }
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
    this.control = this.accordion.querySelector('.accordion__control');
    this.content = this.accordion.querySelector('.accordion__content');
    this.event();
  }

  event() {
    console.log('event!');
    //console.log(this.options.speed);
    if (this.accordion) {
      this.accordion.addEventListener('click', (e) => {
        this.accordion.classList.toggle('open');

        if (this.accordion.classList.contains('open')) {
          this.open();
        } else {
          this.close();
        }
      });
    }
  }

  open() {
    //
    this.accordion.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
    this.accordion.classList.add('is-open');
    this.control.setAttribute('aria-expanded', true);
    this.content.setAttribute('aria-hidden', false);
    this.content.style.maxHeight = this.content.scrollHeight + 'px';
    this.options.isOpen(this);
  }

  close() {
    //
    this.accordion.classList.remove('is-open');
    this.control.setAttribute('aria-expanded', false);
    this.content.setAttribute('aria-hidden', true);
    this.content.style.maxHeight = null;
    this.options.isClose(this);
  }
}
