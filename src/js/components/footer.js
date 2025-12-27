import { createElement } from '../dom.js';

export function renderFooter(container) {
    const footer = createElement('footer', ['footer']);
    const wrapper = createElement('div', ['container', 'footer__content']);

    const col1 = createElement('div', ['footer-column']);
    col1.append(
        createElement('a', [], 'Мы в Telegram'),
        createElement('a', [], 'Карьера для профессионалов')
    );

    const col2 = createElement('div', ['footer-column']);
    col2.append(
        createElement('a', [], 'Политика обработки данных'),
        createElement('a', [], 'Политика использования cookies')
    );

    const col3 = createElement('div', ['footer-column']);
    col3.append(
        createElement('span', [], '2000—2025, ООО «Рога и копыта», 194100, Санкт-Петербург, ул. Кантемировская, д. 3, корп. 1, лит. А')
    );

    wrapper.append(col1, col2, col3);
    footer.appendChild(wrapper);
    container.appendChild(footer);
}
