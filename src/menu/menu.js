import  plainPotato  from "./plain-potato.jpg";

const content = document.querySelector("#content");

const menu = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  const fullMenu = document.createElement("div");
  fullMenu.setAttribute("id", "fullMenu");
  const fullMenuTitle = document.createElement("h2");
  fullMenuTitle.textContent = "Full Menu";
  fullMenu.appendChild(fullMenuTitle);
  const menuContent = document.createElement("div");
  menuContent.textContent =
    "Its pretty self explanatory, if ya think about it. We serve the finest Full Potato, our specialty. We don't need anything too fancy here at The Full Potato, and if you're anything like us, we'd like to have ya try it.";
  fullMenu.appendChild(menuContent);
  menuContainer.appendChild(fullMenu);
  
  const menuImage = new Image();
  menuImage.src = plainPotato; 
  menuImage.classList.add("menuImage");
  menuContainer.appendChild(menuImage);

  content.appendChild(menuContainer);

  const menuButton = document.querySelector("#menuButton");
  menuButton.classList.add("currentTab");

  return menuContainer;
};

export { menu };
