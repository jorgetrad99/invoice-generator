import Template from './templates/Template.js';
import { getData } from './templates/Products.js';
import './styles/main.styl';

let productsInCart = [];
//Template

(async function App() {
  const productsLayout = await getData();
  //main
  const main = null || document.getElementById('main');
  main.innerHTML = Template();

  //products

  const productsContainer = document.querySelector('.products-container');

  productsContainer.innerHTML = productsLayout;

  const product_container = document.getElementsByClassName('info-product');
  for (let i = 0; i < product_container.length; i++) {
    getSubstractButton(i).onclick = () => {
      if (getCounter(i).innerHTML > 0) {
        substractingByOneToCounter(getCounter(i));
        /* substractingByOneToCounter(getCartCounter()); */
      } else {
        alert('No se aceptan números negativos');
      }
    };
    getAddButton(i).onclick = () => {
      addingByOneToCounter(getCounter(i));
      /* addingByOneToCounter(getCartCounter()); */
    };

    getAddToCartButton(i).onclick = () => {
      addingToCounterCart(getCounter(i));
      /* addingByOneToCounterCart(getCounter(i)); */
      /* addingByOneToCounterCart(getCartCounter()); */
    };
  }

  console.log(getCartButton());
  getCartButton().onclick = () => {
    console.log(productsInCart);
  };
})();

function getSubstractButton(i) {
  const product_container = document.getElementsByClassName('info-product');
  return product_container[i].children[1].children[0].children[0];
}

function getAddToCartButton(i) {
  const button = document.getElementsByClassName('addToCart-button');
  return button[i];
}

function getAddButton(i) {
  const product_container = document.getElementsByClassName('info-product');
  return product_container[i].children[1].children[0].children[2];
}

function getCartButton() {
  const cart_counter = document.getElementsByClassName('cart-counter');
  return cart_counter[0];
}

function getCartCounter() {
  const cart_counter = document.getElementsByClassName('cart-counter');
  return cart_counter[0].children[1];
}

function getCounter(i) {
  const product_container = document.getElementsByClassName('info-product');
  return product_container[i].children[1].children[0].children[1];
}

function addingByOneToCounter(counter) {
  counter.innerHTML = parseInt(counter.textContent) + 1;
}

function addingToCounterCart(counter) {
  if (counter.textContent > 0) {
    getCartCounter().innerHTML =
      parseInt(getCartCounter().innerHTML) + parseInt(counter.textContent);

    productsInCart.push({
      name: counter.parentElement.parentElement.parentElement.children[0]
        .children[0].textContent,
      price:
        counter.parentElement.parentElement.parentElement.children[0].children[1].textContent.substring(
          1
        ),
      units: parseInt(counter.textContent),
    });

    counter.innerHTML = 0;

    const message = document.getElementById('message-cart');
    message.innerHTML = 'Go see your shopping cart!';
  } else {
    if (parseInt(getAddToCartButton().innerHTML) === 0) {
      message.innerHTML = 'Shopping cart is empty, add your products!';
    }
    alert('We need to add a number greater than 0');
  }
}

const substractingByOneToCounter = (counter) => {
  counter.innerHTML = parseInt(counter.textContent) - 1;
};
