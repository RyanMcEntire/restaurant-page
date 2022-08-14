import { ContextReplacementPlugin } from "webpack";
/* import heroPicture from "../images/catty.png"; */

/* const content = document.getElementById("content") */

function initMainPage() {
  const content = document.getElementById("content");

  const mainHead = document.createElement("div");
  mainHead.classList.add("Head");
  const mainMain = document.createElement("div");
  mainMain.classList.add("main");
  content.appendChild(mainHead);
}

export { initMainPage };
