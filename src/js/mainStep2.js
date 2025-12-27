import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderFormStep2 } from './components/formStep2.js';
import { bindAutoSave } from './storage.js';

const headerContainer = document.getElementById('header');
const appContainer = document.getElementById('app');
const footerContainer = document.getElementById('footer');

renderHeader(headerContainer);
renderFooter(footerContainer);

const form = renderFormStep2(appContainer);

// Привязываем сохранение данных Step 2
bindAutoSave(form, 'step2Data');

// Переход на Step 3
form.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'step-3.html';
});


