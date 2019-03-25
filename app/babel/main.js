document.querySelectorAll('.swiper-container').forEach(function(elem) {
    let elemWrap = elem.parentElement.nextElementSibling;
    new Swiper(elem, {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: elemWrap.querySelectorAll('.swiper-next'),
        prevEl: elemWrap.querySelectorAll('.swiper-prev'),
      },
      breakpoints: {
        1180: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
  });