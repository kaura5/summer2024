function init() {
  let cards = document.querySelector(".cards");

  df = new DocumentFragment();

  data.results.forEach(function (item) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardInfo = `
    <div class="product">
    <img src=${item.thumbnail} alt=${item.title}>
    </div>
        <p>$${item.price}.00</p>
        <h2>${item.title}</h2>
    </div>
    `;

    card.innerHTML = cardInfo;

    df.append(card);
  });

  cards.append(df);
}
window.addEventListener("DOMContentLoaded", init);
