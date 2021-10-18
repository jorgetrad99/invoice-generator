import { db } from '../firebase/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const getData = async () => {
  const products = await (await getDocs(collection(db, 'products'))).data();
  /* products.forEach((document) => {
    console.log(document.data());
  }); */
  /* console.log(products); */
};

getData();

const productsContainer = async () => {
  var productsCont = ``;
  /* await produc */
  return `
        <div class="products-container">
            <div class="product-container">
                <img src="${Cart}" class="product-image"></img>
            </div>
        </div>
    `;
};
