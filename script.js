const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handelEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  //   console.log("entered");
}

function handelLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  //   console.log("left");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handelEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handelLeave)
);
