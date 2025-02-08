const password = document.getElementById("password");
const bg = document.querySelector(".background-image");
const btn = document.querySelector(".btn");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurness = 20 - length * 2;
  bg.style.filter = `blur(${blurness}px)`;
});

btn.addEventListener("click", () => {
  window.alert("Thank you for checking this out!");
});
