import '../firebase/firebaseConfig.js';
import Cart from '../assets/icons/cart.svg';
import AddToCart from '../assets/icons/addToCart.svg';

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
        <div class="products-container">
        </div>
      </div>
    </main>
  `;
};

export default Template;
