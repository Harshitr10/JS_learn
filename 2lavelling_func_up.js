// function expressions


// function add(x,y)
// {
//     return x+y;

// }

const add=  function (x,y)
{
    return x+y;
}

// Higher order  function
function callTwice(func)
{
    func();
    func();
}

// callTwice(2); error as 2 is not a function

function rollDice()
{
    const roll = Math.floor(Math.randoom()*6)+1;
    console.log(roll);
}


// RETURNING FUNCTION
function isbetweeen(num)
{
    return num>=100 && num<=100;
}

function makeBetweenFunc(min,max)
{
  return function (num)
  {
    return num>=min && num<= max;
  }
}


  const lucky = makeBetweenFunc(100,200)
  lucky(90);


// simply a fuction accessed  by adding property in an object
  //MATHODS

  const myMathod=
  {
    PI: 3.14,
    square: function(num)// also  written as square(num)
    {
        return num*num;
    },
    cube: function(num)// also written as cube(num)
    {
        return num*num*num;// rum ** 3----> num powerr 3
    }
  }

  myMathod.cube(3);
  myMathod["cube"](3);

  //THIS Keyword
  const cat=
  {
    name : 'Blue Steele',
    color:  'grey',
    meow()
    {
        console.log(`${this.name} says MEOWWW`);
    }

  }

//the function this depends upon invocation context its used in


// TRY and CATCH inn javascript
try{
    hello.toUpperCase();
}catch{
    console.log("Error!!!")
}

function yell(msg){
try 
{
    console.log(msg.toUpperCase().repeat(3));
}
catch(e)
{
    console.log("Please pass a string next time")
}
}