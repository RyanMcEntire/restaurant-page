const content = document.querySelector("#content");

const contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const fullContact = document.createElement("div");
  fullContact.setAttribute("id", "fullContact");
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";
  fullContact.appendChild(contactTitle);
  const contactContent = document.createElement("div");
  contactContent.textContent =
    "There's usually someone around. We don't vacation often. If you don't see us, just holler.";
  fullContact.appendChild(contactContent);
  contactContainer.appendChild(fullContact);
  const contactImage = document.createElement("img");
  contactImage.classList.add("contactImage");
  contactImage.src = "../src/contact/potato-close.jpg";
  contactContainer.appendChild(contactImage);

  content.appendChild(contactContainer);

  const contactButton = document.querySelector("#contactButton");
  contactButton.classList.add("currentTab");

  return contactContainer;
};

export { contact };
