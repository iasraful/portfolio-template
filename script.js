/** @format */

const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector("#menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("bg-white");
});
