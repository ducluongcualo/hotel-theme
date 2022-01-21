
// slider
$('.slider .owl-carousel') .owlCarousel({
    items:1,
    margin: 0,
    loop:true,
    stagePadding:0,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    nav: true,
    dots:false,
    navText: ['<button type="button" class="btn btn-slider btn-slider-prev"> <i class="far fa-chevron-left"></i> </button>', '<button type="button" class="btn btn-slider btn-slider-next"><i class="far fa-chevron-right"></i> </button>'],
})

// datepicker

// var date = $("").dtpicker({ dateFormat: 'dd,MM,yyyy' }).val()
// $("#my-input").datepicker( 'getDate' );
//  var date = $("#my-input").datepicker();
//  var date = $('#my-input').datepicker();
//  var d = new Date();
//  console.log("day", d.getDay())