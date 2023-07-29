let counterValue = 0;
const counterRef = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const increaseCount = (event) =>{
    counterValue += 1;
    counterRef.textContent = counterValue;
}

const decreaseCount = (event) =>{
    counterValue -= 1;
    counterRef.textContent = counterValue;
}

incrementBtn.addEventListener('click', increaseCount);
decrementBtn.addEventListener('click', decreaseCount);