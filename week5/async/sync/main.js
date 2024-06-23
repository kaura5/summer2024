console.log("item 1");
//somethingv1 to run after 0 sec , go to secondary list
//something to run after 2 sec
function f2() {
  //return promise
}

async function something() {
  let x = await f2();
  console.log(x);
}

something();

console.log("item 2");

// somethingv2 to run after 2 sec
console.log("item 3"); //took 1 sec

//syncronus
//item 1
//item2
//item3
//print value of x

// asyc
//item 1
//print value of x
//item 2
//item 3
