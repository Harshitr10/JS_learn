 const btn = document.querySelector('#v2');
 btn.onclick = function(){
    console.log ("You  clicked me ");
    console.log("I Hope It works!!")
 }

 function scream()
    {
        console.log("AAAAHHHH");
        console.log("Stop Touching  Me");
    }

    btn.onmouseenter = scream;