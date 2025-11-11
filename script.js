let dropdown = document.querySelector(".nav__dropdown");
let button = document.querySelector(".nav__menu__button");
let icons = document.getElementsByClassName("nav__icon");
let navtop = document.querySelector(".nav__top");
//Events
let isOpen = false;
button.addEventListener("click", function () {
  dropdown.classList.toggle("open");
  button.classList.toggle("open");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("open");
  }
  navtop.classList.toggle("open");
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
  }
});

let headerBottom = document.querySelector(".nav__bottom");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const delta = currentScroll - lastScroll; //positive if scrolling down
  //negative if scrolling up
  const threshold = 25;
  const topThreshold = 50;

  console.log(`Last scroll: ${lastScroll}`);
  if (currentScroll < topThreshold) {
    headerBottom.classList.remove("show");
    headerBottom.classList.remove("hide");
    headerBottom.classList.remove("stick")
  } else if (currentScroll > topThreshold && currentScroll < 500) {
    headerBottom.classList.add("stick")
  } else if (delta > threshold && currentScroll > 200) {
    headerBottom.classList.remove("show");
    headerBottom.classList.add("hide");
  } else if (delta < -threshold && currentScroll > 200) {
    headerBottom.classList.remove("hide");
    headerBottom.classList.add("show");
  }
  //   else {
  //     headerBottom.classList.remove("show");
  //   }

  lastScroll = currentScroll;
});
