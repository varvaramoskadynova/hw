import { createElement } from '../dom.js';

export function renderFormStep2(container) {
    const mainContainer = createElement('div', ['container']); // контейнер для CSS
    const form = createElement('form', ['form']);

    // ===== Поле 1: Ступень образования (radio) =====
    const eduGroup = createElement('div', ['form__group']);
    const eduLabel = createElement('label', ['form__label'], 'На какой ступени образования ты сейчас находишься:');
    const eduRadioGroup = createElement('div', ['form__radio-group']);
    ['Среднее профессиональное', 'Бакалавриат', 'Магистратура'].forEach(val => {
        const label = createElement('label');
        const input = createElement('input');
        input.type = 'radio';
        input.name = 'education';
        input.value = val;
        label.append(input, ` ${val}`);
        eduRadioGroup.appendChild(label);
    });
    eduGroup.append(eduLabel, eduRadioGroup);
    form.appendChild(eduGroup);

    // ===== Поле 2: Курс (radio) =====
    const courseGroup = createElement('div', ['form__group']);
    const courseLabel = createElement('label', ['form__label'], 'На каком ты курсе:');
    const courseRadioGroup = createElement('div', ['form__radio-group']);
    ['1','2','3','4'].forEach(val => {
        const label = createElement('label');
        const input = createElement('input');
        input.type = 'radio';
        input.name = 'course';
        input.value = val;
        label.append(input, ` ${val}`);
        courseRadioGroup.appendChild(label);
    });
    courseGroup.append(courseLabel, courseRadioGroup);
    form.appendChild(courseGroup);

    // ===== Поле 3: Средний балл (number) =====
    const gradeGroup = createElement('div', ['form__group']);
    const gradeLabel = createElement('label', ['form__label'], 'Укажи свой средний балл в формате от 0 до 5 с округлением до десятых:');
    const gradeInput = createElement('input', ['form__input']);
    gradeInput.type = 'number';
    gradeInput.min = 0;
    gradeInput.max = 5;
    gradeInput.step = 0.1;
    gradeGroup.append(gradeLabel, gradeInput);
    form.appendChild(gradeGroup);

    // ===== Поле 4: Учебные проекты (textarea) =====
    const projectGroup = createElement('div', ['form__group']);
    const projectLabel = createElement('label', ['form__label'], 'Расскажи про учебные проекты, в которых ты принимал(а) участие (какая у тебя была роль, что удалось сделать):');
    const projectTextarea = createElement('textarea', ['form__input']);
    projectTextarea.rows = 4;
    projectGroup.append(projectLabel, projectTextarea);
    form.appendChild(projectGroup);

    // ===== Кнопка Далее =====
    const actions = createElement('div', ['form__actions']);
    const button = createElement('button', ['button'], 'Далее');
    button.type = 'submit';
    actions.appendChild(button);
    form.appendChild(actions);

    mainContainer.appendChild(form);
    container.appendChild(mainContainer);

    // ===== Переход на Step 3 =====
    form.addEventListener('submit', e => {
        e.preventDefault();               // Остановим стандартную отправку формы
        window.location.href = 'step-3.html'; // Переход на Step 3
    });

    return form;
}


