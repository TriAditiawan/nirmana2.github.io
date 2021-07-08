const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const dIsi = document.querySelector(".isidi ul");
const tIsi = document.querySelector(".tomboldi");
tIsi.addEventListener("click", function () {
  dIsi.classList.toggle("d-none");
});
