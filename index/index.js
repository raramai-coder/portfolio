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
}