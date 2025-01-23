let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  if (position <= 20) {
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
});
