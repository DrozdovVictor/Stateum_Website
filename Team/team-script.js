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

/* Page Btn Up */

const pageBtnUp = document.getElementById('page-btn-up');

window.addEventListener('scroll', function () {
  window.scrollY < 500 ? pageBtnUp.style.display = 'none' : pageBtnUp.style.display = 'flex';
})

pageBtnUp.addEventListener('click', function () {
  document.body.scrollIntoView({top: 0, left: 0, behavior: 'smooth'});
})