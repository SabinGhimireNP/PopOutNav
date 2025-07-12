const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handelEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const data = dropdown.getBoundingClientRect();
  const coords = {
    width: data.width,
    height: data.height,
    top: data.top,
    left: data.left,
  };
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px,${coords.top}px)`
  );
  console.log(data);
}

function handelLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");

  //   console.log("left");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handelEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handelLeave)
);
