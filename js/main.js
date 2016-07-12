jQuery(function($) {

//Preloader
  var preloader = $('.preloader');
  $(window).load(function(){
    preloader.remove();
  });

  //#main-slider
  var slideHeight = $(window).height();
  $('#home-slider .item').css('height',slideHeight);

  $(window).resize(function(){'use strict',
    $('#home-slider .item').css('height',slideHeight);
  });
  
  //Scroll Menu
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>slideHeight ){
      $('.main-nav').addClass('navbar-fixed-top');
    } else {
      $('.main-nav').removeClass('navbar-fixed-top');
    }
  });
  
  // Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

    $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });
      $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });
      // Portfolio Single View
  $('#portfolio').on('click','.folio-read-more',function(event){
    event.preventDefault();
    var link = $(this).data('single_url');
    var full_url = '#portfolio-single-wrap',
    parts = full_url.split("#"),
    trgt = parts[1],
    target_top = $("#"+trgt).offset().top;

    $('html, body').animate({scrollTop:target_top}, 600);
    $('#portfolio-single').slideUp(500, function(){
      $(this).load(link,function(){
        $(this).slideDown(500);
      });
    });
  });

  // Close Portfolio Single View
  $('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
    event.preventDefault();
    var full_url = '#portfolio',
    parts = full_url.split("#"),
    trgt = parts[1],
    target_offset = $("#"+trgt).offset(),
    target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 600);
    $("#portfolio-single").slideUp(500);
  });

  if($(".testimonials").length > 0){
  $(".testimonials .outer").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
            }
    }
        ]
  });
}


  if($(".sec-testimonials").length > 0){
  $(".sec-testimonials .outer").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
            }
    }
        ]
  });
}
//Countdown
  $('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
      $(this).find('.timer').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
      $(this).unbind('inview');
    }
  });
  });