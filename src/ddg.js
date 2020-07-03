import {hideScroller} from './ui/scroller.js';

export function initialize() {
    window.addEventListener('scroll', hideScroller, {passive: true})

}
