<<<<<<< HEAD:Website/index/index.js
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
=======
const scrollElement = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight)* (percentageScroll/100))
    );
  };

  const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
  }
   
  const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
  }
   
  const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
      hideScrollElement();
    }
  }
   
  window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
  })

  //initialize throttleTimer as false
let throttleTimer = false;
 
const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;
     
    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;
     
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
    }, time);
>>>>>>> 07e0b0993dc2ee97fccae9576a3ffd3b47e39f27:index/index.js
}