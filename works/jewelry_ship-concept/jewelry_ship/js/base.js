
//fadeIn・fadeOut//
function fadeIn(a) {
  let judge = 1;
  let deltaTime = 1;
  let maxTime = 100;
  let opacity = 0;
  let deltaOpacity = deltaTime / maxTime;
  a.style.display = "block";
  a.style.opacity = "1";
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
  let opacity = document.defaultView.getComputedStyle(a, null).
    opacity;
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

//modal
(function () {
  'use strict';

  let clickBtn = document.getElementById('click-js');
  let closeBtn = document.getElementById('close-js');
  let modalMenu = document.getElementById('modal-js');

  clickBtn.addEventListener('click', function () {
    modalMenu.style.display = "block";
    fadeIn(modalMenu);
  }, false);

  closeBtn.addEventListener('click', function () {
    modalMenu.style.display = "none";
    fadeOut(modalMenu);
  }, false);


})();


// slick //
$('.sliders').each(function () {
  $(this).not('.slick-initialized').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotHOver: false,
    infinite: true,
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

//data-target ----- theme2 TOP -> modal-menu//
/*
  $(function(){
    $('.fa-bars').on('click',function(){
      $('.theme2-modal-menu').fadeIn('slow');
      $('.close-btn').on('click',function(){
        $('.theme2-modal-menu').fadeOut('slow');
      });
    });

    $('.fa-heart').on('click',function(){
      $('.over-lay').fadeIn('slow');
      $('.close-btn').on('click',function(){
        $('.over-lay').fadeOut('slow');
      });
    });

    $('.modal-menu li').on('click',function(){
      var target = $(this).attr('data-target');
      target = '.' + target;
      $(target).addClass('active').fadeIn('slow').siblings().
removeClass('active').fadeOut('slow');
      $('.modal-menu').fadeOut('slow');
  });
});
*/

//カートに追加ボタン//
(function () {
  'use strict';
  let cartInbtn = document.getElementsByClassName('in-btn');
  const cart = document.getElementById('item-list-js');
  const cartNum = document.getElementById('num-js');

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

  for(let i = 0; i < cartInbtn.length; i++){
    cartInbtn[i].addEventListener('click',function(){

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
      deleteBtn.style.backgroundColor = '#777';
      deleteBtn.style.color = '#eee';
      deleteBtn.style.padding = '.5rem 1rem'
      deleteBtn.style.margin = '1rem'
      deleteBtn.style.bordercolor = "none"
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
        } else if (allNum > 10) {
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

        cartInbtn[i].style.backgroundColor = '#777';
        cartInbtn[i].style.color = '#eee';
        cartInbtn[i].textContent = 'カートに入れる';
      }, false);
      
      // カウントセット内に部品を挿入していく
      countSet.insertBefore(deleteBtn, countSet.firstChild);
      countSet.insertBefore(plus, countSet.firstChild);
      countSet.insertBefore(countInput, countSet.firstChild);
      countSet.insertBefore(minus, countSet.firstChild);

      // 作成したliタグにカウントセットを挿入する
      cartListTag.insertBefore(countSet, cartListTag.firstChild);
      
      // カートに追加ボタンを使用不能にする
      this.setAttribute('disabled', 'disabled');
      this.style.backgroundColor = '#fff';
      this.style.color = '#000';
      this.textContent = 'カート済み';

      // 商品複製
      let cloneItem = cartInbtn[i].previousElementSibling.
        cloneNode(true);

      // 商品id（data-items）取得
      let itemNum = cartInbtn[i].previousElementSibling.
        getAttribute('data-items');
        
      cartListTag.setAttribute('data-items', itemNum);
      cartListTag.insertBefore(cloneItem, cartListTag.
        firstChild);
      cart.insertBefore(cartListTag, cart.firstChild);
      Math();
    }, false);
  }
})();
