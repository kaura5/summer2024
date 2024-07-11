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

      return Promise.all([res.clone().json(), res.blob()]);
    })
    .then(([jsonData, blobData]) => {
      console.log(`JSON Data:`, jsonData);

      console.log(`Blob Data:`, blobData);
    })

    // .then((data) => {
    //     console.log(data);
    //     let cocktailName = document.getElementById ("cocktailName");
    //     let df = new DocumentFragment();

    //     data.drinks.forEach(drink => {
    //         console.log(drink.strDrink);
    //         cocktailName.textContent = `${drink.strDrink}`;
    //         df.append(cocktailName);
    //     });

    //     cocktailName.innerHTML = "";
    //     cocktailName.append(df);
    // })
    .catch((err) => {
      console.log(err);
    });
}

// function init() {
//     let cards = document.querySelector(".cards");

//     let df = new DocumentFragment();

//     data.results.forEach(function (drink) {
//       let card = document.createElement("div");
//       card.classList.add("card");
//       let cardInfo = cardItem(drink);

//       card.innerHTML = cardInfo;

//       df.append(card);
//     });

//     cards.append(df);
//   }
//   window.addEventListener("DOMContentLoaded", init);
