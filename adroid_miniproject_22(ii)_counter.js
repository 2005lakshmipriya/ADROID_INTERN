// set initial value to zero
let count = 0;
// select value element
const value = document.querySelector("#value");

const reset = () => {
    count = 0;
    value.textContent = count;
}

const decrease = () => {
    count--;
    value.textContent = count;
}

const increase = () => {
    count++;
    value.textContent = count;
}
