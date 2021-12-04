
// slider //
$(function () {

  $('document').ready(function () {
    $('.sliders').each(function () {
      $(this).not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        prevArrow: '<div class="slide-arrow prev-arrow other-prev"></div>',
        nextArrow: '<div class="slide-arrow next-arrow other-next"></div>',
        responsive: [
          {
            breakpoint: 480,
            settings: {
              centerPadding: '0px'
            }
          }
        ]
      });
    });
  });
});

//fadeIn・fadeOut//
function fadeIn(a) {
  let judge = 1;
  let deltaTime = 1;
  let maxTime = 100;
  let opacity = 0;
  let deltaOpacity = deltaTime / maxTime;
  a.style.display = "block";
  a.style.opacity = "0";
  let id = setInterval(function () {
    opacity = opacity + deltaOpacity;
    a.style.opacity = opacity;
    judge = 1 - opacity;
    if (judge < 0) {
      clearInterval(id);
    }
  }, deltaTime);
}


function fadeOut(a) {
  let opacity = document.defaultView.getComputedStyle(a, null).opacity;
  let deltaTime = 1;
  let maxxTime = 100;
  let deltaOpacity = deltaTime / maxxTime;
  let id = setInterval(function () {
    opacity = opacity - deltaOpacity;
    a.style.opacity = opacity;
    if (opacity <= 0) {
      a.style.display = 'none';
      clearInterval(id);
    }
  }, deltaTime);
}

/*
$(function () {
  $(window).scroll(function () {
    var obj = $('.zoomin');
    scroll = $(window).scrollTop();
    if (scroll > 100) {
      obj.addClass('big');
    } else {
      obj.removeClass('big');
    }
  })
});
*/

let zoomIn = document.getElementsByClassName('zoomin');

window.addEventListener('scroll', () => {
  for (let i = 0; i < zoomIn.length; i++) {
    const scroll = window.pageYOffSet || document.documentElement.scrollTop;
    

    if (scroll > 400) {
      zoomIn[i].classList.add('active');
    } else {
      zoomIn[i].classList.remove('active');
    };

    if (window.matchMedia('(max-width: 480px)').matches) {
      if (scroll > 200) {
        zoomIn[i].classList.add('active');
      } else {
        zoomIn[i].classList.remove('active');
      };
    };
  };
});



/*
$(function () {
  var inner = $('.album-inner li,.album-inner,.menu-btn');
  inner.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      inner.fadeIn();
    } else {
      inner.fadeOut();
    }
  });
});
*/

//data-src//
(function () {
  'use strict';

  let modalWrapper = document.getElementById('modal-wrapper');
  let modalImage = document.getElementById('modal-image');
  let image = document.getElementsByClassName('image');

  for(let i = 0; i < image.length; i++){
      image[i].addEventListener('click', function () {
        modalWrapper.classList.add('show');

        let imageSrc = image[i].getAttribute('src');
        modalImage.setAttribute('src', imageSrc);
      });


      modalWrapper.addEventListener('click', function () {
        if (this.classList.contains('show')) {
          this.classList.remove('show');
        }
      });

    }
  })();
  




let fadeInner = document.getElementsByClassName('fade-in-animetion');

window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInner.length; i++) {
    const scroll = window.pageYOffSet || document.documentElement.scrollTop;
    
    if (scroll > 200) {
      fadeInner[i].classList.add('active');
    } else {
      fadeInner[i].classList.remove('active');
    }
  };
});

/*
$(function () {
  var scrollDown = $('.scroll');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollDown.fadeOut();
    } else {
      scrollDown.fadeIn();
    }
  });
});
*/

