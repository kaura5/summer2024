//forEach, //Map, Filter

let beers = ["Corona", "Heineken", "Headstock"];

beers.forEach(function (item, index, arr) {
  //   console.log(item);
  //   console.log(index);
  //   console.log(arr);
  item = item.toUpperCase();
  console.log(item);
  //   arr[index] = item.toUpperCase();
});

// data.forEach(function (item){
//     data.username; //error message . is not an array method
//     username; //error message
//     data[username] //error message
//     item.username //will print username
//     item.username[i] //need to put within a loop
//     item.username.forEach()
// })
// console.log(beers);
//forEach returns undefined

//Map will return n new array

let numbers = [2, 5, 6, 8, 10, 20, 30, 35];
let doubleNumbers = numbers.map(function (item, index, arr) {
  return item * 2;
});
console.log(numbers);
console.log(doubleNumbers);

//if wanted to do square root of all the numbers
let squareRoot = numbers.map(function (item) {
  return Math.sqrt(item);
});

//filter

//if want to create a new array with only even numbers
//loop over it and if number is even push it to new array

let evenNumbers = numbers.filter(function (item, index, arr) {
  return item % 2 === 0;
});

console.log(evenNumbers);
