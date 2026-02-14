"use strict";

export const FixedScrolling = ($elem) => {
    if (scrollY >= 100)
        $elem.classList.add("fixed-scrolling");
    else
        $elem.classList.remove("fixed-scrolling");
}