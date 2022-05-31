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
let emaill = "enide@gmail.com"

let resul = emaill.lastIndexOf("n")
console.log(resul);

// 2.SLICE
let results = email.slice(2,8)
console.log(results);

// 3.SUBSTRING-2nd argument is the last character we want to go to witout indexing eg 4 to mean d,2 to mean n
let resultss = emaill.substring(2,10)
// in ths case the 2 is in terms of index and 10 is in terms of literal counting
console.log(resultss);

// 4.REPLACE
// first argument is the initial value and the second one is what is yo replace the first
let rel = emaill.replace("enid","nyatichi")
console.log(rel);


// NUMBERS
let radius = 28;
const pi = 3.142
let circumference = 2*pi*radius
console.log(circumference);

// Math operators
// +, -,*,/,**,%
console.log(10/2)

let res = radius % 3
console.log(res);

let radiuss = 7
area = pi*radiuss**2
console.log(area);

// ORDER OF OPERATION
// BIDMAS
let math = 5*(10-3)**2
console.log(math);
// ADDITION
let likes = 10
// likes = likes + 1
// The fuction below automatically adds 1 to the initial value eg 10+1
likes++

console.log(likes);
// SUBTRACTION
// The fuction below automatically subtracts 1 to the initial value 10 - 1
likes --
console.log(likes);
// ADDITION
// The fuction below automatically adds  a value to the initial value eg 30+20
let loves = 20
loves += 30
console.log(loves);
// SUBTRACTION
// The fuction below automatically subtracts a value to the initial value eg 10- 2
let hate = 10
hate -=2
console.log(hate);

// MULTIPLICATION
// // The fuction below automatically multiplies a value to the initial value eg 40*50
let mon = 40
mon *= 50
console.log(mon);

//DIVISION

let hat = 50
hat /= 5
console.log(hat);

// NAN-Not a number 
let lol = (5/"enid")
console.log(lol);
// The result  is NaN -not a number

// CONCATINATING NUMBERS 
let views = 10
let blogs = " The blog has " + views + " views"
console.log(blogs);

// TEMPLATE STRING
const title = " The River and The Source"
const author = " Margret Ogolla"
const reads = 10000

// Concatenation way 
sult = "The book called" + title + " by" + author + " has" + reads + " reads"
console.log(sult);

// template string /literal way
sults = `The book called ${title} by ${author} has ${reads} reads. `
console.log(sults);

// Creating html templates
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This book has ${reads} reads </span>`
console.log(html);

// ARRAYS- Used to store a collection of stuff , lists etc
let ninjas = ["Enid", "Israel","Norbert","Junior", "Mbogo"]
console.log(ninjas);
// Javascript is a zero based language hence indexing starts from zero
console.log(ninjas[1]);
// Replacing a value 
ninjas[0] = "Nyatichi"
console.log(ninjas);
 let ages = [20,30,35,56,78]
 console.log(ages[3]);

 let random = ["Dine", "Tichi",55,90]
 console.log(random);
//  ARRAY PROPERTIES
// .length
console.log(random.length)

// ARRAY METHODS
// .join()-doesn't alter the original value
let naijas = ["Enid", "Israel","Norbert","Junior", "Mbogo"]
console.log(naijas.join(","));
console.log(naijas.join("-"));
console.log(naijas);
//.indexOf
let nai = naijas.indexOf("Mbogo")
console.log(nai);
// .concat-doen't alter the original value
let nie = ninjas.concat(["Christa","Don","Ably"])
console.log(nie);
console.log(ninjas);
// .push-it alters the original value by adding the pushed value
let nee = ninjas.push("Junior")
console.log(nee);
console.log(ninjas);
// .pop -alters the orinal value by removing the end value 
let nii = ninjas.pop()
console.log(ninjas);
// to find the vvalue that was popped we console log nii
console.log(nii); 

//UNDEFINED
let agee;
console.log(agee, agee+3, `the age is ${agee}`);
// A value is considered to be undefined when it has no value assigned to it.The browser then gives it a value undefined.
// NULL-value intentionally unassigned
let ag = null
console.log(ag, ag+3, `the age is ${ag}`);

// BOOLEANS-true,false
console.log(true,false);









