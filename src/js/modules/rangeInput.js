import {getElement} from "../core/index.js";

export default function initRange() {
    const price = getElement('[data-range]');
    if (!price) return;
    const input = getElement('input', price);
    input.style.setProperty('--value', input.value);
    input.style.setProperty('--min', input.min);
    input.style.setProperty('--max', input.max);
    const currentValue = getElement('[data-current]', price);
    input.addEventListener('input', () => {
        input.style.setProperty('--value', input.value)
        currentValue.innerText = input.value;
    });
}