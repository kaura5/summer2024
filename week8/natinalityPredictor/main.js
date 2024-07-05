// window.addEventListener("DOMContentLoaded",init);

// (function f1() {
//   console.log("I am in");
// })();

(() => {
  document.getElementById("findButton").addEventListener("click", handleFind);
})();

function handleFind(ev) {
  ev.preventDefault();
  console.log("here");
  let userInput = document.getElementById("nameInput").value.trim();
  document.getElementById("nameInput").value = "";
  if (userInput) {
    predicNationality(userInput);
  } else {
    //msg for the user to enter a name
  }
}

function predicNationality(userInput) {
  console.log("I am fetching");
  let url = `https://api.nationalize.io/?name=${userInput}`;
  let urld = "https://api.nationalize.io/?name=" + userInput;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let resultDiv = document.getElementById("result");
      let df = new DocumentFragment();
      data.country.forEach(function (item) {
        console.log(item);
        let list = document.createElement("li");

        //probability
        let probabilityPercentage = (item.probability * 100).toFixed(2);
        //country name
        const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
          type: "region",
        });
        let countryName = regionNamesInEnglish.of(item.country_id);
        //user name

        list.textContent = `There is ${probabilityPercentage}% probability that ${userInput} is from ${countryName}.`;
        df.append(list);
      });
      resultDiv.innerHTML = "";
      resultDiv.append(df);
    })
    .catch((err) => {
      console.log(err);
    });
}
