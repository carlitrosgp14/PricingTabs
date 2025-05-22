"use strict";

const openTabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// writing logic to get buttons to do something
for (let i = 0; i < openTabBtns.length; i++) {
  openTabBtns[i].addEventListener("click", () => {
    if (!openTabBtns[i].classList.contains("active")) {
      openTabBtns[i].classList.remove("active");
    } else if (!openTabBtns[i].classList.contains("active")) {
      openTabBtns[i].classList.add("active");
    }
  });
}

const openTab = function () {
  tabPanels[i].classList.add("active");
};

for (let i = 0; i < tabPanels.length; i++) {
  tabPanels[i].addEventListener("click", function () {
    if (tabPanels[i].classList.contains("active")) {
      tabPanels[i].classList.remove("active");
    }
  });
}
