const accountId = 32323;
let name="Tayyab";
var password="Hello";
city="Lahore";
let state;

// Best practice is not to use var variable because of the issue in block scope and functional scope

// numberId = 928323;
// console.log(numberId)  // gives error because it is a constant number

name="Balti"
password="Hey"
city="Skardu"
console.table([name, password, city, state])

occupation = null;
console.log(typeof(occupation));

employe = String(occupation)
console.log(typeof(employe));  // converts null into string

score = "321abc"
updatedScore = Number(score)
console.log(typeof(updatedScore));  // it gives a number type
console.log(updatedScore);  // but actually it converts into not a number data type