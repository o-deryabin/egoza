// burger menu

const burgerBtn = document.querySelector(".header__burger");
const burgerHeadings = document.querySelector(".header-headings");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerHeadings.classList.toggle("active");
  body.classList.toggle("lock");
});
