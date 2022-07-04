const observer = window.lozad();
//observer.observe();

// const el = document.querySelectorAll('img');
// const observer = window.lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
// observer.observe();

// const observer = window.lozad('.lozad',{
//     load:function(el){
//         el.src = el.getAttribute("data-src");
//     }
// })
// observer.observe();

// const firstImage = document.querySelector('.firstImage');
// // const firstImage = document.getElementById("firstImage");
// observer.triggerLoad(firstImage);

// // const secondImage = document.querySelector('#secondImage');
// const secondImage = document.getElementById('secondImage');
// observer.triggerLoad(secondImage);
// observer.observe();

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