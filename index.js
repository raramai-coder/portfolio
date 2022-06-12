
let currentSlideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("wheel", (event) => {
    const delta = Math.sign(event.deltaY);
    moveSlides(delta);
    //console.info(delta);
  });
});

function moveSlides(n) {
  showSlides((currentSlideIndex += n));
}

function showSlides(slideIndex) {
  let slides = document.getElementsByClassName("mySlides");
  //console.info(slides.length);

  if (slideIndex > slides.length) {
    slideIndex = 1;
    //console.log("at 3");
  } else if (slideIndex <= 0) {
    slideIndex = slides.length;
  }

  //console.log(slideIndex);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides[slideIndex - 1] != null) {
    slides[slideIndex - 1].style.display = "block";
  }
}
