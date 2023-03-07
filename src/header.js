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
  return headerContainer;
};

const headerNav = () => {
  const navContainer = document.createElement("div");
  navContainer.setAttribute("id", "navContainer");

  const homeButton = document.createElement("div");
  homeButton.setAttribute("id", "homeButton");
  homeButton.textContent = "Home";
  navContainer.appendChild(homeButton);

  const menuButton = document.createElement("div");
  menuButton.setAttribute("id", "menuButton");
  menuButton.textContent = "Menu";
  navContainer.appendChild(menuButton);

  const contactButton = document.createElement("div");
  contactButton.setAttribute("id", "contactButton");
  contactButton.textContent = "Contact";
  navContainer.appendChild(contactButton);
  return navContainer;
};

export { mainHeader, headerNav };
