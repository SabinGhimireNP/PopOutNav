//Variables
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

//Functions
function handleEnter() {
  this.classList.add("trigger-enter");

  setTimeout(() => this.classList.add("trigger-enter-active"), 150);

  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const data = dropdown.getBoundingClientRect();
  const navdata = nav.getBoundingClientRect();

  const coords = {
    width: data.width,
    height: data.height,
    top: data.top - navdata.top,
    left: data.left - navdata.left,
  };

  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px,${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");

  background.classList.remove("open");
}

// Eventlisteners
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
