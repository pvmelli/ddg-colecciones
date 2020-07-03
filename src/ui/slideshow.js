let slideIndex = 1;

export function manageSlideShow () {
    const $prevSlide = document.querySelector('#prev-slide');
    $prevSlide.addEventListener('click', () => {plusDivs(-1)});

    const $nextSlide = document.querySelector('#next-slide');
    $nextSlide.addEventListener('click', () => {plusDivs(1)});

    showSlides(slideIndex);
    showIndicators(slideIndex);

    window.setInterval(automaticSlides, 5000);
};

function automaticSlides () {
    slideIndex += 1;
    showSlides(slideIndex);
    showIndicators(slideIndex);
}

function plusDivs(n) {
  const newIndex = slideIndex += n;
  showSlides(newIndex);
  showIndicators(newIndex);
};

function showSlides(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;  
  }
  x[slideIndex-1].style.opacity = 1;  
};

function showIndicators(n) {
    let $indicators = document.querySelectorAll('.indicator')
    $indicators.forEach(($indicator) => {
        $indicator.classList.add('non-selected');
    })
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    const $selectedIndicator = document.querySelector(`[data-slide="${slideIndex}"]`)
    $selectedIndicator.classList.remove('non-selected');
    $selectedIndicator.classList.add('selected');
}
