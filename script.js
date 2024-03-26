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

//#region FancyAnimte for Name(TebogoRamasodi)
const text = document.querySelector(".fancyAnimate");

const strText = text.textContent;

const splitText = strText.split("");

//clear the text so it's dont duplicated eg. tebogoramasoditebogoramasodi
text.textContent = "";

//Adding a span to each element of the letters
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  //getting the characters from start to finish
  const span = text.querySelectorAll("span")[char];

  span.classList.add("fade");

  char++;

  //Stopping the animation when it get to the end of the string
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

//#endregion

//#region Form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
//#endregion

function openInNewTab(url) {
  window.open(url, "_blank");
}
