const changeColor = document.querySelector("body");
const changeButton = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const widget = document.querySelector(".widget");

function getRandomHexColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${[r, g, b].join(", ")})`;
}

changeButton.addEventListener("click", () => {
  let rgbColor = `${getRandomHexColor()}`;
  changeColor.style.backgroundColor = rgbColor;
  textColor.textContent = rgbColor;
});

widget.style.textAlign = "center";
widget.style.fontFamily = "Montserrat";
widget.style.fontWeight = "400";
changeButton.style.fontWeight = "500";
changeButton.style.border = "none";
widget.style.fontSize = "16px";
widget.style.lineHeight = "24px";
widget.style.letter = "4%";
changeButton.style.backgroundColor = "#4E75FF";
changeButton.style.color = "white";
changeButton.style.padding = "8px 16px";
changeButton.style.borderRadius = "8px";