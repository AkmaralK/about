const toggle = document.querySelector(".motion-toggle");
const toggleText = toggle.querySelector(".motion-text");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setPaused(paused) {
  document.body.dataset.motion = paused ? "paused" : "playing";
  toggleText.textContent = paused ? "Анимацияны қосу" : "Анимацияны тоқтату";
}

setPaused(reducedMotion.matches);
toggle.hidden = false;
toggle.addEventListener("click", () => {
  setPaused(document.body.dataset.motion !== "paused");
});
reducedMotion.addEventListener("change", (event) => setPaused(event.matches));
