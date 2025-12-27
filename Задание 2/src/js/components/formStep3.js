import { createElement } from '../dom.js';

export function renderFormStep3(container) {
    const mainContainer = createElement('div', ['container']);
    const form = createElement('form', ['form']);

    // ===== Поле 1: Опыт работы (textarea) =====
    const expGroup = createElement('div', ['form__group']);
    const expLabel = createElement('label', ['form__label'], 'Расскажи о своем опыте работы, если он есть (какие задачи выполнял(а), чего удалось достигнуть):');
    const expTextarea = createElement('textarea', ['form__input']);
    expTextarea.rows = 4;
    expGroup.append(expLabel, expTextarea);
    form.appendChild(expGroup);

    // ===== Поле 2: Ожидания от стажировки (textarea) =====
    const expectGroup = createElement('div', ['form__group']);
    const expectLabel = createElement('label', ['form__label'], 'Какие ожидания у тебя от стажировки, что ты хотел(а) бы получить в результате:');
    const expectTextarea = createElement('textarea', ['form__input']);
    expectTextarea.rows = 4;
    expectGroup.append(expectLabel, expectTextarea);
    form.appendChild(expectGroup);

    // ===== Поле 3: Нагрузка (radio) =====
    const hoursGroup = createElement('div', ['form__group']);
    const hoursLabel = createElement('label', ['form__label'], 'Ты рассматриваешь нагрузку на стажировке:');
    const hoursRadioGroup = createElement('div', ['form__radio-group']);
    ['20 часов в неделю','40 часов в неделю'].forEach(val => {
        const label = createElement('label');
        const input = createElement('input');
        input.type = 'radio';
        input.name = 'hours';
        input.value = val;
        label.append(input, ` ${val}`);
        hoursRadioGroup.appendChild(label);
    });
    hoursGroup.append(hoursLabel, hoursRadioGroup);
    form.appendChild(hoursGroup);

    // ===== Кнопка Отправить =====
    const actions = createElement('div', ['form__actions']);
    const button = createElement('button', ['button'], 'Отправить');
    button.type = 'submit';
    actions.appendChild(button);
    form.appendChild(actions);

    mainContainer.appendChild(form);
    container.appendChild(mainContainer);

    // ===== Переход на Step 4 =====
    form.addEventListener('submit', e => {
        e.preventDefault(); // отменяем стандартную отправку формы
        window.location.href = 'step-4.html'; // переход на Step 4
    });

    return form;
}