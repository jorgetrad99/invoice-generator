import Template from './templates/Template.js';
import './styles/main.styl';
import './styles/vars.styl';

(function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = Template();
})();
