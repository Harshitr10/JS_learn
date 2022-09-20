
// getElementById
const banner = document.getElementById('banner');

// document.getElementsByTagName
const  all_images = document.getElementsByTagName('img')
// all images in form of an array and you can extract each one of them

//These are not actually strings or text but in all they are objects
for(let img of all_images)
{
 
    console.log(img.src)
    
}

// document.querySelector('h1')
// it always selects the first element h1 you can select all as an array using document.querySelectorAll

document.querySelector('a').title
const firstLink  = document.querySelector('a')
firstLink.href//same
firstLink.getAttribute('href');//same

firstLink.getAttribute('title')
firstLink.setAttribute('href','http://www.google.com')

//changing styles

const allLinks = document.querySelector('a');
for(let links of allLinks)
{
    links.style.color ='rgb(0,108,134)'
    links.style.textDecorationColor = 'magenta';
    links.style.textDecorationStyle ='wavy';
}


// all changes are applied in the code as inline styles
window.getComputedStyle(h1).color
window.getComputedStyle(h1).fontSize
window.getComputedStyle(h1).fontFamily
window.getComputedStyle(h1).margin
// get all CSS style applied at tht element



