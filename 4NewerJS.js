// default params


// function rollDie(numSides)
// {
//     if(numSides === undefined)
//     {
//         numSides =6;
//     }
//     return math.floor(math.random()* numSides)+1;
// }

function rollDie(numSides=6)
{
    return math.floor(math.random()* numSides)+1;
}

// the function will use default value 6 if no other value is passedd

function  print(msg="hey",person)
{
    console.log(`${msg}, ${person}!`)
}

// if we pass the value of person and msg remains undefined then JS cant detect it by itself so if yu have two parameters in your 
//  functin and you want to make one of them default make the second on default



//SPREAD syntax

Math.max(1,2,3,4,5,66,7,10)
// return 66

const num = [1,2,3,4,5,66,7,10]

Math.max(num)
// undefined

Math.max(...num)
// passes  individual values in the function

 console.log("hello", "harshit", "rai")
 // returns hello harshit rai

 console.log(num)
 //  undefined or prints entire array

 console.log(...num)
 // prints each element of the array

 console.log(...'hello')
 // some as console.log('h,'e','l','l','o')
 //  prints h e l l o



 // SPREAD with Array literals

 const arr1 = ["ME","MY DREAMS","my THOUGHTS"]
 const arr2 = ["obstacles","insecurities"]

 const arr3 = [...arr1,...arr2]
 const arr4= [...arr2,...arr1]
const arr5 = ["MY LIFE",...arr1,...arr2]

 
// spread in object literals

const feline =
{
    legs:4,
    family:'Felidae'
};

const canine =
{
    isFurry: true,
    family : 'Caninae'
};

// const catdog ={...feline,...canine};
// result
// legs:4,
// isFurry: true,
// family : 'Caninae'

// const catdog ={...canine,...feline};
// result
// legs:4,
// isFurry: true,
// family : 'Caninae'

// const catdog ={...canine,...feline,family:'raj'};
// result
// legs:4,
// isFurry: true,
// family : 'raj'


// If there are overlapping attributes then then attribute tha comes at last is preffered





// REACT usage

const datafromform =
{
    name : 'Harshit Rai',
    email : '1012harshit@gmail.com',
   }

const data= {
    ...datafromform,
  
admin:false


}
const runner = "ADITYA"
const race = {
    ...runner,
}
// 0: A
//
// REACT prams
// looks like spread but its  not

function sum(...nums )
{
    return nums.reduce((total,el) => total +el )  
}
sum(1,2,3,4)


// DESTRUCTURING


const scores = [92931,899341,888336,7723223,234,34423,32234,4223,4234]
const highScore= scores[0]
const second = scores[1]

const [gold, silver,bronze,...everyoneElse]= skore;


// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A' } = user2;

// ===================
// PARAM DESTRUCTURING
// ===================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
 





