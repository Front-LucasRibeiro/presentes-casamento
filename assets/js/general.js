

function fieldsCheckout() {
  // checkout 
  $('[name="order_comments"]').removeAttr('placeholder')
  $('.woocommerce-billing-fields p.form-row').removeClass('validate-required')
  $('.woocommerce-billing-fields p.form-row').removeClass('validate-postcode')

  $('#billing_email').val('novopedido@gmail.com')
}

function openModalNoivos() {

  let modal = sessionStorage.getItem('modal-noivos')

  if(modal !== 'true'){
    $('.modal-noivos').css('display','flex');
  }

  window.onclick = function (e) {
    if (e.target.className === 'modal-noivos') {
      $('.modal-noivos').hide();
      sessionStorage.setItem('modal-noivos', 'true');
    }
  }

  $('.modal-noivos .fechar').on('click', function () {
    $('.modal-noivos').hide();
    sessionStorage.setItem('modal-noivos', 'true');
  })
}

function galeriaFotos(){
  $('.galeria .slick-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slick-miniatura',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
  $('.slick-miniatura').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slick-main',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 783,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}

function setMenuMob(){
  if(window.innerWidth <= 1229){
    $('body').addClass('ast-header-break-point')
  }
}

$(document).ready(function () {
  fieldsCheckout()
  openModalNoivos();
  galeriaFotos();
  setMenuMob()
})