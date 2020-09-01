$(document).ready(function(){

  $('.slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });

  $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
      var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
      if( ! $target.length ) return;
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
      window.location.hash = hash;
    });
  });

  function disableScroll() 
  {
    $('html, body').css({
      overflow: 'hidden'
    })
  } 

  function trueScrolll(){
    $('html, body').css({
      overflow: 'auto'
    })
  }

  $('.header__btn, .call__btn_mob').click(function(){
    $('.call__bg').fadeIn(300, disableScroll());
  });
  $('.call__row button').click(function(){
    $('.call__bg').fadeOut(300, trueScrolll());
  })
  $('.call__bg').click(function(event){
    if (event.target == this) 
      $(this).fadeOut(300, trueScrolll());
  })

  $('.bio__btn').click(function(){
    $('.info__bg').fadeIn(300, disableScroll());
  });
  $('.info__btn_container button').click(function(){
    $('.info__bg').fadeOut(300, trueScrolll());
  })
  $('.info__bg').click(function(event){
    if (event.target == this) 
      $(this).fadeOut(300, trueScrolll());
  })

  $('.what__btn').click(function(){
    $('.service__bg').fadeIn(300, disableScroll());
  });
  $('.service__btn').click(function(){
    $('.service__bg').fadeOut(300, trueScrolll());
  })
  $('.service__bg').click(function(event){
    if (event.target == this) 
      $(this).fadeOut(300, trueScrolll());
  })

  $('.ex__btn').click(function(){
    $('.project__bg').fadeIn(300, disableScroll());
  });
  $('.project__btn_top').click(function(){
    $('.project__bg').fadeOut(300, trueScrolll());
  })
  $('.project__bg').click(function(event){
    if (event.target == this) 
      $(this).fadeOut(300, trueScrolll());
  })

  $('.header__btn_mob').click(function(){
    $('.mob-menu__bg').fadeIn(300);
    $('.mob-menu').css({
      display : 'block',
      'animation': 'mob-menu_anim_op 300ms linear 0s none',
      'animation-fill-mode': 'forwards'
    })
    disableScroll();
  });
  $('.mob-menu__row button').click(function(){
    $('.mob-menu__bg').fadeOut(300);
    $('.mob-menu').hide(300, trueScrolll());

  })
  $('.mob-menu__bg').click(function(event){
    if (event.target = this) 
      $(this).fadeOut(300, trueScrolll());
  })


  $('#input__tel').mask('+7(000)000-00-00');
});