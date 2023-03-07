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
}

export { mainHeader };