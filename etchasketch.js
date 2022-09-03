initialize();

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