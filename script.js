/* Header */
const body = document.body
const headerContent = document.getElementById('header-content')

const headerNavMobile = document.getElementById('header__nav-mobile')
const headerNavMobileContent = document.getElementById('header__nav-mobile-content')

/* Objects Tabs */
const tabsBtns = Array.from(document.querySelectorAll('.odject-tabs__button'))
const tabsItems = Array.from(document.querySelector('.tabs-content').children)

/* News Tabs */
const newsWatchBtn = document.querySelector('.news-tabs__bth-watch-all')
const newsHeading = document.querySelector('.news__heading')
const newsTabsBtns = document.querySelectorAll('.news-tabs__heading')
const newsCardsWrapper = document.getElementById('news-tabs-content')
const newsTabsCards = Array.from(document.querySelectorAll('.news-tabs-card'))

/* FAQ Section */
const faqTabsBtns = document.querySelectorAll('.faq__tabs-heading')
const faqTabsItems = Array.from(document.querySelectorAll('.faq__tabs-item'))
const faqDetails = document.querySelectorAll('.faq__details-item')
const faqDetailsText = document.querySelectorAll('.faq__details-item-text')
const faqXMark = document.querySelectorAll('.faq__details-item-xmark')

/* Footer */
const footerLi = document.getElementById('footer__li')
const footerBtnsRow = document.querySelector('.footer__item-btns-row')

/* Functions */

/* Header */

function showTabsItems() {
  for (let item of tabsItems) {
    item.classList.add('active')
  }

  tabsBtns[0].addEventListener('click', function () {
    for (let btn of tabsBtns) {
      btn.classList.remove('active')
    }

    tabsBtns[0].classList.add('active')

    for (let item of tabsItems) {
      item.classList.add('active')
    }
  })

  tabsBtns[1].addEventListener('click', function () {
    for (let btn of tabsBtns) {
      btn.classList.remove('active')
    }

    tabsBtns[1].classList.add('active')

    for (let item of tabsItems) {
      if (tabsItems.indexOf(item) > 3) {
        item.classList.remove('active')
      }
    }
  })
}

showTabsItems()

/* Header Nav Mobile */

headerNavMobile.addEventListener('click', function () {
  headerNavMobile.classList.toggle('active')
  body.classList.toggle('disable')
})

headerNavMobileContent.addEventListener('click', function (event) {
  event.stopPropagation()
})

const mobileNavLinks = document.querySelectorAll('.header__nav-mobile-content-text')

mobileNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    headerNavMobile.classList.remove('active')
    body.classList.remove('disable')
  })
})

/* Objects Section */
const objectsTabsBtn = document.getElementById('odject-tabs-button')
const objectsTabsBtnMobile = document.getElementById('objects-seeMore-link')
const objectsTabsModal = document.getElementById('objects-tabs-modal')
const scrollWidth = `${window.innerWidth - document.body.offsetWidth}px`
const objectsModalBtnClose = document.getElementById('objects-modal-btn-close')

function openObjectModal(elem) {
  elem.addEventListener('click', function () {
    objectsTabsModal.classList.add('active')
    document.body.classList.add('disable')
    document.body.style.paddingRight = scrollWidth
    document.body.style.transition = '0s'
  })
}

openObjectModal(objectsTabsBtn)

objectsModalBtnClose.addEventListener('click', function () {
  objectsTabsModal.classList.remove('active')
  document.body.classList.remove('disable')
  document.body.style.paddingRight = '0'
})

if (window.innerWidth <= 768) {
  objectsTabsBtnMobile.classList.add('active')
  openObjectModal(objectsTabsBtnMobile)
}

/* Objects Item Slider */

