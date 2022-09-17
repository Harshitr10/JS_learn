const numbers = [1,2,,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
function print(element){
    console.log(element)
} numbers.forEach(print);

numbers.forEach(function (el){
    console.log(el)
})

for(let el of numbers)
{
    console.log(el);
}
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
movies.forEach(function (movie)
{
    console.log(`${movie.title} - ${movie.score}`/100);
})


// MAP function
const doubles = numbers.map(function(num){
    return num *2;
})

const titles = movies.map(function (movie)
{
    return movie.title.toUpperCase();
})

//ARROW  function
 
const square = (x)=>
{
return x*x;
}

const  sum=(x,y)=>
{
    return x+y;
}
// const  rollDie = () =>
// {
//     return (math.floor((math.random *6)+1));
// }

// implicit arrow function return
const rollDie = () =>(
    math.floor(Math.random() *6)+1
)
//  return is not required in implicit arrow  function but work only if there is only one return statement in the function


// arrow function wrapup

//  const newMovies = movie.map(function (movie)
//  {
//     return `${movie.title} - ${movie.score/10}`
//  })
const newMovies = movies.map((movie)=>
{
    return  `${movie.title} - ${movie.score/10}`
})

// filter mathod

numbers.filter(n => {
    return n < 10
})

 const goodMovies= movies.filter(movie =>{
    return movie.score>80
 })

 const badMovies = movies.filter(m( movie.score<80))

 //  Reduce mathod
total=0;
 const money = [12.20,13,50,19.99,16.33,14.22]
 for(let price of money)
 {
 total += price
 }

 const total  = money.reduce((total,price) =>
 {
    return total +  price
 })

 const  total2 = money . reduce((total,price)=>(total+price))

 // total and total2 are one and the same

 const minPrice = money.reduce((min,price)=>{
    if(price < min)
    return price;
    return min;
 })
