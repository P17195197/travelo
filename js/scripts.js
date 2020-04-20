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

document
  .getElementById("main-menu")
  .querySelectorAll("li")
  .forEach((el) => {
    el.addEventListener("click", function () {
      this.parentElement.querySelectorAll("li").forEach((li) => {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
        }
      });
      if (!document.getElementById("header").classList.contains("move-up")) {
        document.getElementById("header").classList.add("move-up");
      }
      if (this === this.parentElement.querySelector("li")) {
        document.getElementById("header").classList.remove("move-up");
      }
      this.classList.add("active");
    });
  });
