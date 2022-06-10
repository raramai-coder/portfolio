// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   //console.log(slideIndex);
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   //console.log(dots);

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

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
