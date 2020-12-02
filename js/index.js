// Event 1 - Mouse enter - change intro background w/ mouseover
const intro = document.querySelector('.intro')
intro.addEventListener('mouseenter', function(event){
    intro.style.backgroundColor = 'BlanchedAlmond';
})
intro.addEventListener('mouseleave', (event)=>{
    intro.style.backgroundColor = 'white';
})

// Event 2 - KeyDown - change LetsGO to red on esc  key
const allH2 = Array.from(document.querySelectorAll('h2'))
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape'){
        allH2[1].style.color = 'red';
    }
})

//Event 3 - Wheel - Zoom in / out on Fun Bus
const logo = document.querySelector('.logo-heading');
let scale = 1;
logo.onwheel = zoom;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    logo.style.transform = `scale(${scale})`;
  }

//Event 4 - load - change Fun Bus to blue
window.addEventListener('load', (event)=>{
    logo.style.color = ('blue');
})

//Event 5 - 
document.addEventListener('keyup', (event)=>{
    if(event.key === 'Escape'){
        allH2[1].style.color = 'blue'
    }
})

//Event 6 & 7 - onmouseDown & on mouseUp on Adventure Awaits color red to blue

allH2[2].addEventListener('mousedown',(event)=>{
    allH2[2].style.color = 'red'
})
allH2[2].addEventListener('mouseup',(event)=>{
    allH2[2].style.color = 'blue'
})
//Event 8 - dblclick changes home to green on dblclick
const allLinks = Array.from(document.querySelectorAll('.nav-link'))
allLinks[0].addEventListener('dblclick',(event)=>{
    allLinks[0].style.color = 'green'
})
console.log(allH2[1]);
//Event 9 - mouse over - Pick your Destination turns red then change to blue
allH2[3].addEventListener('mouseover', (event) =>{
    allH2[3].style.color = 'red';
})

//Event 10 - mouse out
allH2[3].addEventListener('mouseout', (event) =>{
    allH2[3].style.color = 'blue';
})