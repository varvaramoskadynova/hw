import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderFormStep3 } from './components/formStep3.js';
import { bindAutoSave } from './storage.js';

const headerContainer = document.getElementById('header');
const appContainer = document.getElementById('app');
const footerContainer = document.getElementById('footer');

renderHeader(headerContainer);
renderFooter(footerContainer);

const form = renderFormStep3(appContainer);

// Привязываем сохранение данных Step 3
bindAutoSave(form, 'step3Data');

// Переход на Step 4
form.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'step-4.html';
});