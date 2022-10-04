document.querySelector('button');
const makeRandColor=()=>{
const r = Math.floor(Math.floor(Math.random()* 255));
const g = Math.floor(Math.floor(Math.random()* 255));
const b = Math.floor(Math.floor(Math.random()* 255));
const newclr =`rgb(${r},${g},${b})`;
document.body.style.backgroundColor=newclr;
h1.innerText = newclr;

}

// this.js

// we have number of buttons that would respond by changing colors when clicked
const buttons = document.querySelector('button');
for(let button of buttons)
{
button.addEventListner('click',colorize)
//     console.log('Clicked');
//     button.style.backgroundColor = makeRandColor()
// })

}

function colorize() {
    | this.style.backgroundColor = makeRandColor()

}