import {hideScroller} from './ui/scroller.js';
import {showInstagramLink, hideInstagramLink} from './ui/project-gallery.js';

export function initialize() {
    window.addEventListener('scroll', hideScroller, {passive: true})

    const projects = document.querySelectorAll('.inner-project');
    projects.forEach((project) => {
        project.addEventListener('mouseover', showInstagramLink)
        project.addEventListener('mouseout', hideInstagramLink)
    })

}
