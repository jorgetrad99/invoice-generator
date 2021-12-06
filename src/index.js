import Main from './templates/Template.js';
import { getData } from './templates/Products.js';
import './styles/main.styl';
/* import { doc } from '@firebase/firestore'; */

let productsInCart = [];
//Template

(async function App() {
  const productsLayout = await getData();
  //main
  const main = null || document.getElementById('main');
  main.innerHTML = Main();

  //products

  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = productsLayout;

  const product_container = document.getElementsByClassName('info-product');
  for (let i = 0; i < product_container.length; i++) {
    getSubstractButton(i).onclick = () => {
      if (getCounter(i).innerHTML > 0) {
        substractingByOneToCounter(getCounter(i));
      } else {
        alert('No se aceptan números negativos');
      }
    };
    getAddButton(i).onclick = () => {
      addingByOneToCounter(getCounter(i));
    };

    getAddToCartButton(i).onclick = () => {
      if (getCounter(i).textContent > 0) {
        addingToCounterCart(getCounter(i));
      } else {
        alert(
          'The amount of the product you want is required to add it to your shopping cart'
        );
      }
    };
  }

  const modal = document.getElementById('myModal');
  getCartButton().onclick = () => {
    if (getCartCounter().textContent > 0) {
      console.log(productsInCart);

      modal.style.display = 'block';
      fillInvoice();
      setTotal();
    } else {
      alert('Add some products to the shopping cart');
    }
  };

  const span = document.getElementsByClassName('close')[0];
  const totalByCode = document.getElementsByClassName('totalByCode')[0];
  span.onclick = () => {
    modal.style.display = 'none';
    document.querySelectorAll('.invoice-row').forEach((e) => e.remove());
    totalByCode.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      console.log('Hola');
      modal.style.display = 'none';
      document.querySelectorAll('.invoice-row').forEach((e) => e.remove());
      totalByCode.style.display = 'none';
    }
  };

  //Modal
  /* main.innerHTML = Modal(); */
  const enter_code_button = document.getElementById('enter-code-button');
  enter_code_button.onclick = () => {
    const inserted_code = document.getElementById('inserted-code');
    const newTotal = document.getElementById('totalByCode-value');
    if (inserted_code.value == 'platziMasterCode') {
      totalByCode.style.display = 'flex';
      const totalElement = document.querySelector('.total-value');
      console.log(totalElement.textContent.substring(1));
      newTotal.innerHTML = `$${(
        0.7 * totalElement.textContent.substring(1)
      ).toFixed(2)}`;
    } else {
      alert(`That's not a valid code, try again`);
    }
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

function fillInvoice() {
  const invoice_rows = document.getElementsByClassName('invoice-rows')[0];

  productsInCart.forEach((index1) => {
    const item = `
    <div class="invoice-row">
      <p>(${index1.units})</p>
      <p>${index1.name}</p>
      <p>$${index1.price}</p>
      <p>$${(index1.price * index1.units).toFixed(2)}</p>
    </div>      
  `;
    invoice_rows.insertAdjacentHTML('beforeend', item);
  });
}

function setTotal() {
  const totalElement = document.querySelector('.total-value');
  const total = productsInCart.reduce((total, value) => {
    return total + value.units * value.price;
  }, 0);
  totalElement.innerHTML = `$${total.toFixed(2)}`;
}
