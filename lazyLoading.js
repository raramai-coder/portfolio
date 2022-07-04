const observer = window.lozad();
observer.observe();

if(window.innerWidth<801){
    observer.observe();
}else{
   var images = document.getElementsByClassName("lozad");
   for(var i=0;i<images.length;i++){
    
    if(!(images[i].class=="firstImage")||!images[i].class==("secondImage")){
        let source = images[i].getAttribute('data-src');
        images[i].src = source;
    }
   }
}



const firstImage = document.querySelector('.firstImage');
observer.triggerLoad(firstImage);

const secondImage = document.querySelector('.secondImage');
observer.triggerLoad(secondImage);