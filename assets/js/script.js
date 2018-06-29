// Default Ready Function
const Base = function init() {
  // Forces Correct Operating Context >= ES2015

  $(() => {
    $('.js-slider').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
    });
  });
};
Base();
