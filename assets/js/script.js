// Default Ready Function
const Base = function init() {
  // Forces Correct Operating Context >= ES2015

  $(() => {

    const $popupWindow = $('.js-popup');
    let $modalTitle = $('.js-modal-title');
    let $modalCopy = $('.js-modal-copy');
    const $revealBtn = $('.js-reveal-btn');
    const $revealElement = $('.js-reveal');

    $('.js-slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
    });

    $('.js-modal-open').on('click', function() {
      let dataTitle = $(this).data("title"), dataCopy = $(this).data("copy");
      $popupWindow.show();
      $popupWindow.find($modalTitle).html(dataTitle);
      $popupWindow.find($modalCopy).html(dataCopy);
    });

    $('.js-close').on('click', function() {
      $popupWindow.hide();
    });

    $revealBtn.on('click', function(e) {
      e.preventDefault();
      let $this = $(this);
      if(!$(this).hasClass('active')) {
        $this.addClass('active').html('Close');
        $revealElement.stop().slideDown();
      } else {
        $this.removeClass('active').html('Read More');
        $revealElement.stop().slideUp();
      }
    });

  });
};
Base();
