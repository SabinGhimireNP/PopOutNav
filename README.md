# PopOutNav

A simple and interactive navigation menu with pop-out dropdowns. This project demonstrates how to create animated dropdown navigation using vanilla JavaScript and CSS.

## Features

- Animated dropdown navigation
- Smooth transitions using JavaScript and CSS
- Responsive to mouse hover events

## How it works

- Hovering over a navigation item triggers a dropdown to pop out below it.
- The dropdown background resizes and moves smoothly to match the hovered item.
- Uses event listeners for mouseenter and mouseleave to animate the dropdown and background.

## JavaScript Overview

The main logic handles:
- Adding/removing CSS classes to trigger transitions
- Dynamically resizing and positioning the dropdown background
- Listening for mouse hover events

```js
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");
  // ...rest of code
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
```

---
*Inspired by Wes Bos's [JavaScript 30 Course](https://javascript30.com/)*
