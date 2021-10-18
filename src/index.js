import Template from './templates/Template.js';
import { productsLayout } from './templates/Products.js';
import './styles/main.styl';
import './styles/vars.styl';

(function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = Template();

  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = productsLayout;
})();
