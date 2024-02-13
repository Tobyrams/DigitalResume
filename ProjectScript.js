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

function openInNewTab(url) {
  window.open(url, "_blank");
}
