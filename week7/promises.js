let p = new Promise(function (resolve, reject) {
  let age = 25;
  //   resolve(age);
  reject("No");
});

p.then((data) => {
  console.log(data);
  //return of your then will be argument of your next then function
  return data * 2;
})
  .then((doubleData) => {
    console.log(doubleData);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(function () {
    console.log("I am always going to run");
  });
//   .finally((data)=>{

//   })
// .fianlly(()=>{

// })

//if resolved it will go to the next then function
//if rejected it will go the catch function
//finally will run every single time (resolved + rejected)

function f1(data) {
  //use data argument
}
