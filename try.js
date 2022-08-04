let slider = document.createElement('input');
slider.setAttribute('type','range');
slider.setAttribute('value','16');
document.body.appendChild(slider);

let container = document.querySelector('.container');
containerWidth = 900;
container.setAttribute('style',`width:${containerWidth}px`);

container.addEventListener('mouseleave',tryMe);

function tryMe(e){
    console.log(e);
}