import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderConfirmation } from './components/confirmation.js';
import { loadFormData } from './storage.js';

renderHeader(document.getElementById('header'));
renderFooter(document.getElementById('footer'));
renderConfirmation(document.getElementById('app'));

// ===== Собираем все данные формы =====
const step1Data = loadFormData('step1Data');
const step2Data = loadFormData('step2Data');
const step3Data = loadFormData('step3Data');

// Объединяем все данные в один объект
const allFormData = {
    ...step1Data,
    ...step2Data,
    ...step3Data
};

console.log('Все данные формы:', allFormData);

// ===== Очистка sessionStorage после отправки =====
sessionStorage.clear();
