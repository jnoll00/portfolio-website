console.log("Portfolio website loaded!");

//Add toggle for choosing light or dark theme
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); //matches CSS class
});
