import Swiper from "swiper";
import { Navigation } from "swiper/modules";

function initServiceSlider() {
  new Swiper('[data-swiper="services"]', {
    modules: [Navigation],
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '[data-swiper="services"] .services-btn-next',
      prevEl: '[data-swiper="services"] .services-btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },

      475: {
        spaceBetween: 25,
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 2.24,
      },
      993: {
        slidesPerView: 2.3,
      },
    },
  });
}

const initCasesSlider = () => {
  const casesSwiper = new Swiper('[data-swiper="cases"]', {
    modules: [Navigation],
    centeredSlides: true,
    slideClass: "cases-section__list-item",
    initialSlide: 1,
    navigation: {
      nextEl: '[data-swiper="cases"] .cases-btn-next',
      prevEl: '[data-swiper="cases"] .cases-btn-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 30,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 3,
      },
      993: {
        spaceBetween: 0,
        slidesPerView: 3,
      },
    },
  });

  casesSwiper.on("slideChange", () => {
    document.querySelectorAll(".cases-section__list-item").forEach((slide) => {
      slide.classList.remove("active");
    });

    const activeSlide = casesSwiper.slides[casesSwiper.realIndex];
    activeSlide.classList.add("active");
  });
};

function initTelegramSlider() {
  const telegramSwiper = new Swiper('[data-swiper="telegram"]', {
    modules: [Navigation],
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,

    navigation: {
      nextEl: '[data-swiper="telegram"] .telegram-btn-next',
      prevEl: '[data-swiper="telegram"] .telegram-btn-prev',
    },
    breakpoints: {
      320: {
        loop: true,
        initialSlide: 0,
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });

  telegramSwiper.on("slideChange", () => {
    const isMobile = window.innerWidth <= 576; 

    if (isMobile) { 
      document.querySelectorAll('[data-swiper="telegram"] .swiper-slide').forEach((slide) => {
        slide.classList.remove("active");
      });
    } else { 
      document.querySelectorAll('[data-swiper="telegram"] .swiper-slide').forEach((slide) => {
        slide.classList.remove("active");
      });

      const activeSlide = telegramSwiper.slides[telegramSwiper.realIndex];
      activeSlide.classList.add("active");
    }
  });
}




export { initServiceSlider, initCasesSlider, initTelegramSlider };
