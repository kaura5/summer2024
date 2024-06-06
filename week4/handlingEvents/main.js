let firstItem = document.getElementById("first");
let price = firstItem.getAttribute("data-price");
console.log(price);
firstItem.setAttribute("data-price", "10.22");
let profile = document.createElement("img");
//profile.setAttribute("src", item.src);

firstItem.addEventListener("click", addBorder);

// document.getElementById("four").addEventListener("click", addBorder);

function addBorder(ev) {
  ev.stopPropagation(); //stop the bubbling
  ev.stopImmediatePropagation(); //stop the future event listeners
  console.log(ev.target);
  ev.target.style.border = "2px solid black";
}

firstItem.addEventListener("click", addFontWeight);
let listWrapper = document.querySelector(".parentDiv ul");
let parentDiv = document.querySelector(".parentDiv");

listWrapper.addEventListener("click", addHighlight);
parentDiv.addEventListener("click", addFontColor);

function addHighlight(ev) {
  ev.target.style.backgroundColor = "gold";
}

function addFontColor(ev) {
  ev.target.style.color = "red";
}

function addFontWeight(ev) {
  ev.target.style.fontWeight = "bold";
}

//stoping default behaviour

let a = document.querySelector("a");

a.addEventListener("click", doSomething);

function doSomething(ev) {
  //   ev.preventDefault();
  console.log("Link clicked");
  //control what ever you want to do
}

//DOMContentLoaded: tells if HTML has been loaded and parsed
//load: tell you if all html, css, js, fonts, img
