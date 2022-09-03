initialize();
const clearBtn = document.querySelector('.rightBtn');
clearBtn.addEventListener('click', clear);

function initialize(screenSize = 16){
    const screenContainer = document.querySelector('.screen-container');
    
    for (let i = 0; i < (screenSize * screenSize); i++){
        const pixel = document.createElement('div');
        pixel.style.height = `${100 / screenSize}%`;
        pixel.style.width = `${100 / screenSize}%`;
        pixel.style.backgroundColor = 'white';
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', handleHover);
        screenContainer.appendChild(pixel);
    }
}

function handleHover(e){
    e.currentTarget.style.backgroundColor = 'black';
}

function clear(e){
    const body = document.querySelector('body');
    const pixels = document.querySelectorAll('.pixel');
    
    body.classList.add('shake');
    body.addEventListener('animationend', function(){
        body.classList.remove('shake');
        }, 
        {once:true }
    );

    pixels.forEach((pixel) => {
        pixel.style.backgroundColor ='white';
    });
}