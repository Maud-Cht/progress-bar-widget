const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const progressInput = document.getElementById("progress-input");

progressInput.addEventListener("input", () => {
  const value = progressInput.value;
  progressBar.style.width = value + "%";
  progressText.textContent = value + "%";
});
