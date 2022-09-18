
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
