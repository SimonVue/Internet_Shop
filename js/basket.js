'use strict';

const basketCounterEl = document.querySelector('.header__cart span');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEl = document.querySelector('.basket');

document.querySelector('.header__cart').addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});

const basket = {}

document.querySelector('.products__card').addEventListener('click', event => {
  if (!event.target.closest('.products__button')) {
    return;
  }
  const cardItem = event.target.closest('.card');
  const id = +cardItem.dataset.id;
  const name = cardItem.dataset.name;
  const price = +cardItem.dataset.price;

  addToCart(id, name, price);
});

function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {id, name, price, count: 0};
  }
  basket[id].count++;
  basketCounterEl.textContent = getTotalBasketCount().toString();
  basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
  renderProductInBasket(id);
}

function getTotalBasketCount() {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count, 0); //- короткий вариант

  // const productsArr = Object.values(basket); // длинный вариант
  // let count = 0;
  // for (const product of productsArr) {
  // 	count += product.count;
  // }
  // return count;
}

function getTotalBasketPrice() {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
  const basketRowEl = basketEl.querySelector(`
      .basketRow[data-productId="${id}"]`);
  if (!basketRowEl) {
    renderNewProductInBasket(id);
    return;
  }
  basketRowEl.querySelector('.productCount').textContent = basket[id].count;
  basketRowEl.querySelector('.productTotalRow').textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
  const productRow = `
			<div class="basketRow" data-productId="${productId}">
				<div>${basket[productId].name}</div>
				<div>
					<span class="productCount">${basket[productId].count}</span> шт.
				</div>
				<div>$${basket[productId].price}</div>
				<div>
					$<span class="productTotalRow">${basket[productId].price * basket[productId].count}</span>
				</div>
			</div>
		`;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
