const person ={
    firstName: 'Mick',
    lastName: 'Jagger'
}
const kitchenSink =
{
favnum: 788,
isFunny: true,
color: ['red','orange']
}
person["lastName"];
kitchenSink["color"];
person.firstName;
// person."firstName"; error
// every key in JS is a string 
const years =
{1999:"GOOD",2020 : "BAD"
}
years["1999"];
years["2020"];
years[1999];
const dumbdum=
{
    true:"dat",
    null:"adeddsd",
}
// note that null and true being a  keyword dont cause problem as they get converted into a string
dumbdum["true"];
dumbdum["null"];
person.firstName;
person['firstName']
person[firstName]
birthYear=2020;
// years["birthyear"]; error
years[birthYear];
// this is the advantage of using square barckets
const midtermms =
{
    danielle: 96,
    thomas: 78
}
midtermms.thomas=79;
midtermms.thomas='C+'
midtermms['danielle']='A'
midtermms.ezra='B+'
midtermms["antonioo"]='A'

// NESTING ARRAYS AND OBJECTS
const comments = [
    {username: 'Tammy', text:'lololol',votes:9},
    {username:'Fishboy',text:'glubglub',votes:1237}
]

comments[1].text;
// gives glubglub                               