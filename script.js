// toggle button for light/dark mode
const darkModeToggle = document.getElementById("theme-toggle");
const body = document.body;

// set theme based on system preference
function setTheme(theme) {
  body.classList.toggle("dark-mode", theme === "dark");
  // save to local storage
  localStorage.setItem("theme", theme);
}

// check for saved theme
const savedTheme = localStorage.getItem("theme");

// check for system preference theme
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// apply theme on page load
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(systemPreference);
}

// add listener button click
toggleButton.addEventListener("click", ()=> {
  // toggle theme
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  }
)