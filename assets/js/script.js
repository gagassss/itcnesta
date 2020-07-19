
$('.sidenav').sidenav();

var height = 400

if (screen.width <= 992) {
  // $('.brand-logo').addClass('hide')
}

if (screen.width <= 768) {
  height = 350
} if (screen.width >= 992) {
  height = 500
}

$('.slider').slider({
  indicators: false,
  interval: 3500,
  height: height
})

$(document).ready(function(){
  $('.materialboxed').materialbox();
})

$(document).ready(function(){
  $('.modal').modal();
})

if(screen.width <= 992) $('.jumbotron-content').css('height','100px').removeClass('mt-5').addClass('mt- mb-4')

if(screen.width > 992) $('.jumbotron-content').css('height','180px')

$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

if(screen.width >= 992) $('.contact-info').addClass('ml-5')

if (document.title == 'IT CLUB NESTA') $('.home').addClass('red-text text-lighten-1')

if (document.title == 'NEWS | IT CLUB NESTA') $('.news').addClass('red-text text-lighten-1')

if (document.title == 'GALLERY | IT CLUB NESTA') $('.gallery').addClass('red-text text-lighten-1')

if (document.title == 'CONTACTS | IT CLUB NESTA') $('.contact').addClass('red-text text-lighten-1').$('.jumbotron')

if (document.title == 'ABOUT | IT CLUB NESTA') $('.about').addClass('red-text text-lighten-1').$('.jumbotron')


$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

     