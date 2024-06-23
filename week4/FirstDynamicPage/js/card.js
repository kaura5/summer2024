export function cardItem(item) {
  let cardInfo = `
    <div class="product">
    <img src=${item.thumbnail} alt=${item.title}>
    </div>
        <p>$${item.price}.00</p>
        <h2>${item.title}</h2>
    </div>
    `;
  return cardInfo;
}
