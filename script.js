/*
my notes

1.width each box on line is math.floor(container.width/N). where N=(slider.value)
2. total number of divs = Number(slider.value) ** 2
3.random_number_for_RGBColors = math.floor(math.random()*256); define in loop
4.number of divs;
5. let container = document.querySelector('.container');
4.function colorMe(e){
    if(e == 'mouseenter'){
        div.setAttribute('style',`background-color:rgb(random,random,random)`);
    }
    else if(e == 'mouseleave'){
        div.removeAttribute('style','background-color:rgb(255,255,255)');
    }
}
for(let i = 0; i < number of divs;i++){
    random_number_for_RGBColors = math.floor(math.random()*256);
    random_number_for_RGBColors2 = math.floor(math.random()*256);
    random_number_for_RGBColors3 = math.floor(math.random()*256);
    let div = document.createElement('div');
    div.classList.add('container-item');
    div.setAttribute('style',`width:${container.width/N};flex:auto;background-color:rgb(random,random2,random3)`)
    div.addEventListener('mouseenter',colorMe);
    div.addEventListener('mouseleave',colorMe);
    container.appendChild(div);


}
*/

let container = document.querySelector('.container');
containerWidth = 800;
container.setAttribute('style',`width:${containerWidth}px;height:${containerWidth}px;display:flex;flex-wrap:wrap;margin:auto;
border: 0px solid rgb(25, 25, 25);box-sizing:border-box;`);



let slider = document.createElement('input');
slider.setAttribute('id','slider');
slider.setAttribute('style','margin-top:10px;');
slider.setAttribute('type','range');
slider.setAttribute('value','16');
slider.addEventListener('change',display);
document.body.appendChild(slider);

let label = document.createElement('label');
label.setAttribute('style','margin-right: 10px;margin-top:0px;');
label.setAttribute('for','slider');
document.body.insertBefore(label,slider);

function display(){
    
    let divsOnRow = Number(slider.value);
    let totalDivs = divsOnRow ** 2;
    let divWidth = containerWidth/divsOnRow;
    container.replaceChildren("");
    label.textContent = `Slider-Value:${divsOnRow}`;


    for(let i = 0; i < totalDivs;i++){
        let counter = 1;
        let RGBColors = Math.floor(Math.random()*256);
        let RGBColors2 = Math.floor(Math.random()*256);
        let RGBColors3 = Math.floor(Math.random()*256);
        let div = document.createElement('div');
        div.setAttribute('style',`width:${divWidth}px;flex:auto;background-color:rgba(0,0,0,1);`)
        div.addEventListener('mouseenter',colorMe);
        div.addEventListener('mouseleave',colorMe);
        container.appendChild(div);
        

        function colorMe(e){
            if(e.type == 'mouseenter'){
                div.style.backgroundColor = `rgba(${RGBColors},${RGBColors2},${RGBColors3},${counter/10})`;
                if(counter >= 10){
                    counter = 10;
                }else{
                counter++;
                }
            }
            else if(e.type == 'mouseleave'){
                div.style.backgroundColor = `rgba(${RGBColors},${RGBColors2},${RGBColors3},${counter/10})`;
            }
            
        }
    }
};
display();

