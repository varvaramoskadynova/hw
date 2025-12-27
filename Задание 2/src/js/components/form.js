import { createElement } from '../dom.js';
import { positions } from '../data.js';

export function renderForm(container) {
    const mainContainer = createElement('div', ['container']); 
    const form = createElement('form', ['form']);

    // Переход на Step 2 по кнопке Далее
    form.action = 'step-2.html';
    form.method = 'get';

    // Заголовок
    const title = createElement('h1', ['form__title'], 'Заявка на стажировку');
    form.appendChild(title);

    // Поля формы
    const fields = [
        { label: 'Укажи свое ФИО', type: 'text', name: 'fio' },
        { label: 'Укажи свой ник в Telegram в формате: @nick', type: 'text', name: 'telegram' }
    ];

    fields.forEach(f => {
        const group = createElement('div', ['form__group']);
        const label = createElement('label', ['form__label'], f.label);
        const input = createElement('input', ['form__input']);
        input.type = f.type;
        input.name = f.name;
        group.append(label, input);
        form.appendChild(group);
    });

    // Select для позиции
    const groupSelect = createElement('div', ['form__group']);
    const labelSelect = createElement('label', ['form__label'], 'Укажи позицию, на которую ты претендуешь');
    const select = createElement('select', ['form__select']);
    positions.forEach(pos => select.appendChild(createElement('option', [], pos)));
    groupSelect.append(labelSelect, select);
    form.appendChild(groupSelect);

    // Кнопка Далее
    const actions = createElement('div', ['form__actions']);
    const button = createElement('button', ['button'], 'Далее');
    button.type = 'submit';
    actions.appendChild(button);
    form.appendChild(actions);

    mainContainer.appendChild(form);
    container.appendChild(mainContainer);

    return form;
}

