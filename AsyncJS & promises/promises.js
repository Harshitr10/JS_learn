 setTimeout(()=>{
    document.body.styles.backgroundColor = 'red';
    setTimeout(()=>{
        document.body.styles.backgroundColor = 'orange';
        setTimeout(()=>{
            document.body.styles.backgroundColor = 'orange';
         },1000)
     },1000)
 },1000)

// here each command will be executed one second after the other
