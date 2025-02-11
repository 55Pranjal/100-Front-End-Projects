const input = document.querySelectorAll(".controls input");

function handleUpdate() {
  this.name == "base" ? (suppix = "") : (suppix = "px");
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suppix
  );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
