let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let audio = document.querySelector("#audio");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  audio.play();
});
