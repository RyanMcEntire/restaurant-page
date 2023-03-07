const content = document.querySelector("#content");

const home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const copy = document.createElement("div");
  copy.setAttribute("id", "copy");
  copy.textContent =
    "Come on down to the Full Potato. We only have potato and we only do full potato, so please consider us if thats what you'd like. There are a lot of food places out there. We know what we're good at and thats full potato.";
  homeContainer.appendChild(copy);
  content.appendChild(homeContainer);
  return homeContainer;
};

export { home };
