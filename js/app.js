gsap.registerPlugin(ScrollTrigger);

const descriptionKits = document.querySelector(".description__kits");
const kitsBtn = document.querySelectorAll(".kits__btn");
const tabsContent = document.querySelectorAll(".tabs__content");
const menuMobile = document.querySelector(".menu-mobile");
const burgerLogo = document.querySelector(".burger-logo");

burgerLogo.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "inherit";
  }
});

if (descriptionKits) {
  descriptionKits.addEventListener("click", (e) => {
    if (e.target.classList.contains("kits__btn")) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  });
}

const tabsHandler = (path) => {
  kitsBtn.forEach((el) => {
    el.classList.remove("kits__btn--active");
  });
  document
    .querySelector(`[data-tabs-path="${path}"]`)
    .classList.add("kits__btn--active");

  tabsContent.forEach((el) => {
    el.classList.remove("tabs__content--active");
  });
  document
    .querySelector(`[data-tabs-target="${path}"]`)
    .classList.add("tabs__content--active");
};

const swiper = new Swiper(".promo__slider", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const cardSwiper = new Swiper(".product-card-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1240: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

gsap.to(".turnkey-solutions");
