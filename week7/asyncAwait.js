//timer

function f1() {
  console.log("I am inside f1");
}

function f2() {
  console.log("I am inside f2");
}

function f3() {
  console.log("I am inside f3");
}

console.log("I am before set time out");
//f1();
setTimeout(f2, 1000);
setTimeout(f3, 100);
setTimeout(f1, 100);
console.log("I am after set time out");

//interval

let intervalId = setInterval(f1, 1000);
clearInterval(intervalId);

//asyncAwait

function f4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

//setTimeout(functionality, delay)

// let isReady = f4();
// console.log(isReady);

//async and await

let result = async () => {
  let isReady = await f4();
  console.log(isReady);
};

result();
