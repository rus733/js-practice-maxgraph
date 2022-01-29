'use strict';

//import oneModule from './modules/one';
//import twoModule from './modules/two';
//oneModule();
//twoModule();
//
//вызов плагина аккордеон 2 шт
const accordion1 = new GraphAccordion('.accordion-1', {
  speed: 500,
  isOpen: (acc) => {
    //здесь функционал для доступа к опциям обьекта при операции открытие аккордеона
    console.log(acc);
  },
  isClose: (acc) => {
    //здесь функционал для доступа к опциям обьекта при операции закрытии аккордеона
    console.log(acc);
  },
});

const accordion2 = new GraphAccordion('.accordion-2', {
  speed: 300,
});
