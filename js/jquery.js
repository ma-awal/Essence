// banner Slider
$(document).ready(function () {
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });
});
//brand slider
$(document).ready(function () {
  $('.brand-slider ').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
  });
});
$(document).ready(function () {
  $('.top-brand-slider ').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
  });
});

$(document).ready(function () {
  $('.card-content').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    adaptiveHeight: true, //

    centerPadding: '50px', // Adjust the center padding as needed
  });
});
