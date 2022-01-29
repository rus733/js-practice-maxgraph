'use strict';

//import oneModule from './modules/one';
//import twoModule from './modules/two';
//oneModule();
//twoModule();

const accordion1 = new GraphAccordion('.accordion-1', {
  speed: 500,
  isOpen: (acc) => {
    console.log(acc);
  },
  isClose: (acc) => {
    console.log(acc);
  },
});

const accordion2 = new GraphAccordion('.accordion-2', {
  speed: 300,
});
