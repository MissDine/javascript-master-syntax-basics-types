//Variables-Storage container for our values eg
let age = 25;
let year = 2022

console.log(age, year);
age = 30;
console.log(age);
//Please note that you cannot start a word with a  number - however u can use all the other characters like letters,and the rest.

// Data types
// 1.Numbers- 1,2,4,100,0.3,22.9 etc
// 2.String-"name" "enid","hello" etc
// 3.Boolean-true or false
// 4.Null-Explitly set a  variable has no value eg age = null
// 5.Undefined-a value that is automatically given to values that have not yet been defined.
// 6.Object-(EVERYTHING IN JS IS AN OBJECT)Complex data structures-Arrays,dates literals etc eg- {name:enid,age:25}etc
// 7.Symbol-Used with objects


//STRINGS
console.log("Israel");

let email = "enidnyatichi1212@gmail.com"
console.log(email);
// String concatenation-joining two strings together
let firstName = "Enid"
let lastName =" Nyatichi"
let fullName = firstName + lastName
console.log(fullName);

// Getting characters
console.log(fullName[0]);
console.log(firstName[3]);
// String length
console.log(fullName.length);
console.log(lastName.length);
console.log(firstName.length);

// String methods
console.log(fullName.toUpperCase());
console.log(lastName.toLowerCase());
let result = fullName.toUpperCase();
console.log(result, fullName);


let index = email.indexOf("@")
console.log(index);

let indexx = fullName.indexOf("N")
console.log(indexx);

// Common string methods
// 1.INDEXOF
// We can say that methods are more of functions and the only difference is that methods are  attached to objects using the dot notation eg name.toUpperCase()
let emaill = "enid@gmail.com"

let resul = emaill.lastIndexOf("n")
console.log(resul);

// 2.SLICE
let results = email.slice(2,8)
console.log(results);
