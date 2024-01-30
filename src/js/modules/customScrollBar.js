import PerfectScrollbar from 'perfect-scrollbar';
import {header} from "../core/elementsNodeList.js";

const mainScroll = new PerfectScrollbar('.page-container1', {
    suppressScrollX: true
});

let lastScrollPosition = 0;

function handleScroll() {
    const scrollTop = mainScroll.element.scrollTop || document.documentElement.scrollTop;

    if (!header.classList.contains('active')) {
        if (scrollTop >= header.clientHeight - 30) {
            header.classList.add("--fixed");
        } else {
            header.classList.remove("--fixed");
        }
    }

    if (scrollTop >= header.clientHeight + 60) {
        if (scrollTop > lastScrollPosition) {
            header.classList.remove("header-visible");
            header.classList.add("header-hidden");
        } else {
            header.classList.remove("header-hidden");
            header.classList.add("header-visible");
        }
        lastScrollPosition = scrollTop;
    }
}


export default function mainScreenScroll() {
    mainScroll.element.addEventListener('ps-scroll-y', handleScroll);
}

// export {mainScroll};