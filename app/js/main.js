// $(function () {






// });
const swiper = new Swiper('.slider__container', {
    slidesPerView: 4,
    slidesPersScroll: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev',
    },
    pagination: {
        el: '.slider-pagination',
        type: 'bullets',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        530: {
            slidesPerView: 2,
        },
        850: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});


/* Burger */
const menuBtn = document.querySelector('.burger-container');
const menuMobile = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuMobile.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobile.classList.remove('open');
        menuOpen = false;
    }
})
/* Burger */


/* Example-tabs */
const tabsExampleBtn = document.querySelectorAll(".example__tabs-btn");
const tabsExampleItem = document.querySelectorAll(".example__tabs-item");

tabsExampleBtn.forEach(onTabBtnClick)

function onTabBtnClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        if (!currentBtn.classList.contains("example__tabs-btn--active")) {
            tabsExampleBtn.forEach(function (item) {
                item.classList.remove("example__tabs-btn--active")
            });

            tabsExampleItem.forEach(function (item) {
                item.classList.remove("example__tabs-item--active")
            });

            currentBtn.classList.add("example__tabs-btn--active");
            currentTab.classList.add("example__tabs-item--active")
        };
    });
};
/* Example-tabs */