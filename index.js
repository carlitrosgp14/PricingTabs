"use strict";

const openTabBtns = document.querySelectorAll(".tab-btn");
const openBasicTab = document.querySelector(".tab-btn--1");
const openProTab = document.querySelector(".tab-btn--2");
const openEnterpriTab = document.querySelector(".tab-btn--3");

const tabPanels = document.querySelectorAll(".tab-panel");
const basicTab = document.querySelector(".tab-panel--1");
const proTab = document.querySelector(".tab-panel--2");
const enterpriTab = document.querySelector(".tab-panel--3");

// DRAFT 3: THIRD ATTEMPT TO REFACTOR MY CODE: FUCNTIONALITY OF SWITCHING BUTTON AND PANELS

const turnOnBasicBtnPanel = function () {
  basicTab.classList.add("active");
  openBasicTab.classList.add("active");
  proTab.classList.remove("active");
  openProTab.classList.remove("active");
  enterpriTab.classList.remove("active");
  openEnterpriTab.classList.remove("active");
};

const turnOnProBtnPanel = function () {
  proTab.classList.add("active");
  openProTab.classList.add("active");
  basicTab.classList.remove("active");
  openBasicTab.classList.remove("active");
  enterpriTab.classList.remove("active");
  openEnterpriTab.classList.remove("active");
};

const turnOnEnterpriBtnPanel = function () {
  enterpriTab.classList.add("active");
  openEnterpriTab.classList.add("active");
  proTab.classList.remove("active");
  openProTab.classList.remove("active");
  basicTab.classList.remove("active");
  openBasicTab.classList.remove("active");
};

// Open Basic button and panel aaand close the rest of them
openBasicTab.addEventListener("click", turnOnBasicBtnPanel);

// Open Pro buttona and panel aaand close the rest of them
openProTab.addEventListener("click", turnOnProBtnPanel);

// Open Enterpise button and apanel aaand close the rest of them
openEnterpriTab.addEventListener("click", turnOnEnterpriBtnPanel);

// FOR THE RECORDS

//  DRAFT 1: Functionlanity of enabling buttons and panels  RAW CODE
// openBasicTab.addEventListener("click", () => {
//   basicTab.classList.add("active");
//   openBasicTab.classList.add("active");
//   proTab.classList.remove("active");
//   openProTab.classList.remove("active");
//   enterpriTab.classList.remove("active");
//   openEnterpriTab.classList.remove("active");
// });

// openProTab.addEventListener("click", () => {
//   proTab.classList.add("active");
//   openProTab.classList.add("active");
//   basicTab.classList.remove("active");
//   openBasicTab.classList.remove("active");
//   enterpriTab.classList.remove("active");
//   openEnterpriTab.classList.remove("active");
// });

// openEnterpriTab.addEventListener("click", () => {
//   enterpriTab.classList.add("active");
//   openEnterpriTab.classList.add("active");
//   proTab.classList.remove("active");
//   openProTab.classList.remove("active");
//   basicTab.classList.remove("active");
//   openBasicTab.classList.remove("active");
// });

// DRAFT 2: failed attempt to refactor draft 1 code, hehe

// if openBasicTab.addEventListener('click') {
//     basicTab.classList.add("active");
//     openBasicTab.classList.add("active");
//     proTab.classList.remove("active");
//   openProTab.classList.remove("active");
//   enterpriTab.classList.remove("active");
//   openEnterpriTab.classList.remove("active");
// } else if (openProTab.addEventListener('click')) {
//     proTab.classList.remove("active");
//     openProTab.classList.remove("active");
//     basicTab.classList.remove("active");
//   openBasicTab.classList.remove("active");
//   enterpriTab.classList.remove("active");
//   openEnterpriTab.classList.remove("active");
// } else if (openEnterpriTab.addEventListener('click')){
//     enterpriTab.classList.remove("active");
//     openEnterpriTab.classList.remove("active");
//     basicTab.classList.remove("active");
//     openBasicTab.classList.remove("active");
//      proTab.classList.remove("active");
//   openProTab.classList.remove("active");
// } else {
//     console.log('Select the best plan tailored to your needs.')
// }
