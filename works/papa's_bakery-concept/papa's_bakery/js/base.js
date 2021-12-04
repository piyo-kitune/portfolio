
//modal
(function () {
  'use strict';

  let clickBtn = document.getElementsByClassName('click-js');
  let closeBtn = document.getElementsByClassName('close-js');
  let modalMenu = document.getElementsByClassName('modal-js');

  for (let i = 0; i < clickBtn.length; i++) {
    clickBtn[i].addEventListener('click', function () {
      for (let j = 0; j < modalMenu.length; j++) {
        modalMenu[j].style.transform = 'translateX(0%)';
      }
    }, false);
  }

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function () {
      for (let j = 0; j < modalMenu.length; j++) {
        modalMenu[j].style.transform = 'translateX(-100%)';
      }
    }, false);
  }

})();

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
};