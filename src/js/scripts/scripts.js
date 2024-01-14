$(document).ready(function () {
  $('.js-paper-line-button').on('click', function () {
    $(this).addClass('hide');
    $(this).siblings('.js-paper-line-content').addClass('show');
  });

  $('.js-cardboard-tech-button').on('click', function () {
    $('.js-cardboard-tech-image').toggleClass('hide');
    $('.js-cardboard-tech-text').toggleClass('show');
  });
});
