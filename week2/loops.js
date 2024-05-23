//week 2
let pets = {
  animals: [
    { dogs: ["Woody", "Roxy", "Rane"] },
    { cats: ["Willow", "Jesse Pink-kitty", "Bob"] },
  ],
};

let movie = {
  original_title: "The Marvels",
  cast: ["Brie Larson", "Iman", "Gary"],
  director: "Nia",
};

//for loop
//from 0, we want to run 5 times
// for(initialization; condition; increment/decrement){
//     //
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

console.log(pets.animals.length);
for (let i = 0; i <= pets.animals.length - 1; i++) {
  console.log(pets.animals[i]);
}

//Prctice: loop through the numbers and gave me the total.
let number = [25, 20, 30, 40];

//for in loop

for (let prop in movie) {
  //prop will be index (array)
  //prop will be key (object)
  console.log(movie[prop]);
}
for (let prop in movie.cast) {
  console.log(prop);
}

//for of loop
//prop will be item values in an array
for (let prop of movie.cast) {
  console.log(prop);
}

let data = [
  {
    name: "Kevin Colon",
    email: "dignissim@google.org",
    phone: "1-544-575-2363",
    address: "Ap #931-7954 Integer Street",
    postalZip: "0174",
    country: "Indonesia",
  },
  {
    name: "Nelle Noel",
    email: "iaculis.quis@yahoo.couk",
    phone: "(514) 786-6275",
    address: "788-3653 Laoreet Av.",
    postalZip: "3756-3714",
    country: "South Africa",
  },
  {
    name: "Abbot Blackwell",
    email: "tristique.pharetra@icloud.couk",
    phone: "(440) 774-9618",
    address: "Ap #979-410 Mauris Rd.",
    postalZip: "867663",
    country: "Germany",
  },
  {
    name: "Brady Santos",
    email: "a@google.edu",
    phone: "1-511-383-1684",
    address: "821-5179 Ullamcorper Ave",
    postalZip: "48648",
    country: "Pakistan",
  },
  {
    name: "Jordan Ramos",
    email: "aliquam.ornare.libero@yahoo.couk",
    phone: "1-380-391-5234",
    address: "P.O. Box 639, 218 A Street",
    postalZip: "693165",
    country: "Vietnam",
  },
];

//task
//loop over the data and print the name in all caps
for (let prop of data) {
  console.log(prop.name.toUpperCase());
}
//loop over the data and print the full address (address + postalZip + country)
for (let prop of data) {
  //two ways to do string concatenation
  //let fullAddress = prop.address + ", " + prop.postalZip + ", " + prop.country;
  let fullAddress = `${prop.address}, ${prop.postalZip}, ${prop.country}`;
  console.log(fullAddress);
}
//loop over the data and print the full object if person is from "Vietnam"
