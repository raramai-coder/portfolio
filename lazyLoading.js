const observer = lozad();
observer.observe();

const firstImage = document.querySelector('.firstImage');
observer.triggerLoad(firstImage);

const secondImage = document.querySelector('.secondImage');
observer.triggerLoad(secondImage);