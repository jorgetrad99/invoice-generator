import Template from './templates/Template.js';
import { getData } from './templates/Products.js';
import './styles/main.styl';

//Template

(async function App() {
  //main
  const main = null || document.getElementById('main');
  main.innerHTML = Template();

  //products
  const productsLayout = await getData();

  const productsContainer = document.querySelector('.products-container');

  productsContainer.innerHTML = productsLayout;

  const product_container = document.getElementsByClassName('info-product');
  for (let i = 0; i < product_container.length; i++) {
    getSubstractButton(i).onclick = () => {
      if (getCounter(i).innerHTML > 0) {
        substractingByOneToCounter(getCounter(i));
        substractingByOneToCounter(getCartCounter());
      } else {
        alert('No se aceptan números negativos');
      }
    };
    getAddButton(i).onclick = () => {
      addingByOneToCounter(getCounter(i));
      addingByOneToCounter(getCartCounter());
    };
  }

  console.log(getCartCounter());
})();

/* (async () => {
  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = await productsLayout;
})(); */

function getSubstractButton(i) {
  const product_container = document.getElementsByClassName('info-product');
  return product_container[i].children[1].children[0].children[0];
}

function getAddButton(i) {
  const product_container = document.getElementsByClassName('info-product');
  return product_container[i].children[1].children[0].children[2];
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

const substractingByOneToCounter = (counter) => {
  counter.innerHTML = parseInt(counter.textContent) - 1;
};
