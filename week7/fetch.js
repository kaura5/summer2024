//query
function init() {
  //fetch data
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      //first: always check if response was ok
      //second: convert/extract the data from response object
      //.json()
      //.tex() for css, html
      //.blob() for bionary
      return res.json();
    })
    .then((data) => {
      console.log(data);
      //print it on the page
      //call a function which is doing so
      apendUsers(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function apendUsers(data) {
  let teamList = document.getElementById("team");
  let df = new DocumentFragment();
  data.forEach(function (item) {
    //create a li
    let teamMate = document.createElement("li");
    teamMate.textContent = item.name;
    df.append(teamMate);
  });
  teamList.append(df);
}
window.addEventListener("DOMContentLoaded", init);
