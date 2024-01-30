import {getElement, getElements} from "../core/index.js";

export default function counter(counter) {
    if (!counter) return;
    const increment = getElement('.increment', counter);
    const decrement = getElement('.decrement', counter);
    const result = getElement('.counter__result', counter);
    let count = +result.innerText;
    if (count === 1) decrement.classList.add('disabled');
    getElements('button', counter).forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('increment')) {
                count = count + 1;
                result.innerHTML = count;
                if (decrement.classList.contains('disabled')) decrement.classList.remove('disabled');
            } else {
                if (count === 1) return;
                count = count - 1;
                result.innerHTML = count;
                if (count === 1) item.classList.add('disabled');
            }
        })
    });
}