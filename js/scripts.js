document.getElementById("hamburger-menu").addEventListener("click", (el) => {
  let element = document.getElementById("full-menu");
  element.classList.contains("hidden")
    ? element.classList.remove("hidden")
    : element.classList.add("hidden");
});

document.getElementById("close-button").addEventListener("click", (el) => {
  document.getElementById("full-menu").classList.add("hidden");
});

document
  .getElementById("full-menu")
  .querySelectorAll("li")
  .forEach((el) => {
    el.addEventListener("click", function () {
      document.getElementById("full-menu").classList.add("hidden");
    });
  });
