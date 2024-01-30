// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
import AOS from "aos";
import "aos/dist/aos.css";

import burger from "./modules/burger.js";
import animateAboutSection from "./modules/animateAboutSection.js";
import {
  animateConnectSection,
  animateConnectSectionBottom,
  animateTextSection
} from "./modules/animateConnectSection.js";
import { setupScrollToTop } from "./modules/scrollToTop.js";
import { initLoadMore } from "./modules/loadMore.js";


window["FLS"] = true;
// Підключення основного файлу стилів
import "../scss/style.scss";
import "swiper/css";
import "swiper/css/effect-fade";

import * as flsFunctions from "./core/functions.js";
import { scrollToAnchor } from "./modules/scrollToAnchor.js";
// import {headerFixed} from "./modules/index.js";
import {
  disableScrollAndSwipes,
  enableScrollAndSwipes,
  getElement,
  getElements,
} from "./core/index.js";
import { body, header } from "./core/elementsNodeList.js";

import {
  initServiceSlider,
  initCasesSlider,
  initTelegramSlider,
} from "./modules/sliders.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix();

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

window.addEventListener("load", () => {
  try {
    AOS.init();
    scrollToAnchor();
    setupScrollToTop();
    animateAboutSection();
    animateTextSection('.connect-section__info');
    animateTextSection('.connect-section-bottom__info');
    headerFixed();
    initServiceSlider();
    initCasesSlider();
    initTelegramSlider();
    burger();
    initLoadMore();
  } catch (e) {
    console.log(e);
  }
});

function headerFixed() {
  if (header) {
    let lastScrollPosition = 0;
    if (scrollY >= header.clientHeight - 30) {
      header.classList.add("fixed");
    }

    window.addEventListener("scroll", () => {
      let currentScrollPosition = scrollY || document.documentElement.scrollTop;

      try {
        if (!header.classList.contains("active")) {
          if (scrollY >= header.clientHeight - 30) {
            header.classList.add("fixed");
          } else {
            header.classList.remove("fixed");
          }
        }

        if (scrollY >= header.clientHeight + 60) {
          if (currentScrollPosition > lastScrollPosition) {
            header.classList.add("header-hidden");
          } else {
            header.classList.remove("header-hidden");
          }
          lastScrollPosition = currentScrollPosition;
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}
