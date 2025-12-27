import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderFormStep2 } from './components/formStep2.js';

const headerContainer = document.getElementById('header');
const appContainer = document.getElementById('app');
const footerContainer = document.getElementById('footer');

renderHeader(headerContainer);
renderFooter(footerContainer);

renderFormStep2(appContainer);


