//how to grab an element from DOM
//querySelector, querySelectorAll, getElementById

//grab h1 from the page and save it in variable called pageHeader

let pageHeader = document.querySelector("h1");
let pageHeader1 = document.querySelector("#head");
let pageHeader2 = document.getElementById("head");
console.log(pageHeader);
//change the h1 content to "I am new to this webpage"

pageHeader.textContent = "I am new to this webpage";

//create a new para and add it after the ul

//steps: create a new element node, add it to a variable, add a text node to that variable, insert it where ever you want

let para = document.createElement("p");
para.textContent = "I am a new para added by JS.";

let main = document.querySelector("main");
main.append(para);

let data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementina Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];
let df = new DocumentFragment();
data.forEach(function (item) {
  let namePerson = document.createElement("p");
  namePerson.textContent = item.name;
  df.append(namePerson);
});

//HTML String Approach

main.append(df);

// data.forEach(function (item) {
let para2 = `<p>I am a para from string approach</p>`;
//   });
main.append(para2);

//innerHTML or setHTML
// main.innerHTML = para2;
document.querySelector("footer").append(para);

//grab first li and add a class name "firtItem" to it

document.querySelector("li").classList.add("firtItem");
//remove class name "firtItem"
document.querySelector("li").classList.remove("firtItem");
//replace class name "firstItem" with secondItem
document.querySelector("li").classList.replace("firtItem", "secondItem");

//toggle class
//want to hide or show an element
document.querySelector("li").classList.toggle("firtItem");
