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
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 820,
            settings: {
              dots: false,
              arrows: true,
              speed: 1500,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 550,
            settings: {
              dots: false,
              arrows: true,
              speed: 1500,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 350,
            settings: {
              dots: false,
              arrows: true,
              speed: 1500,
              slidesToShow: 1
          }
        }] 
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

  // Tabs

    $('.application-tabs__item').on('click', function(e) {
          e.preventDefault();
          $('.application-tabs__item').removeClass('application-tabs__item--active');
          $(this).addClass('application-tabs__item--active');
          $('.application-tabs__content').removeClass('application-tabs__content--active');
          $($(this).attr('href')).addClass('application-tabs__content--active');
    });

    $('.structure-tabs__item').on('click', function(e) {
        e.preventDefault();
        $('.structure-tabs__item').removeClass('structure-tabs__item--active');
        $(this).addClass('structure-tabs__item--active');
        $('.structure-tabs__content').removeClass('structure-tabs__content--active');
        $($(this).attr('href')).addClass('structure-tabs__content--active');
    });

    $('.registersearch-tabs__item').on('click', function(e) {
        e.preventDefault();
        $('.registersearch-tabs__item').removeClass('registersearch-tabs__item--active');
        $(this).addClass('registersearch-tabs__item--active');
        $('.registersearch-tabs__content').removeClass('registersearch-tabs__content--active');
        $($(this).attr('href')).addClass('registersearch-tabs__content--active');
    });

    $('.page-tabs__item').on('click', function(e) {
        e.preventDefault();
        $('.page-tabs__item').removeClass('page-tabs__item--active');
        $(this).addClass('page-tabs__item--active');
        $('.page-tabs__content').removeClass('page-tabs__content--active');
        $($(this).attr('href')).addClass('page-tabs__content--active');
    });

    const programs = document.querySelectorAll('.program')
    programs.forEach((program) => {
      program.addEventListener('click', () => {
            program.classList.toggle('active');
      });
    });


});


// Pop-up1

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('active');

})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})

// Pop-up2

const openPopUp1 = document.getElementById('open_pop_up1');
const closePopUp1 = document.getElementById('pop_up_close1');
const popUp1 = document.getElementById('pop_up1');

openPopUp1.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('active');

})

closePopUp1.addEventListener('click', () => {
  popUp.classList.remove('active');
})








