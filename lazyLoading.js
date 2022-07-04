const observer = window.lozad();
observer.observe();

// const observer = window.lozad('.lozad',{
//     load:function(el){
//         el.src = el.dataset.src;
//         // el.onload=function(){
//         //     el.classList.add('fade')
//         // }
//     }
// }).observe()

const firstImage = document.querySelector('.firstImage');
observer.triggerLoad(firstImage);

const secondImage = document.querySelector('.secondImage');
observer.triggerLoad(secondImage);