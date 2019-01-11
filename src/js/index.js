$(function () {
  const $sponsorImages = $('.sponsor-img');

  // grow / shrink sponsor images on mouseenter / mouseleave
  $sponsorImages
    .on('mouseenter', function () {
      $(this).animate({
        margin: -10,
        width: '+=20',
        height: '+=20'
      });
    })
    .on('mouseleave', function () {
      $(this).animate({
        margin: 0,
        width: '-=20',
        height: '-=20'
      })
    });
});
