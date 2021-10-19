import { db } from '../firebase/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import MinusIcon from '../assets/icons/minus-icon.svg';
import PlusIcon from '../assets/icons/plus-icon.svg';
import AddToCart from '../assets/icons/addToCart.svg';

var productsLayout = ``;

/* const getData = async () => {
  const products = await getDocs(collection(db, 'products'));
  products.forEach((document) => {
    productsLayout += `
        <div class="product-container">
            <img src="${document.data().urlImage}" alt="${
      document.data().name
    } image" class="product-image"></img>
    <div class="info-product">
          <div>
            <h3>${document.data().name}</h3>
            <p>$${document.data().price}</p>
          </div>
          <div class="addToCart-container">
            <div class="counter-container">
              <div class="decrease-counter-container">
                <img src="${MinusIcon}" class="icon" alt="Minus icon" />
              </div>
              <p class="units">0</p>
              <div class="increase-counter-container">
                <img src="${PlusIcon}" class="icon" alt="Plus icon" />
              </div>
            </div>
            <div class="addToCart-button">
              <img src="${AddToCart}" class="icon" alt="Add to cart icon" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
        </div>
    `;
  });
  console.log(productsLayout);
  return productsLayout;
}; */
const getData = () => {
  productsLayout += `
      <div class="product-container">
        <img src="https://firebasestorage.googleapis.com/v0/b/e-shop-7fd53.appspot.com/o/apples.jpg?alt=media&token=740b0785-ca1d-4b27-b5a8-7d3fa16634c5" alt="Apple image" class="product-image"></img>
        <div class="info-product">
          <div>
            <h3>Apples</h3>
            <p>$56.41</p>
          </div>
          <div class="addToCart-container">
            <div class="counter-container">
              <div class="decrease-counter-container">
                <img src="${MinusIcon}" class="icon" alt="Minus icon" />
              </div>
              <p>0</p>
              <div class="increase-counter-container">
                <img src="${PlusIcon}" class="icon" alt="Plus icon" />
              </div>
            </div>
            <div class="addToCart-button">
              <img src="${AddToCart}" class="icon" alt="Add to cart icon" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>  
      <div class="product-container">
        <img src="https://firebasestorage.googleapis.com/v0/b/e-shop-7fd53.appspot.com/o/banana.jpg?alt=media&token=05ead631-14b7-410b-b578-4324ede1f0c0" alt="Banana image" class="product-image"></img>
        <div class="info-product" id="bananas">
          <div>
            <h3>Bananas</h3>
            <p>$32.13</p>
          </div>
          <div class="addToCart-container">
            <div class="counter-container">
              <div class="decrease-counter-container">
                <img src="${MinusIcon}" class="icon" alt="Minus icon" />
              </div>
              <p class="units">0</p>
              <div class="increase-counter-container">
                <img src="${PlusIcon}" class="icon" alt="Plus icon" />
              </div>
            </div>
            <div class="addToCart-button">
              <img src="${AddToCart}" class="icon" alt="Add to cart icon" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-container">
        <img src="https://firebasestorage.googleapis.com/v0/b/e-shop-7fd53.appspot.com/o/water.jpg?alt=media&token=a0b77d1f-9f31-4b6b-bea1-f13812ed6234" alt="Bottle of water image" class="product-image"></img>
        <div class="info-product" id="bottleofwater">
          <div>
            <h3>Bottle of Water</h3>
            <p>$56.42</p>
          </div>
          <div class="addToCart-container">
            <div class="counter-container">
              <div class="decrease-counter-container">
                <img src="${MinusIcon}" class="icon" alt="Minus icon" />
              </div>
              <p class="units">0</p>
              <div class="increase-counter-container">
                <img src="${PlusIcon}" class="icon" alt="Plus icon" />
              </div>
            </div>
            <div class="addToCart-button">
              <img src="${AddToCart}" class="icon" alt="Add to cart icon" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-container">
        <img src="https://firebasestorage.googleapis.com/v0/b/e-shop-7fd53.appspot.com/o/watermelon.jpg?alt=media&token=e09eebce-7e51-4437-8c29-da4ef11b4e4f" alt="Watermelon image" class="product-image"></img>
        <div class="info-product" id="watermelon">
          <div>
            <h3>Watermelon</h3>
            <p>$38.48</p>
          </div>
          <div class="addToCart-container">
            <div class="counter-container">
              <div class="decrease-counter-container">
                <img src="${MinusIcon}" class="icon" alt="Minus icon" />
              </div>
              <p class="units">0</p>
              <div class="increase-counter-container">
                <img src="${PlusIcon}" class="icon" alt="Plus icon" />
              </div>
            </div>
            <div class="addToCart-button">
              <img src="${AddToCart}" class="icon" alt="Add to cart icon" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    `;
  return productsLayout;
};

export { getData };
