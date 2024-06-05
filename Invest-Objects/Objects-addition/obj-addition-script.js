/* Swipers */

new Swiper ('.obj-addition__content-swiper', {
  pagination: {
    el: '.obj-addition__content-swiper-pagination',
    clickable: true
  },

  slidesPerView: 1,
  simulateTouch: false,

  thumbs: {
    swiper: {
      el: '.obj-addition__content-swiper-preview',
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
})

new Swiper ('.obj-addition__content-swiper-slide-swiper', {
  navigation: {
    prevEl: '.obj-addition__content-swiper-btn-left',
    nextEl: '.obj-addition__content-swiper-btn-right'
  },

  simulateTouch: false,

  pagination: {
    el: '.obj-addition__content-swiper-slide-swiper-pagination',
    clickable: true,
  }
})

/* Header Nav Mobile */
const headerNavMobile = document.getElementById('header__nav-mobile');
const headerNavMobileContent = document.getElementById('header__nav-mobile-content');

headerNavMobile.addEventListener('click', function () {
  headerNavMobile.classList.toggle('active');
  document.body.classList.toggle('disable');
})

headerNavMobileContent.addEventListener('click', function (event) {
  event.stopPropagation()
})

/* Description Section */

const tabsRange = document.getElementById('tabs-range');
const tabsRangeFullness = document.getElementById('tabs-range-fullness');
const tabsNumber = document.getElementById('tabs-number');

const tabsItemNumberSum = document.getElementById('tabs-item-number-sum');
const tabsItemNumberInvestors = document.getElementById('tabs-item-number-investors');

/* Functions */

function initFullness () {
  tabsRangeFullness.style.width = `0%`
  let i = 0;
  
  let interval = setInterval(
    function () {
      tabsRangeFullness.style.width = `${i++}%`;
      i === 50 ? clearInterval(interval) : false;

      let num = 150000 * (i / 100);
      tabsNumber.innerHTML = `$${Math.round(num)} (${i}%)`;
    }, 30
  )
  

}

window.addEventListener('load', initFullness());

function changetabsItemNumberContent () {
  if (window.innerWidth <= 530) {
    tabsItemNumberSum.innerHTML = '$150 000';
    tabsItemNumberInvestors.innerHTML = '10';
  }
}

window.addEventListener('resize', changetabsItemNumberContent());
window.addEventListener('load', changetabsItemNumberContent());

/* Calculation Section */

const calculationCardHeadRowBtns = document.querySelectorAll('.obj-addition__content-calculation-card-head-btn');
const calculationCardRowItems = document.querySelectorAll('.obj-addition__content-calculation-card-row-item');
const calculationCardNumbers = document.querySelectorAll('.obj-addition__content-calculation-card-number');

const calculationBtnContentTexts = document.querySelectorAll('.obj-addition__content-calculation-button-content-item-text')

const calculationBtnDocs = document.getElementById('calculation-btn-docs');
const calculationBtnDocsContent = document.getElementById('calculation-btn-docs-content');
const calculationBtnAdd = document.getElementById('calculation-btn-add');
const calculationModal = document.getElementById('calculation-modal');
const calculationModalContent = document.getElementById('calculation-modal-content');

/* Function */

calculationCardHeadRowBtns.forEach(function (btn, btnIndex) {
  calculationCardHeadRowBtns[0].classList.add('active');

  btn.addEventListener('click', function () {
    calculationCardHeadRowBtns.forEach(function (el) {
      el.classList.remove('active');
    })

    btn.classList.add('active');

    let NumbersArr = [3, 6, 9, 12];
    let PriceArr = [1800, 1800, 1800, 1800];

    calculationCardRowItems.forEach(function (item, itemIndex) {
      let currentContent = NumbersArr.find(function (num, numIndex) {
        if (numIndex === itemIndex) {
          return NumbersArr[numIndex];
        }
      })
      
      currentContent = currentContent * (btnIndex + 1);
      item.innerHTML = `${currentContent} мес`;
    })

    function calculationChange (mainArr, subArr, subPar) {
       mainArr.forEach(function (mainEl, mainIndex) {
        let currentValue = subArr.find(function (subEl, subIndex) {
          if (mainIndex === subIndex) {
            return subArr[subIndex];
          }
        })

        currentValue = currentValue * (btnIndex + 1);

        if (subPar === 'мес') {
          mainEl.innerHTML = `${currentValue} ${subPar}`;
        } else if (subPar === '$') {
          mainEl.innerHTML = `${subPar} ${currentValue}`;
        }
 
      })
    }
    
    calculationChange(calculationCardRowItems, NumbersArr, 'мес');
    calculationChange(calculationCardNumbers, PriceArr, '$');
  })
})

calculationBtnDocs.addEventListener('click', function () {
  calculationBtnDocsContent.classList.toggle('active');
});

calculationBtnDocsContent.addEventListener('click', function (event) {
  event.stopPropagation();
})

const scrollWidth = `${window.innerWidth - document.body.offsetWidth}px`;
console.log(scrollWidth);

calculationBtnAdd.addEventListener('click', function () {
  calculationModal.classList.add('active');
  document.body.classList.add('disable');
  document.body.style.paddingRight = scrollWidth;
  document.body.style.transition = '0s'
})

calculationModal.addEventListener('click', function () {
  calculationModal.classList.remove('active');
  document.body.classList.remove('disable');
  document.body.style.paddingRight = 0;
})

calculationModalContent.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
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

/* Local Storage */

calculationBtnAdd.addEventListener('click', function () {
  localStorage.setItem('invest-object-thailand', 'tabs-item');
})

/* Security Modal */

const objModalBtn = document.getElementById('obj-addition-content-calculation-modal-content-button');
const objectsTabsModal = document.getElementById('objects-tabs-modal');
const objectsModalBtnClose = document.getElementById('objects-modal-btn-close');

function openObjectModal (elem) {
  elem.addEventListener('click', function () {
    calculationModal.classList.remove('active');
    objectsTabsModal.classList.add('active');
    document.body.classList.add('disable');
    document.body.style.paddingRight = scrollWidth;
    document.body.style.transition = '0s';
  })
}

openObjectModal(objModalBtn);

objectsModalBtnClose.addEventListener('click', function () {
  objectsTabsModal.classList.remove('active');
  document.body.classList.remove('disable');
  document.body.style.paddingRight = '0';
})
