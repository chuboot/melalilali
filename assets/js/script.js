//navbar in mobile
let btn = document.querySelector(".burger-btn");
let menu = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li a");
btn.addEventListener("click", function () {
  menu.classList.toggle("nav-active");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menu.classList.toggle("nav-active");
  });
}

//change bg when scroll
let navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  let valueScroll = window.scrollY;
  console.log(valueScroll);
  if (valueScroll < 70) {
    navbar.classList.remove("bg-nav-color");
  } else {
    navbar.classList.add("bg-nav-color");
  }
});
