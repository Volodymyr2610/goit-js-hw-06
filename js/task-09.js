function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorCodeRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body')

btnRef.addEventListener('click', changeColor);

function changeColor() {
bodyRef.style.backgroundColor = getRandomHexColor();
colorCodeRef.textContent = bodyRef.style.backgroundColor;
};