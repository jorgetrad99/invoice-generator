/* import '../firebase/firebaseConfig.js'; */
import Cart from '../assets/icons/cart.svg';
import { Modal } from './Modal.js';

const Main = () => {
  /* console.log(Modal); */
  const main = `
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
        <h4 id="message-cart">Shopping cart is empty, add your products!</h4>
        <div class="cart-counter">
          <img src="${Cart}" class="icon" alt="Shoping cart icon" />
          <h3>0</h3>
        </div>
        <br />
        <div class="products-container">
        </div>
      </div>
      <div id="myModal" class="modal">
        ${Modal}
      </div>
    </main>
  `;
  return main;
};

export default Main;
