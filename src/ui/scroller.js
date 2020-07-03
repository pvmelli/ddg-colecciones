export function hideScroller () {
    let currentScrollPos = window.pageYOffset;
    const scroller = document.getElementById('scroller');
    scroller.style.transition = '1s';
    console.log(currentScrollPos);

    if (currentScrollPos >= 3){    
        scroller.style.opacity = 0;
        scroller.style.height = 0;
        
        setTimeout(() => {scroller.classList.add('not-display')}, 1000)
    }
}