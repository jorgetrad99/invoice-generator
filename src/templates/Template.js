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
        <img src="${Cart}" alt="Shoping cart icon" />
      </div>
      <div class="products-container">
        <div class="product-container">
          
        </div>
        <div class="product-container">
          
        </div>
        <div class="product-container">
          
        </div>
        <div class="product-container">
          
        </div>
      </div>
    </main>
  `;
};

export default Template;
