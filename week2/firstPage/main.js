console.log("worked");
console.log(data);
//elementNode
//textNode
//documentFragment node

//how to grab items from DOM
//1. querySelector
//2. querySelectorAll
//3. getElementById

console.log(window);
let list = document.querySelector("li");
//let list = document.querySelector("#one")
//.- if its a class
//#- if its an id
console.log(list);

let list2 = document.querySelectorAll("li");
console.log(list2[1]);

let list3 = document.getElementById("one");
console.log(list3);

//how to create a new element
let h3 = document.createElement("h3");
h3.textContent = "Hello from JS";

//adding to DOM = appending
let main = document.querySelector("main");
main.append(h3);

//task: add a paragraph as a last child of section in our dom

//1. create a para
let para = document.createElement("p");
para.textContent = "I am first para";

//2. grab the section
let section = document.getElementById("two");
//3. append the para to section
section.append(para);

//task: grab the data and print out only the names as para's

//loop over data
//create a para
//assign the value of the name
//append it to main

let df = new DocumentFragment();
for (let i = 0; i < data.length; i++) {
  let personName = document.createElement("p");
  personName.textContent = data[i].name;
  df.append(personName);
}
main.append(df);
