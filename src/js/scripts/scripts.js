$(document).ready(function () {
  //Офисная бумага - Линейка продукции
  $('.js-paper-line-button').on('click', function () {
    $(this).addClass('hide');
    $(this).siblings('.js-paper-line-content').addClass('show');
  });
  //Картон - Структура картона
  $('.js-cardboard-tech-button').on('click', function () {
    $('.js-cardboard-tech-image').toggleClass('hide');
    $('.js-cardboard-tech-text').toggleClass('show');
  });
  //Прочие продукты - показать весь текст
  $('.js-other-products-button').on('click', function () {
    $(this).addClass('hide');
    $(this).siblings('.js-other-products-list').removeClass('show');
  });
  //Карьера - Смотреть подробнее
  $('.js-career-work-button').on('click', function () {
    $(this).addClass('hide');
    $(this).siblings('.js-career-work-item').addClass('show');
  });
});
