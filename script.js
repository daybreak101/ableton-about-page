let dropdown = document.querySelector(".nav__dropdown");
let button = document.querySelector(".nav__menu__button");
let icons = document.getElementsByClassName("nav__icon");
//Events
let isOpen = false;
button.addEventListener("click", function () {
    dropdown.classList.toggle("open")
    button.classList.toggle("open")
    for(let i = 0; i < icons.length; i++){
        icons[i].classList.toggle("open")
    }
});
