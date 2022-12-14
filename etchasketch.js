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

//Event Listener for screen size slider
const sizeSlider = document.querySelector('.size-slider');
sizeSlider.addEventListener('input', adjustSize);

//Event Lister for colour mode radio buttons
const radios = document.querySelectorAll('input[type="radio"]');
for (const radio of radios){
    radio.addEventListener('click', () => initialize());
}

//Function that sets up the drawing space A.K.A screen
function initialize(){
    const screen = document.querySelector('.screen-container');
    const colourMode = getColourMode();
    const screenSize = document.querySelector('.size-slider').value;
    
    if(screen.hasChildNodes){
        removeAllChildren(screen);
    }

    for (let i = 0; i < (screenSize * screenSize); i++){
        const pixel = document.createElement('div');
        pixel.style.height = `${100 / screenSize}%`;
        pixel.style.width = `${100 / screenSize}%`;
        pixel.style.backgroundColor = 'white';
        pixel.classList.add('pixel');

        switch (colourMode) {
            case 'classic-black':
                pixel.addEventListener('mouseenter', handleHover);
                break;
            case 'surprise':
                pixel.addEventListener('mouseenter', handleHoverColour);
                break
            default:
                pixel.addEventListener('mouseenter', handleHover);
                break;
        }
        screen.appendChild(pixel);
    }
}

//Function for changing the background colour of the divs that make up the screen (A.K.A pixels) to black
function handleHover(e){
    e.target.style.backgroundColor = 'black';
}

//Function for changing background colour of the pixels to a random colour
function handleHoverColour(e){
    const hue = Math.floor(Math.random() * 360);
    e.target.style.backgroundColor = `hsl(${hue} 100% 50%)`;
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
    sliderValue.textContent = `${value} x ${value}`;
    initialize();
}

//Function for getting the colour mode based on the radio buttons in the options menu
function getColourMode(){
    const radios = document.querySelectorAll('input[type="radio"]');
    for(const radio of radios){
        if (radio.checked){
            return radio.value;
        }
    };
}