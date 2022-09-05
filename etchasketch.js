initialize();

//Event listeners for button funtionality
const clearBtn = document.querySelector('.rightBtn');
clearBtn.addEventListener('click', clear);

const menuBtn = document.querySelector('.leftBtn');
menuBtn.addEventListener('click', toggleModal);

//Event listeners for closing of the model
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', toggleModal);

const modalBackground = document.querySelector('.modal-container');
modalBackground.addEventListener('click', function(e){
    if(e.target === modalBackground){
        toggleModal(e);
    }
});

const sizeSlider = document.querySelector('.size-slider');
sizeSlider.addEventListener('input', adjustSize);

//Function that sets up the drawing space A.K.A screen
function initialize(screenSize = 16){
    const screen = document.querySelector('.screen-container');
    
    for (let i = 0; i < (screenSize * screenSize); i++){
        const pixel = document.createElement('div');
        pixel.style.height = `${100 / screenSize}%`;
        pixel.style.width = `${100 / screenSize}%`;
        pixel.style.backgroundColor = 'white';
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', handleHover);
        screen.appendChild(pixel);
    }
}

//Function for changing the background colour of the divs that make up the screen (A.K.A pixels)
function handleHover(e){
    e.target.style.backgroundColor = 'black';
}

//Function for clearing the screen
function clear(){
    const body = document.querySelector('body');
    const pixels = document.querySelectorAll('.pixel');
    
    //Shake body as if it was an etch-a-sketch
    body.classList.add('shake');
    body.addEventListener('animationend', function(){
        body.classList.remove('shake');
        }, 
        {once:true }
    );
    
    //Clear the "pixels"
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor ='white';
    });
}

//Function for displaying and closing options menu modal
function toggleModal(){
    const modal = document.querySelector('.modal-container');
    modal.classList.toggle("hidden");
}

//Function for removing all children from a node
function removeAllChildren(node){
    while(node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}

//Function for providing functionality to the screen size slider
function adjustSize(e){
    const value = e.target.value;
    const sliderValue = document.querySelector('.slider-value');
    const screenContainer = document.querySelector('.screen-container');

    sliderValue.textContent = `${value} x ${value}`;
    removeAllChildren(screenContainer);
    initialize(value);
}