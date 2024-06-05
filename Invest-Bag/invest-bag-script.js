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

/* Section Modal */
const investModalBtn = document.getElementById('invest-bag-content-btn');
const objectsTabsModal = document.getElementById('objects-tabs-modal');
const scrollWidth = `${window.innerWidth - document.body.offsetWidth}px`;
const objectsModalBtnClose = document.getElementById('objects-modal-btn-close');

investModalBtn.addEventListener('click', function () {
  objectsTabsModal.classList.add('active');
  document.body.classList.add('disable');
  document.body.style.paddingRight = scrollWidth;
  document.body.style.transition = '0s';
})

objectsModalBtnClose.addEventListener('click', function () {
  objectsTabsModal.classList.remove('active');
  document.body.classList.remove('disable');
  document.body.style.paddingRight = '0';
})

/* Local Storage */

const investBagContent = document.getElementById('invest-bag-content');

window.onload = function () {
  if (localStorage.getItem !== null) {
    let newEl = document.createElement('div');
    let newElClass = localStorage.getItem('invest-object-thailand');
    newEl.classList.add(`${newElClass}`);
    newEl.classList.add('active');
    investBagContent.append(newEl);
  }
}