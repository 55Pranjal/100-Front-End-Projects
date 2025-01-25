//progress
const progress = document.getElementById("progress");
//prevBtn
const prevBtn = document.getElementById("prev");
//nextBtn
const nextBtn = document.getElementById("next");
//circles
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;
nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }

  updateUI();
});

prevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUI();
});

function updateUI() {
  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      //agar index kam active index se toh mtlb pichle vaale circles active hain tabhi hum active class ko add kar rhe hain
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; //progress bar ko color de rhe hain

  if (activeIndex === 1) {
    prevBtn.disabled = true;
  } else if (activeIndex === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
