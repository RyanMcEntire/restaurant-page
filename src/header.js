const content = document.querySelector("#content");

const mainHeader = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  headerContainer.appendChild(header);

  const title = document.createElement("div");
  title.setAttribute("id", "title");
  title.textContent = "The Full Potato";
  headerContainer.appendChild(title);
  content.appendChild(headerContainer);
  return headerContainer;
};

const headerNav = () => {
  const navContainer = document.createElement("div");
  navContainer.setAttribute("id", "navContainer");

  const homeButton = document.createElement("div");
  homeButton.setAttribute("id", "homeButton");
  homeButton.setAttribute("value", "home");
  homeButton.textContent = "Home";
  navContainer.appendChild(homeButton);

  const menuButton = document.createElement("div");
  menuButton.setAttribute("id", "menuButton");
  menuButton.setAttribute("value", "menu");
  menuButton.textContent = "Menu";
  navContainer.appendChild(menuButton);

  const contactButton = document.createElement("div");
  contactButton.setAttribute("id", "contactButton");
  contactButton.setAttribute("value", "contact");
  contactButton.textContent = "Contact";
  navContainer.appendChild(contactButton);
  content.appendChild(navContainer);
  return navContainer;
};

export { mainHeader, headerNav };
