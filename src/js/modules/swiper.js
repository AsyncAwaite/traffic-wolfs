import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
  const swiperOptions = {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
    loop: true,
    breakpoints: {
      577: {
        slidesPerView: 3,
      },
    },
  };

  const swiper = new Swiper(".swiper", swiperOptions);

  const prevButton = document.getElementById("servicesSwiperPrev");
  const nextButton = document.getElementById("servicesSwiperNext");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => swiper.slidePrev());
    nextButton.addEventListener("click", () => swiper.slideNext());
  }
});

export default Swiper;
