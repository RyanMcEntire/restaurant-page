import "./style.css";
import { mainHeader, headerNav } from "./header.js";
import { home } from "./home/home.js";
import { menu } from "./menu/menu.js";
import { contact } from "./contact/contact.js";
import { init } from "./init.js"

mainHeader();
headerNav();

function pageLoad() {
  
  home();
}
window.onload = function () {
  pageLoad();
};

const clickHome = document.querySelector("#homeButton");
const clickMenu = document.querySelector("#menuButton");
const clickContact = document.querySelector("#contactButton");

clickHome.addEventListener("click", function () {
  init();
  home();
  
});

clickMenu.addEventListener("click", function () {
  init();
  menu();
});

clickContact.addEventListener("click", function () {
  init();
  contact();
});

// home();
// menu();
// contact();

console.log("test");
