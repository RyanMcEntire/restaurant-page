const content = document.querySelector("#content");

const home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const copy = document.createElement("div");
  copy.setAttribute("id", "copy");
  copy.textContent =
    "Come on down to The Full Potato. We only have Full Potato and we only do Full Potato, so please consider us if thats what you'd like. There are a lot of food places out there. We know what we're good at and thats Full Potato.";
  homeContainer.appendChild(copy);

  const hours = document.createElement("div");
  hours.setAttribute("id", "hours");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  hours.appendChild(hoursTitle);
  const hoursContent = document.createElement("div");
  hoursContent.textContent =
    "We are proudly open 9-5, as often as we are able. Please come down and see if we are open.";
  hours.appendChild(hoursContent);
  homeContainer.appendChild(hours);

  const location = document.createElement("div");
  location.setAttribute("id", "location");
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";
  location.appendChild(locationTitle);
  const locationContent = document.createElement("div");
  locationContent.textContent =
    "We are located just down the road from the ol' Fullerton residence. Can't miss it.";
  location.appendChild(locationContent);
  homeContainer.appendChild(location);

  content.appendChild(homeContainer);
  return homeContainer;
};

export { home };
