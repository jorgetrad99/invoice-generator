import '../firebase/firebaseConfig.js';
import Cart from '../assets/icons/cart.svg';
import AddToCart from '../assets/icons/addToCart.svg';
import { db } from '../firebase/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const getData = async () => {
  const products = await getDocs(collection(db, 'products'));
  products.forEach((document) => {
    console.log(document.data());
  });
  /* console.log(products); */
};

getData();

const Template = () => {
  return `
    <header>
      <div class='header'>
        <h2 href='#'>e-Shop</h2>
        <nav>
          <ul class='nav'>
            <li>
              <a href='#'>Market</a>
            </li>
            <li>
              <a href='#'>Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="cart-container">
        <h4>Shoping cart is empty</h4>
        <br />
        <div class="cart-counter">
          <img src="${Cart}" class="icon" alt="Shoping cart icon" />
          <h3>(0)</h3>
        </div>
        <br />
      </div>
      <div class="products-container">
        <div class="product-container">
          <img src="${Cart}" class="product-image"></img>
        </div>
        <div class="product-container">
          <img src="${Cart}" class="product-image"></img>
        </div>
        <div class="product-container">
          <img src="${Cart}" class="product-image"></img>
        </div>
        <div class="product-container">
          <img src="${Cart}" class="product-image"></img>
        </div>
        <div class="product-container">
          <img src="${Cart}" class="product-image"></img>
        </div>
      </div>
    </main>
  `;
};

export default Template;
