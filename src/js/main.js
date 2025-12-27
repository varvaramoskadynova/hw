import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderForm } from './components/form.js';
import { bindAutoSave } from './storage.js';

const headerContainer = document.getElementById('header');
const appContainer = document.getElementById('app');
const footerContainer = document.getElementById('footer');

renderHeader(headerContainer);
renderFooter(footerContainer);

const form = renderForm(appContainer);

// Привязываем сохранение данных Step 1
bindAutoSave(form, 'step1Data');

// Обработка отправки
form.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'step-2.html';
});

