let dropdown = document.querySelector(".nav__dropdown");
let button = document.querySelector(".nav__menu__button");
let icons = document.getElementsByClassName("nav__icon");
let navtop = document.querySelector(".nav__top");
let moreButton = document.querySelector(".more-button");
let hidden = document.querySelector(".hidden");
let padding = document.querySelector(".padding");
let heroTitle = document.querySelector(".hero__title");
let arrow = document.querySelector(".arrow")

//Events
button.addEventListener("click", function () {
  dropdown.classList.toggle("open");
  button.classList.toggle("open");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("open");
  }
  navtop.classList.toggle("open");
  arrow.classList.toggle("open")
});

const breakpoint = 1024;
window.addEventListener("resize", function () {
  if (window.innerWidth > breakpoint) {
    // Reset all to default state
    dropdown.classList.remove("open");
    button.classList.remove("open");
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("open");
    }
    navtop.classList.remove("open");
    arrow.classList.remove("open")
  }
  if (this.window.innerWidth < breakpoint) {
    hidden.style.display = "none";
    padding.style.maxHeight = "0";
    padding.style.minHeight = "0";
    heroTitle.style.top = "62%";
    topThreshold = 25;
    isOpen = false;
    moreButton.innerHTML = "More +";
  }
});

let headerBottom = document.querySelector(".nav__bottom");
let lastScroll = 0;
let threshold = 25;
let topThreshold = 50;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const delta = currentScroll - lastScroll; //positive if scrolling down
  //negative if scrolling up

  console.log(`Last scroll: ${lastScroll}`);
  if (currentScroll < topThreshold) {
    headerBottom.classList.remove("show");
    headerBottom.classList.remove("hide");
    headerBottom.classList.remove("stick");
  } else if (currentScroll > topThreshold && currentScroll < 500) {
    headerBottom.classList.add("stick");
  } else if (delta > threshold && currentScroll > 200) {
    headerBottom.classList.remove("show");
    headerBottom.classList.add("hide");
  } else if (delta < -threshold && currentScroll > 200) {
    headerBottom.classList.remove("hide");
    headerBottom.classList.add("show");
  }
  lastScroll = currentScroll;
});

let isOpen = false;
moreButton.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    moreButton.innerHTML = "More -";
    hidden.style.display = "flex";
    padding.style.maxHeight = "16rem";
    padding.style.minHeight = "16rem";
    heroTitle.style.top = "100%";
    topThreshold = 375;
  } else {
    moreButton.innerHTML = "More +";
    hidden.style.display = "none";
    padding.style.maxHeight = "0";
    padding.style.minHeight = "0";
    heroTitle.style.top = "62%";
    topThreshold = 25;
  }
});
