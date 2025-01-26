//close-btn
const close = document.getElementById("close");
//open-btn
const open = document.getElementById("open");
//modal
const modal = document.getElementById("modal");
//submit-btn
const submit = document.querySelector(".submit-btn");
//check
const check = document.getElementById("check");

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});

submit.addEventListener("click", () => {
  if (check === "") {
    window.alert("Enter something");
  } else {
    window.alert(
      "Submitted successfully(Just Kidding, I don't know backend yet)"
    );
  }
});
