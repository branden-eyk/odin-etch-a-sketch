initialize();
const clearBtn = document.querySelector('.rightBtn');
clearBtn.addEventListener('click', clear);

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
    e.currentTarget.style.backgroundColor = 'black';
}

//Function for clearing the screen
function clear(e){
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