import "./style/main.css";
import { appLogic } from "./js/app";
import loadInitialPage from "./js/app";

console.log("Hello Webpack!");

// appLogic(); // Run the app logic

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
    navBar.classList.toggle("open"); // Open/close the nav-bar
    navMenu.classList.toggle("open"); // Open/close the nav menu items
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  loadInitialPage();

});
