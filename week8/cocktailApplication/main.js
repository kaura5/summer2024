(() => {
  document.getElementById("findButton").addEventListener("click", searchHandle);
})();

let inputError = document.getElementById("inputError");

function searchHandle(ev) {
  ev.preventDefault();
  console.log("nameFind function triggered");
  inputError.textContent = ``;
  userInput = document.getElementById("cocktailInput").value.trim();
  document.getElementById("cocktailInput").value = "";
  if (userInput) {
    findCocktail(userInput);
  } else {
    inputError.textContent = "Please enter a real cocktail name.";
  }
}

function findCocktail(userInput) {
  console.log("fetching from API");
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something ain't right dog");
      }
      return res.json();
      //   return Promise.all([res.clone().json(), res.blob()]);
    })
    // .then(([jsonData, blobData]) => {
    //   console.log(`JSON Data:`, jsonData);

    //   console.log(`Blob Data:`, blobData);
    //   //your data
    //   //loop over the data
    //   //time to display an image => call another function imageFetcher(item.strDrinkThumb)
    //   // (will fetch and convert to blob and return a url)
    // })

    .then((data) => {
      console.log(data);
      let cocktailName = document.querySelector(".card");
      let df = new DocumentFragment();

      data.drinks.forEach((drink) => {
        console.log(drink.strDrink);
        // let textNode = document.createTextNode(drink.strDrink);
        // cocktailName.append(textNode);
        // cocktailName.textContent = `${drink.strDrink}`;
        let drinkName = document.createElement("h2");
        drinkName.className = "cocktailName";
        drinkName.textContent = drink.strDrink;
        df.append(drinkName);
      });

      cocktailName.innerHTML = "";
      cocktailName.append(df);
    })
    .catch((err) => {
      console.log(err);
    });
}
