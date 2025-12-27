import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderForm } from './components/form.js';

const headerContainer = document.getElementById('header');
const appContainer = document.getElementById('app');
const footerContainer = document.getElementById('footer');

renderHeader(headerContainer);
renderFooter(footerContainer);

renderForm(appContainer); // Рендерим форму с кнопкой Далее

