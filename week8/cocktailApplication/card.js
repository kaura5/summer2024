function init() {
    let cards = document.querySelector(".cards");
  
    let df = new DocumentFragment();
  
    data.drinks.forEach(function (drink) {
      let card = document.createElement("div");
      card.classList.add("card");
      let cardInfo = cardItem(item);
  
      card.innerHTML = cardInfo;
  
      df.append(card);
    });
  
    cards.append(df);
  }
  window.addEventListener("DOMContentLoaded", init);
  