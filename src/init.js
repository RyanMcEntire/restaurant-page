const init = function(){
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#homeButton");
  const menuButton = document.querySelector("#menuButton");
  const contactButton = document.querySelector("#contactButton");
 
  homeButton.classList.remove("currentTab"); 
  menuButton.classList.remove("currentTab");
  contactButton.classList.remove("currentTab");
  if (content.children.length > 2){
    content.children[2].remove();
  }
}

export { init }