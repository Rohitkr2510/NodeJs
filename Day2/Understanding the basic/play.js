// // var name = "Max";
// // var age = 29;
// // var hasHobbies = true;

// // define a function
// function summarizeUser(userName , userAge, userHasHobby) {
//     return ("Name is " + userName + " age is " + userAge + ' and the user has hobbies: ' + userHasHobby);
// }

// // console.log(summarizeUser(name, age, hasHobbies));

// // var is out datad
// const  name = "Max";
// let age = 29;
// const  hasHobbies = true;

// age = 30;
// console.log(summarizeUser(name, age, hasHobbies));


// // arrow function

// const arrowFunction = (name , userAge, userHasHobby) => {
//     return (
//         "Name is " + 
//         name + 
//         ", age is " + 
//         userAge + 
//         " and the user has hobbies: " + 
//         userHasHobby
//     )

//     }
//     console.log(arrowFunction(name, age, hasHobbies));
// // function in one line 
// const addOne = a => a+1; /// function only contain one return statement
// // if function has not argument
// const addRandome = () => 1 + 2;
// console.log(addOne(2));
// console.log(addRandome());


// // Data structure in the javascript
const person = {
    name : 'Max',
    age : 29, 
    greet() {
        console.log("Hi, I am " + this.name);
    }
}

// console.log(person.name);
// console.log(person.greet());

//Array in javascript

const hobbies = ['Sports', 'Cokking'];
// for(let hobby of hobbies) 
// {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// Array & Object reference type
// hobbies.push("programming");
// console.log(hobbies);

// spread and rest operator

// spread operator
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const copiedPerson = {...person}
// console.log(copiedPerson);

// //rest operator

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1,2,3,4));




// Destructuring

// destructuring in object
const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name , age} = person;
console.log(name, age);


// Destructuring in array
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

