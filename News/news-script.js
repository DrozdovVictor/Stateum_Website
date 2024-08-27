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

/* News Section Tabs */
const newsTabsBtns = document.querySelectorAll('.news-tabs__heading');
const newsCardsWrapper = document.getElementById('news-tabs-content');
const newsTabsCards = Array.from(document.querySelectorAll('.news-tabs-card'));

let newsTagArr = ['new', 'blog', 'important'];

for (let btn of newsTabsBtns) {
  btn.addEventListener('click', function () {
    for (let btn of newsTabsBtns) {
      btn.classList.remove('active');
    }

    btn.classList.add('active');
 
  })
}

newsTabsBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    newsCardsWrapper.classList.remove('news-tabs-content_news-only');
    newsCardsWrapper.classList.remove('news-tabs-content_blogs-only');
    newsCardsWrapper.classList.remove('news-tabs-content_importants-only');
    for (let card of newsTabsCards) {
      card.classList.remove('hidden');
    }
    
    for (let tag of newsTagArr) {
      if (btn.classList.contains(tag)) {
        for (let card of newsTabsCards) {
          if (!card.classList.contains(tag)) {
            card.classList.add('hidden');
          }

          if (tag === 'new') {
            newsCardsWrapper.classList.add('news-tabs-content_news-only');
          }

          if (tag === 'blog') {
            newsCardsWrapper.classList.add('news-tabs-content_blogs-only');
          }

          if (tag === 'important') {
            newsCardsWrapper.classList.add('news-tabs-content_importants-only');
          }
        }
      }
    }
  })
})

/* Page Btn Up */

const pageBtnUp = document.getElementById('page-btn-up');

window.addEventListener('scroll', function () {
  window.scrollY < 600 ? pageBtnUp.style.display = 'none' : pageBtnUp.style.display = 'flex';
})

pageBtnUp.addEventListener('click', function () {
  document.body.scrollIntoView({top: 0, left: 0, behavior: 'smooth'});
})