const burger = () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerCloseBtn = document.querySelector(".burger-close-btn");
  const menu = document.querySelector(".header__menu");
  const overlay = document.getElementById("overlay");

  if (burgerBtn && burgerCloseBtn && menu && overlay) {
    const closeMenu = () => {
      burgerBtn.classList.remove("active");
      burgerCloseBtn.classList.remove("visible");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.add("active");
      burgerCloseBtn.classList.add("visible");
      menu.classList.add("active");
      overlay.classList.add("active");

      if (menu.classList.contains("initial-hide")) {
        menu.classList.remove("initial-hide");
      }

      const isOpen = menu.classList.contains("active");

      if (isOpen) {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });

    burgerCloseBtn.addEventListener("click", () => {
      closeMenu();
    });

    const menuItems = menu.querySelectorAll(".menu__item");
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !menu.contains(event.target) &&
        !burgerBtn.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menu.classList.contains("active")
      ) {
        closeMenu();
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", burger);

export default burger;