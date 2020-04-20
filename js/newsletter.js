document.getElementById("subscribe-form").addEventListener("submit", () => {
  subscribeToNewsletter();
  return false;
});

function subscribeToNewsletter() {
  document.getElementById("subscribe-success").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("subscribe-success").classList.add("hidden");
  }, 3000);
}
