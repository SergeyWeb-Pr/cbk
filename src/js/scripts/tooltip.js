// // Подключение плагина для позиционирования тултипов
// import { createPopper } from '@popperjs/core';

// const el = document.querySelector('#sss');
// const tooltip = document.querySelector('#ddd');

// createPopper('#sss', '#ddd', {
//   placement: 'right'
// });

$(document).ready(function () {
  $('.js-menu-button').on('click', function () {

    // Добавляем класс 'active' текущему элементу
    $(this).toggleClass('active');
    $(this).siblings('.js-menu-list').toggleClass('active');
  });
});
