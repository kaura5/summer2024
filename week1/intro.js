//var, let and const
var x; //declare
var x = 2; //declare plus assign

const ageC = 30; //number

console.log(ageC);
//ageC = 40; // is wrong
//console.log(ageC);
console.log(ageV);
// console.log(ageL);

var ageV = 20;
let ageL = 25;

console.log(ageV);
console.log(ageL);

//data Types: Primitive, objects
//numbers, strings, boolean, undefined, null, symbol, bigint
//20, 30, 35.5
//"20", "day"

//control flow
if (x > 3) {
  //this will happen
  console.log("x is greater than 3");
} else {
  console.log("will this always run");
}

let temp = 26;
if (temp > 30) {
  console.log("hot day");
} else if (temp > 20) {
  console.log("its a pleasant day");
} else {
  console.log("it is a chilli day");
}

//=, ==, ===
//assigning, comparing a value, comparing a value plus the data type
let y = 2;

if (x == y) {
  console.log("x and y are double equal");
}

if (x === y) {
  console.log("x and y are triple equal");
}

//compound statements
//AND, OR
// &&, ||
if (x == 5) {
  if (y == 10) {
    //do something
  }
}

if (x == 5 && y == 10) {
  //do something
}

if (x == 5 || y == 10) {
  //do something
}

//ternanry statement
//condition ? true : false

x == 5 ? console.log("x is 5") : console.log("x is not 5");

////switch statement
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("its start of working week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("its a regular working day");
    break;
  case "Friday":
    console.log("its almost over");
    break;
  default:
    console.log("its a weekend");
}
greetings();
//functions

//it is a series of commands bundled together
// Math opertors: +, -, *, /

//declaration
function greetings() {
  console.log("HEllo");
}

//function expression
const z = function () {};

function toDoAddition(num1 = 0, num2 = 0) {
  //   let num1 = 5;
  //   let num2 = 10;
  console.log(num1);
  console.log(num2);
  sum = num1 + num2;
  //console.log(sum);
  return sum; //20 +40

  sum2 = sum + num1; //60 + 20

  return sum2;
}

toDoAddition(10, 10);
toDoAddition(20);

//scope: global and local scope
let funcReturn = toDoAddition(20, 40);
console.log(funcReturn);

//if statements or validation
//provide default arguments

//arrow functions
let funcReturn2 = (num1 = 4, num2 = 5) => num1 + num2;
let funcReturn3 = (num1 = 4, num2 = 5) => {
  return num1 + num2;
};

//arrays and objects
let cities = ["Ottawa", "Toronto", "Perth"];

let person = {
  firstName: "John",
  lastName: "Smith",
  isStudent: false,
};

console.log(person.lastName);
console.log(person["firstName"]);

console.log(cities[1]);
console.log(cities.length);

cities[1] = "Boston";
console.log(cities);

let students = ["Jay", "Zoe", "Sophia", "Chris", "Sammy"];

//Pop, Push, shift and unshift
//splice and slice

//add a new value at the end of the array : push

// students.push("Eddie");
// console.log(students);

// //remove the last value
// let lastStudent = students.pop();
// console.log(students);
// console.log(lastStudent);

// //add a new student at the beginning : unshift
// students.unshift("Emma");
// console.log(students);

//shift

//remove = slice
//add = splice
//The slice method needs a starting index and an ending point. The starting index is a number for the position of the first element to remove. The second number provided is the index to stop before.

//If no ending number is provided then it will remove from the starting position to the end of the Array.

//The slice method does NOT change the original array. It returns a copy of the selected items.

let newList = students.slice(2, 4);
console.log(newList);

//The splice method can be used to only insert new elements or to remove elements and replace them with a new series of elements. It takes a starting position as the first argument. The second argument is how many elements to remove, which may be zero.
//The third and all subsequent arguments will be inserted at the starting index. The splice method will change the original array.
students.splice(1, 2);
console.log(students);
