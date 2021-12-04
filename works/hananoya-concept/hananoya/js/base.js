// slider //
$(function () {

  $('document').ready(function () {
    $('.sliders').not('.slick-initialized').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidersScroll: 1,
      dots: true,
      infinite: true,
      fade: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      centerMode: true,
      centerPadding: "70%",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
  });
});


//JS
//modal fadeIn.fadeOut//
(function () {
  'use strict';

  const cartBtn = document.getElementById('cart-js');
  const cartList = document.getElementById('cart-list');
  const cartClose = document.getElementById('cart-close');

  cartBtn.addEventListener('click', function () {
    fadeIn(cartList);
  }, false);

  cartClose.addEventListener('click', function () {
    fadeOut(cartList);
  }, false);
/*
  if (window.matchMedia('(max-width: 481px)').matches) {

    let bars = document.getElementById('bars-js');
    let navMenu = document.getElementById('category');

    bars.addEventListener('click', function () {
      fadeIn(navMenu);
    }, false);


    navMenu.addEventListener('click', function () {
      fadeOut(navMenu);
    }, false);
  }
  */
})();

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
//data-target//
(function () {
  'use strict';

  let targetNav = document.getElementsByClassName('modal');
  for (let i = 0; i < targetNav.length; i++) {
    let targetButton = document.getElementsByTagName('li');
    for (let j = 0; j < targetButton.length; j++) {

      targetButton[j].addEventListener('click', function () {
        let target = this.getAttribute('data-target');
        if (target != null) {
          let targetObject = document.getElementsByClassName(target);
          for (let k = 0; k < targetObject.length; k++) {
            let child = targetObject[k].parentNode.children;
            for (let l = 0; l < child.length; l++) {
              child[l].style.display = 'none';
            }
            targetObject[k].style.display = 'block';
          }
        }
      }, false);
    }
  }
})();
*/
/*
$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });
});
*/

let scrollFadeIn = document.getElementsByClassName('fadein');

window.addEventListener('scroll', () => {
  for (let i = 0; i < scrollFadeIn.length; i++) {
    const rect = scrollFadeIn[i].getBoundingClientRect().top;
    const scroll = window.padeYOffSet || document.documentElement.scrollTop;
    const offSet = rect + scroll;
    const windowHeight = window.innerHeight;

    if (scroll > offSet - windowHeight + 200) {
      scrollFadeIn[i].classList.add('active')
    }
  }

});


// select-nav //
/*
$(function () {
  var topBtn = $('.color-serect,.color-modal');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});
*/

//カートに追加ボタン//
(function () {
  'use strict';
  const cartInbtn = document.getElementsByClassName('cart-in-btn');
  const cart = document.getElementById('item-list-js');
  let cartNum = document.getElementById('num-js');

  //カートアイコン・アラート//
  function Math() {
    let len = cart.children.length;
    const cartAlert = document.getElementById('alert-js');
    cartNum.textContent = len;
    if (len == 0) {
      cartAlert.style.display = 'block';
    } else if (len > 0) {
      cartAlert.style.display = 'none';
    }
  }

  for (let i = 0; i < cartInbtn.length; i++) {
    cartInbtn[i].addEventListener('click', function () {

      // 格納するliタグ作成・カート内での商品id付与
      let cartListTag = document.createElement('li');

      // カウントセット作成
      let countSet = document.createElement('div');
      countSet.classList.add('count-set');

      // マイナスボタン作成
      let minus = document.createElement('span');
      minus.classList.add('qty', 'qty-minus', 'down');
      minus.textContent = '-';

      // プラスボタン作成
      let plus = document.createElement('span');
      plus.classList.add('qty', 'qty-plus', 'up');
      plus.textContent = '+';

      // インプット作成
      let countInput = document.createElement('input');
      countInput.classList.add('numeric');
      countInput.setAttribute('type', 'text');
      countInput.setAttribute('value', '1');

      // 削除ボタン作成
      let deleteBtn = document.createElement('button');
      deleteBtn.style.backgroundColor = 'rgba(104,105,155,1)';
      deleteBtn.style.color = 'rgba(255,255,241,1)';
      deleteBtn.textContent = '削除';

      // マイナスボタン押下時の処理
      minus.addEventListener('click', function () {
        const numBox = this.nextElementSibling;
        let allNum = parseInt(numBox.getAttribute('value'));
        console.log(allNum);
        if (allNum > 0) {
          allNum -= 1;
          numBox.setAttribute('value', allNum);
        } else if (allNum = 0) {
          return false;
        }
      }, false);

      // プラスボタン押下時の処理
      plus.addEventListener('click', function () {
        const numBox = this.previousElementSibling;
        let allNum = parseInt(numBox.getAttribute('value'));
        if (allNum >= 0) {
          allNum += 1;
          numBox.setAttribute('value', allNum);
        } else if (allNum > 100) {
          return false;
        }
      }, false);

      // 削除ボタン押下時の処理
      deleteBtn.addEventListener('click', function () {
        let deleteLi = this.closest('li');
        let deleteLiId = deleteLi.getAttribute('data-items');
        const allDiv = document.getElementsByTagName('div');
        for (let i = 0; i < allDiv.length; i++) {
          if (allDiv[i].getAttribute('data-items') == deleteLiId) {
            let targetBtn = allDiv[i].nextElementSibling;
            targetBtn.removeAttribute('disabled');
          }
        }
        deleteLi.remove();
        Math();

        cartInbtn[i].style.backgroundColor = 'rgba(104,105,155,1)';
        cartInbtn[i].style.color = 'rgba(255,234,0,1)';
        cartInbtn[i].textContent = 'カートに追加';
      }, false);

      // カウントセット内に部品を挿入していく
      countSet.insertBefore(deleteBtn, countSet.firstChild);
      countSet.insertBefore(plus, countSet.firstChild);
      countSet.insertBefore(countInput, countSet.firstChild);
      countSet.insertBefore(minus, countSet.firstChild);

      // 作成したliタグにカウントセットを挿入
      cartListTag.insertBefore(countSet, cartListTag.firstChild);

      // カートに追加ボタンを使用不能にする
      this.setAttribute('disabled', 'disabled');
      this.style.backgroundColor = 'rgba(65,85,70,1';
      this.style.color = 'rgba(255,234,0,1)';
      this.textContent = 'カートに追加済み';

      // 商品複製
      let cloneItem = cartInbtn[i].previousElementSibling.
        cloneNode(true);

      // 商品id（data-items）取得
      let itemNum = cartInbtn[i].previousElementSibling.
        getAttribute('data-items');

      cartListTag.setAttribute('data-items', itemNum);
      cartListTag.insertBefore(cloneItem, cartListTag.firstChild);

      cart.insertBefore(cartListTag, cart.firstChild);

      Math();

    }, false);
  }
})();