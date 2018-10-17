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
    scrollTop: $(goTOSection).offset().top - 50
  }, 700)

})

// 

//                                

$(document).on('scroll', function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $art1 = $('.art-introduction');
  const art1FromTop = $art1.offset().top; // pobieramy gdzie ten element jest od początku układu
  const art1Height = $art1.outerHeight(); // outerHeight pobranie wysokości elementu z padingiem i borderem

  if (scrollValue > art1FromTop + art1Height - windowHeight) {
    $art1.addClass('active');
  }
  if (scrollValue < 100) { //jeśli wysokość scrolla jest mniejsza niż 100 px Pamiętaj nie piszemy PX to zabierz klasę active
    $('.art-introduction').removeClass('active');
  }
})