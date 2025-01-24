//THINGS WE NEED:

//copyText btn
const copyText = document.querySelector("textarea[name=copyTxt");
//finalText btn
const finalText = document.querySelector("textarea[name=finalTxt");
//move btn
const moveBtn = document.querySelector(".moverBtn");
//copy btn
const copyBtn = document.querySelector(".copyBtn");
//output container
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp); //this copyToClipboard function allows us to copy the text to our clipBoard
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select(); //this select allows us to selct all that is written in textarea
  document.execCommand("copy"); // this execCommand allows us to copy the selected item
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied </h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}
