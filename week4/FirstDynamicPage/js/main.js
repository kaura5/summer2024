import { cardItem } from "./card.js";
import { data } from "./data.js";
function init() {
  let cards = document.querySelector(".cards");

  let df = new DocumentFragment();

  data.results.forEach(function (item) {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardInfo = cardItem(item);

    card.innerHTML = cardInfo;

    df.append(card);
  });

  cards.append(df);
}
window.addEventListener("DOMContentLoaded", init);
