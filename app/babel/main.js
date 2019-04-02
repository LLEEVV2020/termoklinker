let swiper_base_each = document.querySelectorAll(".swiper-base");

[].forEach.call(swiper_base_each, function(elem) {
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

/*document.querySelectorAll('.swiper-base').forEach(function(elem) {
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
  });*/

  window.onload = function() {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    //spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    //freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    
    //spaceBetween: 10,
    loop: true,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2
    },
    navigation: {
      nextEl:  document.querySelectorAll('.swiper-button-next'),
      prevEl: document.querySelectorAll('.swiper-button-prev'),
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });


  /**
   * all scripts
   */
        
 /* document.querySelectorAll('.swiper-grid').forEach(function (elem) {
          
    var galleryThumbs = new Swiper(elem.querySelector('.gallery-thumbs2'), {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper(elem.querySelector('.gallery-top2'), {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
  });*/

  let swiper_grid_each = document.querySelectorAll(".swiper-grid");
  
  [].forEach.call(swiper_grid_each, function(elem) {
    var galleryThumbs = new Swiper(elem.querySelector('.gallery-thumbs2'), {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(elem.querySelector('.gallery-top2'), {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  });  


  let swiper = new Swiper('.swiper-container-gallery', {
   /* pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },*/
    
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

};

$(".video-youtube").hover(
    function(){
       
         let iframe = this.querySelectorAll('iframe');
         $(iframe).css({'opacity' : 1});
    },
    function(){
        let iframe = this.querySelectorAll('iframe');
         $(iframe).css({'opacity' : 0});
});
$(".img-1").hover(
    function() {
        $(".js-content > *").css({"display": "none"});
        $(".content-1").css({"display": "block"});
    }
    
);
$(".content-1 iframe").mouseup(
    function () {
        console.log("https://ru.stackoverflow.com/questions/520943/%D0%9E%D1%82%D1%81%D0%BB%D0%B5%D0%B4%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0%D0%B6%D0%B0%D1%82%D0%B8%D1%8F-play-%D0%BF%D0%BE-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%81-%D1%8E%D1%82%D1%83%D0%B1%D0%B0-%D0%B2-iframe");
    }
);

$(".img-2").hover(
    function() {
        $(".js-content > *").css({"display": "none"});
        $(".content-2").css({"display": "block"});
    }
    
);
$(".img-3").hover(
    function() {
        $(".js-content > *").css({"display": "none"});
        $(".content-3").css({"display": "block"});
    }
    
);
$(".img-4").hover(
    function() {
        $(".js-content > *").css({"display": "none"});
        $(".content-4").css({"display": "block"});
    }
    
);
$(".img-5").hover(
    function() {
        $(".js-content > *").css({"display": "none"});
        $(".content-5").css({"display": "block"});
    }
    
);


