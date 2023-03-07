import "./style.css";
import { mainHeader, headerNav } from "./header.js"

console.log("cosnole lot dog");

const content = document.querySelector("#content");

content.appendChild(mainHeader()); 
content.appendChild(headerNav()); 