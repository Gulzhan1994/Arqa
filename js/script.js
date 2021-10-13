$(function(){

    let alertt = document.querySelector(".alert--fixed");
    let alertClose = document.querySelectorAll(".alert--close")
    for (let item of alertClose ) {
        item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
        })
    }

    $('.partnership__slider').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1000,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 820,
            settings: {
              dots: false,
              speed: 1500,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 550,
            settings: {
              dots: false,
              speed: 1500,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 350,
            settings: {
              dots: false,
              speed: 1500,
              slidesToShow: 1
          }
        }] 
    });

    $('.acceptance-tabs__item').on('click', function(e) {
        e.preventDefault();
        $('.acceptance-tabs__item').removeClass('acceptance-tabs__item--active');
        $(this).addClass('acceptance-tabs__item--active');
        $('.acceptance-tabs__content').removeClass('acceptance-tabs__content--active');
        $($(this).attr('href')).addClass('acceptance-tabs__content--active');
    });

    let hamb = document.querySelector(".burger")
    let headerMenu = document.querySelector(".header-nav__items")

    hamb.addEventListener("click", function (event) {
    hamb.classList.toggle("burger__active");
    headerMenu.classList.toggle("header-nav__items__active");
    });



    $('.header-nav__item a').on("click", function(){
      if( $('.burger').css('display') == 'block' ){
        if( $(this).hasClass('active') ){
          $(this).removeClass('active');
          $(this).siblings('.sub-menu').slideUp();
        } else{
          $(this).addClass('active');
          $(this).siblings('.sub-menu').slideDown();
        }
      }
    });
    
    $(window).resize(function(){
      if( $('.burger').css('display') == 'block' ){
        $('.sub-menu').hide();
      }
      else{
        $('.sub-menu').show();
       
      }
    });

    $('.section-select__top').on("click", function(){
      $('.section-select').slideToggle();
      $('.faq-icon').toggleClass('active');
    });

    
    // Select Script

    $('.select-form .select__title').on("click", function(){
      if($(this).siblings('.search-select').hasClass('active')){
          $(this).siblings('.search-select').slideUp().removeClass('active');
      } else{
          $('.search-select').slideUp().removeClass('active');
          $(this).siblings('.search-select').slideDown().addClass('active');
      }
    });

    $('.search-select').on("click", function(event){
      var target = event.target;
      var txt, val, cls;

      if ($(target).hasClass('search-select__item-link')){
          txt = $(target).text();
          $(this).children().children('.search-select__item-link').removeClass('active');
          cls = $(target).attr('class').slice(8); 
          $(target).addClass('active');
          val = $(target).attr('data-attr');
      }

    });


});

$(document).ready(function(){
  $('.developments__top-icon').on('click', () => {
    $('.developments__share').toggle();
  })
})







