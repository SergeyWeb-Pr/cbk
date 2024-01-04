import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

//scripts
import './scripts/menu.js';
import './scripts/swiper.js';
import './scripts/fancy.js';

$('.js-button-tab').on('click', function() {
  // Удаляем класс у всех элементов
  $('.js-button-tab').removeClass('active');

  // Добавляем класс текущему элементу
  $(this).addClass('active');
});


