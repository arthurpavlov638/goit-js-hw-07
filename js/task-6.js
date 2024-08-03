const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type='number']");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10; // Збільшуємо розмір кожного наступного боксу
  }

  boxesContainer.append(...boxes);
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

// Styling
boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";
boxesContainer.style.gap = "10px";
boxesContainer.style.marginTop = "16px";

input.style.width = "150px";
input.style.height = "40px";
input.style.fontFamily = "Montserrat";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight = "24px";
input.style.letterSpacing = "0.04em";
input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.padding = "8px";

createBtn.style.height = "40px";
createBtn.style.width = "120px";
createBtn.style.border = "none";
createBtn.style.fontSize = "16px";
createBtn.style.cursor = "pointer";
createBtn.style.fontWeight = "500";
createBtn.style.lineHeight = "24px";
createBtn.style.letterSpacing = "4%";
createBtn.style.backgroundColor = "#4E75FF";
createBtn.style.color = "white";
createBtn.style.padding = "8px 31px";
createBtn.style.borderRadius = "8px";

destroyBtn.style.height = "40px";
destroyBtn.style.width = "120px";
destroyBtn.style.border = "none";
destroyBtn.style.fontSize = "16px";
destroyBtn.style.cursor = "pointer";
destroyBtn.style.fontWeight = "500";
destroyBtn.style.lineHeight = "24px";
destroyBtn.style.letterSpacing = "4%";
destroyBtn.style.backgroundColor = "#FF4E4E";
destroyBtn.style.color = "white";
destroyBtn.style.padding = "8px 31px";
destroyBtn.style.borderRadius = "8px";

const controls = document.querySelector("#controls");
controls.style.display = "flex";
controls.style.gap = "16px";
