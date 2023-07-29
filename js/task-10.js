function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const inputNumberRef = document.querySelector('[type="number"]');
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const divBoxesRef = document.getElementById("boxes");
divBoxesRef.style.display = "flex";
divBoxesRef.style.flexWrap = "wrap";
divBoxesRef.style.alignItems = "center";
divBoxesRef.style.marginTop = "30px";

createBtnRef.addEventListener("click", () => {
  if (
    Number(inputNumberRef.value.trim()) > Number(inputNumberRef.max) ||
    Number(inputNumberRef.value.trim()) < Number(inputNumberRef.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumberRef.value.trim());
  }
  inputNumberRef.value = "";
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputNumberRef.value = "";
  divBoxesRef.innerHTML = "";
}

function createBoxes(amount) {
  let size = 20;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesRef.insertAdjacentHTML("beforeend", boxesArr.join(""));
}
