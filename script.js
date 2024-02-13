"use strict";

const RescuepopUp = document.querySelector(".RescuepopUp");
const BooktrekkerspopUp = document.querySelector(".BooktrekkerspopUp");
const StudentModuleManagerpopUp = document.querySelector(".SMMpopUp");
// const HabitualpopUp = document.querySelector(".HabitualpopUp");
const TranscriptspopUp = document.querySelector(".TranscriptspopUp");
const overlay = document.querySelector(".overlay");

//For the X button
const btnClosepopUp = document.querySelector(".close-popUp");
//When clicking on the popup buttons
const btnShowRescuepopUp = document.querySelector(".show-Rescue-popUp");
const btnShowSMMpopUp = document.querySelector(".show-SMM-popUp");
const btnShowBooktrekkerspopUp = document.querySelector(
  ".show-Booktrekkers-popUp"
);
// const btnHabitualpopUp = document.querySelector(".show-Habitual-popUp");
const btnTranscriptpopUp = document.querySelector(".show-transcript-popUp");

// Function to close the popup
const closepopUp = function (popup) {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

// When the user clicks the X button
document.querySelectorAll(".close-popUp").forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const popup = this.closest(".popUp");
    if (popup) {
      closepopUp(popup);
    }
  });
});

//Button clicks
btnShowRescuepopUp.addEventListener("click", function () {
  RescuepopUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnShowBooktrekkerspopUp.addEventListener("click", function () {
  BooktrekkerspopUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnShowSMMpopUp.addEventListener("click", function () {
  StudentModuleManagerpopUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// btnHabitualpopUp.addEventListener("click", function () {
//   HabitualpopUp.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// });

btnTranscriptpopUp.addEventListener("click", function () {
  TranscriptspopUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//When the user clicks the X button
btnClosepopUp.addEventListener("click", closepopUp);
//When the user clicks the the overlay(blured section of the website)
overlay.addEventListener("click", function () {
  StudentModuleManagerpopUp.classList.add("hidden");
  overlay.classList.add("hidden");
  BooktrekkerspopUp.classList.add("hidden");
  RescuepopUp.classList.add("hidden");
  // HabitualpopUp.classList.add("hidden");
  TranscriptspopUp.classList.add("hidden");
});

// When the hamburger menu is click on the appropriate screen size
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//#region  DarkMode

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  document.querySelector(".logo").classList.add("logoDarkMode");
  document.querySelector(".Hamlogo").classList.add("logoDarkMode");
  document
    .querySelector(".themeIcon")
    .classList.remove("bi-brightness-low-fill");
  document.querySelector(".themeIcon").classList.add("bi-moon-fill");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  document.querySelector(".logo").classList.remove("logoDarkMode");
  document.querySelector(".Hamlogo").classList.remove("logoDarkMode");
  document.querySelector(".themeIcon").classList.add("bi-brightness-low-fill");
  document.querySelector(".themeIcon").classList.remove("bi-moon-fill");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

//#endregion

//#region Projects Slider //////////////////////////////////////////////////////////////////////////////////

// const slider = function () {
//   // Selecting DOM elements
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");

//   // Initial slide index and maximum slide index
//   let curSlide = 0;
//   const maxSlide = slides.length - 1;

//   // Function to move to a specific slide
//   const goToSlide = function (slide) {
//     // Adjusting the transform property for each slide
//     slides.forEach(
//       (s, index) =>
//         (s.style.transform = `translateX(${100 * (index - slide)}%)`)
//     );
//   };

//   // Function to create dots for each slide
//   const createDots = function () {
//     slides.forEach(function (_, index) {
//       // Adding dots to the dot container
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${index}"></button>`
//       );
//     });
//   };

//   // Function to activate the corresponding dot for the current slide
//   const activateDot = function (slide) {
//     // Removing the 'dots__dot--active' class from all dots
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//     // Adding the 'dots__dot--active' class to the dot corresponding to the current slide
//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   // Function to move to the next slide
//   const nextSlide = function () {
//     curSlide === maxSlide ? (curSlide = 0) : curSlide++;
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   // Function to move to the previous slide
//   const prevSlide = function () {
//     curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   // Initialization function
//   const init = function () {
//     // Set up the initial state
//     goToSlide(0);
//     createDots();
//     activateDot(0);
//   };
//   init();

//   // Event handlers

//   // Button click events
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   // Keyboard arrow key events
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     if (e.key === "ArrowRight") nextSlide();
//   });

//   // Dot click event
//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       // Extracting the slide index from the data attribute
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// // Calling the slider function to initialize it
// slider();

//#endregion

function openInNewTab(url) {
  window.open(url, "_blank");
}
