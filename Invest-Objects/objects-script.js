/* Variables */
/* Header */

const body = document.getElementById('body');
const headerNavMobile = document.getElementById('header__nav-mobile');
const headerNavMobileContent = document.getElementById('header__nav-mobile-content');

/* Main */

const tabsItems = document.getElementsByClassName('tabs-item');
const tabsBtns = document.getElementsByClassName('invest-objects-tabs__button');

/* Functions */
/* Header */

headerNavMobile.addEventListener('click', function () {
  headerNavMobile.classList.toggle('active');
  body.classList.toggle('disable');
})

headerNavMobileContent.addEventListener('click', function (event) {
  event.stopPropagation()
})

/* Main */

new Swiper('.tabs-item-slider-wrapper', {
  navigation: {
    prevEl: '.ri-arrow-left-s-line',
    nextEl: '.ri-arrow-right-s-line'
  },

  pagination: {
    el: '.tabs-slider-points',
    clickable: true
  },

  simulateTouch: true,
  freeMode: true,
  loop: true,
  spaceBetween: 0
})

function filterItems () {
  let classNamesArr = ['all', 'thailand', 'indonesia'];

  for (let btn of tabsBtns) { 
    tabsBtns[0].classList.add('active');

    for (let tab of tabsItems) {
      tab.classList.add('active');
    }

    btn.addEventListener('click', function () {

      for (let btn of tabsBtns) {
        btn.classList.remove('active');
      }

      classNamesArr.find(function (item) {
        if (btn.classList.contains(item)) {
          for (let tab of tabsItems) {
            if (tab.classList.contains(item) === btn.classList.contains(item)) {
              btn.classList.add('active');
              tab.classList.add('active');
            } else {
              tab.classList.remove('active');
            }
          }
        }
      }) 
    })
  }
}

filterItems()

/* Page Btn Up */

const pageBtnUp = document.getElementById('page-btn-up');

window.addEventListener('scroll', function () {
  window.scrollY < 800 ? pageBtnUp.style.display = 'none' : pageBtnUp.style.display = 'flex';
})

pageBtnUp.addEventListener('click', function () {
  body.scrollIntoView({top: 0, left: 0, behavior: 'smooth'});
})

/* Page Btn Back */

const pageBtnBack = document.getElementById('page-btn-back');
const pageBtnBackContent = document.getElementById('page-btn-back-content');

pageBtnBack.addEventListener('mouseover', function () {
  pageBtnBackContent.classList.add('active');
})

pageBtnBack.addEventListener('mouseleave', function () {
  pageBtnBackContent.classList.remove('active');
})
