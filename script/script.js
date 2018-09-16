$('#start').on('click', function () {
  $('body, html').animate({
    scrollTop: $('body').offset().top
  }, 700)

})
$('#aboutMe, .btn').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.aboutMe').offset().top,
  }, 700)
})
$('#insurance').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.insurance').offset().top,
  }, 700)
})
$('#contact').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.contact').offset().top,
  }, 1000)
})