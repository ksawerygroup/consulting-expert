// $('#start').on('click', function () {
//   $('body, html').animate({
//     scrollTop: $('body').offset().top
//   }, 700)

// })
// $('#aboutMe, .btn').on('click', function () {
//   $('body, html').animate({
//     scrollTop: $('.aboutMe').offset().top,
//   }, 700)
// })
// $('#insurance').on('click', function () {
//   $('body, html').animate({
//     scrollTop: $('.insurance').offset().top,
//   }, 700)
// })
// $('#contact').on('click', function () {
//   $('body, html').animate({
//     scrollTop: $('.contact').offset().top,
//   }, 1000)
// })


$('.navbar-nav a, .top-button').on('click', function () { //pobieramy przycisk a
  const goTOSection = '.' + $(this).attr('id'); //przypisanie stałej atrybutu clasy przez element this i dodanie hasha do stringa

  $('body, html').animate({
    scrollTop: $(goTOSection).offset().top
  }, 500)

})