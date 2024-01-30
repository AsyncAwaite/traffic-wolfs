import {body, header} from "./elementsNodeList.js";


function getElement(selector, element = document) {
    return element.querySelector(selector);
}

function getElements(selector, element = document) {
    return element.querySelectorAll(selector);
}

function disableScrollAndSwipes(scrollPosition) {
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.classList.add('fixed');
    header.style.top = `0px`;
}

function enableScrollAndSwipes(scrollPosition) {
    body.style.position = 'relative';
    body.style.top = '0';
    body.classList.remove('fixed');
    window.scrollTo({
        top: +scrollPosition,
        behavior: "auto"
    });
    // window.scrollTo(0, scrollPosition);

}

export {
    disableScrollAndSwipes,
    enableScrollAndSwipes,
    getElements,
    getElement,

};