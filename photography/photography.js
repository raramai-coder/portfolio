function highlightCorrespondingElement(correspondingElement, elementID, enter) {
    
    let element = document.getElementById(elementID);
    
    if(correspondingElement=="image"){
        highlightCorrespondingImage(element, enter);
    }else{
        highlightCorrespondingLink(element, enter);
    }
}

function highlightCorrespondingImage(image, enter) {
    if(enter){
        image.style.opacity = 1; 
    }else{
        image.style.opacity = 0;
    }
    
}

function highlightCorrespondingLink(link, enter) {
    if(enter){
        link.style.color = "#F4978E"; 
    }else{
        link.style.color = "#001219"; 
    }
}
