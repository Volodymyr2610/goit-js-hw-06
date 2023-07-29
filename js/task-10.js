function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const creatForm = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
// const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes')

btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  basicSize = 30;
  fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    size = basicSize + i * 10;
    div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
// let boxesAmount = inputHandler;

// inputRef.addEventListener('input', inputHandler);

// function inputHandler(event){
//   event.preventDefault();
//   console.log(event.currentTarget.value);
//  return boxesAmount = event.currentTarget.value;
// }