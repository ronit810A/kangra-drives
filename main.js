const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 900,
};

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 700,
  });

  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1100,
  });

  ScrollReveal().reveal(".header__form form", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".choose__image img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".choose__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".choose__content .section__description", {
    ...scrollRevealOption,
    delay: 900,
  });

  ScrollReveal().reveal(".choose__card.", {
    duration: 900,
    delay: 1100,
    interval: 500,
  });

  ScrollReveal().reveal(".subscribe__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".subscribe__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".subscribe__content .section__description", {
    ...scrollRevealOption,
    delay: 900,
  });

  ScrollReveal().reveal(".subscribe__content form", {
    ...scrollRevealOption,
    delay: 1100,
  });
}

const tabs = document.querySelector(".deals__tabs");

if (tabs) {
  tabs.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("[data-id]");
    if (!clickedTab) return;

    // Remove active from all tabs
    tabs.querySelectorAll("[data-id]").forEach(tab => {
      tab.classList.remove("active");
    });

    // Add active to clicked tab
    clickedTab.classList.add("active");

    // Remove active from all tab contents
    const tabContents = document.querySelectorAll(".deals__container .tab__content");
    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    // Add active to the matching content
    const activeContent = document.getElementById(clickedTab.dataset.id);
    if (activeContent) {
      activeContent.classList.add("active");
    }
  });
}


if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false, 
  });
}