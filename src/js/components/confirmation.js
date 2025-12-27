import { createElement } from '../dom.js';

export function renderConfirmation(container) {
    const mainContainer = createElement('div', ['container']);
    
    const message = createElement('div', ['confirmation-message']);
    
    const title = createElement('h1', [], 'Твоя заявка на стажировку принята!');
    const p1 = createElement('p', [], 'HR-менеджер свяжется с тобой в течение 2-ух рабочих дней в Telegram и сообщит о решении насчет твоего дальнейшего участия в отборе.');
    const p2 = createElement('p', [], 'Хорошего дня!');
    
    message.append(title, p1, p2);
    mainContainer.appendChild(message);
    container.appendChild(mainContainer);
}
