/* element selection */
const humburger = document.querySelector(".humburger");
const wrap_menu = document.querySelector(".wrap-menu");
const navbar = document.querySelector(".nav-bar");
const tabs = document.querySelectorAll(".tab");
const tab_content = document.querySelectorAll(".tab_content");
const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

/* data holders */
let openNav = false;
let previous = 0;

/* event listerners */
humburger.addEventListener("click", openMenu);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    tab_content[previous].classList.add("hide");
    tabs[previous].classList.remove("active");
    tab_content[i].classList.remove("hide");
    tabs[i].classList.add("active");
    previous = i;
  });
}

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    answer[i].classList.toggle("hide");
    questions[i].classList.toggle("open");
  });
}

/* functions */
function openMenu() {
  navbar.classList.toggle("open");
  wrap_menu.classList.toggle("hide");
  let src =
    navbar.classList.contains("open") == true
      ? "images/icon-close.svg"
      : "images/icon-hamburger.svg";
  humburger.src = src;
}
