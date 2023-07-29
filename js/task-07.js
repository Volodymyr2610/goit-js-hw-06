const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
console.log(inputRef);
console.dir(inputRef.value);

textRef.style.fontSizeAdjust = '44 px'

inputRef.addEventListener('input', (event) => {
    console.log(Number(inputRef.value))
    textRef.style.fontSize = inputRef.value + "px";
})