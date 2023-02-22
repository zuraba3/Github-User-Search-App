const moon = document.getElementById("moon");
// console.log(moon);
const sun = document.getElementById("sun");
// console.log(sun);
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");

const input = document.getElementById("user");
const button = document.querySelector(".btn");

const flipTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.background = "#141d2f";
    title.style.color = "#ffffff";
    themeText.innerHTML = "light";
    themeText.style.color = "#ffffff";
  } else if (theme === "sun") {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.background = "#fefefe";
    title.style.color = "#222731";
    themeText.innerHTML = "dark";
    themeText.style.color = "#1e2a47";
  }
};

moon.addEventListener("click", () => flipTheme("dark"));
sun.addEventListener("click", () => flipTheme("sun"));

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(input.value);
});