new Swiper('.tabs-item-slider-wrapper', {
  navigation: {
    prevEl: '.ri-arrow-left-s-line',
    nextEl: '.ri-arrow-right-s-line',
  },

  pagination: {
    el: '.tabs-slider-points',
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  simulateTouch: false,
  freeMode: true,
  loop: true,
})

/* Advantages Section */

new Swiper('.advantages__slider', {
  navigation: {
    prevEl: '.advantages__btn-prev',
    nextEl: '.advantages__btn-next',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  loop: true,
  simulateTouch: false,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1.35,
      spaceBetween: 10,
    },
    461: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
})

/* Comparison Section */

function showComparisonSwiper() {
  if (window.innerWidth <= 1440) {
    new Swiper('.comparison__content', {
      scrollbar: {
        el: '.comparison__scrollbar',
      },

      slidesPerView: 4,
      spaceBetween: 5,
      centeredSlides: true,
    })
  } else return
}

window.addEventListener('resize', showComparisonSwiper())
window.addEventListener('DOMContentLoaded', showComparisonSwiper())
window.addEventListener('load', showComparisonSwiper())

/* Reviews Seciton */

new Swiper('.reviews__slider', {
  watchOverflow: true,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  scrollbar: {
    el: '.reviews__scrollbar',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  loop: true,
  simulateTouch: false,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    461: {
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})

/* News Section */

let newsTagArr = ['new', 'blog', 'important']

for (let btn of newsTabsBtns) {
  btn.addEventListener('click', function () {
    for (let btn of newsTabsBtns) {
      btn.classList.remove('active')
    }

    btn.classList.add('active')
  })
}

newsTabsBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    newsCardsWrapper.classList.remove('news-tabs-content_news-only')
    newsCardsWrapper.classList.remove('news-tabs-content_blogs-only')
    newsCardsWrapper.classList.remove('news-tabs-content_importants-only')
    for (let card of newsTabsCards) {
      card.classList.remove('hidden')
    }

    for (let tag of newsTagArr) {
      if (btn.classList.contains(tag)) {
        for (let card of newsTabsCards) {
          if (!card.classList.contains(tag)) {
            card.classList.add('hidden')
          }

          if (tag === 'new') {
            newsCardsWrapper.classList.add('news-tabs-content_news-only')
          }

          if (tag === 'blog') {
            newsCardsWrapper.classList.add('news-tabs-content_blogs-only')
          }

          if (tag === 'important') {
            newsCardsWrapper.classList.add('news-tabs-content_importants-only')
          }
        }
      }
    }
  })
})

window.addEventListener('load', function () {
  if (window.innerWidth <= 768) {
    newsHeading.append(newsWatchBtn)
  }
})

/* FAQ Section */

for (let btn of faqTabsBtns) {
  btn.addEventListener('click', function () {
    for (let btn of faqTabsBtns) {
      btn.classList.remove('active')
    }

    btn.classList.add('active')
  })
}

faqTabsBtns.forEach(function (element, index) {
  element.addEventListener('click', function () {
    for (let item of faqTabsItems) {
      item.classList.remove('active')
      faqTabsItems[index].classList.add('active')
      console.log(index)
    }
  })
})

for (let item of faqDetails) {
  item.addEventListener('click', function (event) {
    for (let item of faqDetails) {
      item.classList.remove('active')
    }

    item.classList.add('active')

    for (let mark of faqXMark) {
      mark.addEventListener('click', function () {
        if (event.target === mark) {
          item.classList.remove('active')
        }
      })
    }
  })
}

faqDetails.forEach(function (element, index) {
  element.addEventListener('click', function () {
    for (let item of faqDetails) {
      item.classList.remove('active')
    }

    element.classList.add('active')

    faqXMark.forEach(function () {
      faqXMark[index].addEventListener('click', function (event) {
        event.stopPropagation()
        faqDetails[index].classList.remove('active')
      })
    })
  })
})

/* Footer */
window.addEventListener('load', function () {
  if (window.innerWidth <= 768) {
    footerLi.after(footerBtnsRow)
  }
})

/* Page Btn Up */

const pageBtnUp = document.getElementById('page-btn-up')

window.addEventListener('scroll', function () {
  window.scrollY < 3500 ? (pageBtnUp.style.display = 'none') : (pageBtnUp.style.display = 'flex')
})

pageBtnUp.addEventListener('click', function () {
  body.scrollIntoView({ top: 0, left: 0, behavior: 'smooth' })
})
