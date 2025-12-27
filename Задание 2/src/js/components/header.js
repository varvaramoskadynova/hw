import { createElement } from '../dom.js';

export function renderHeader(container) {
    const header = createElement('header', ['header']);
    const wrapper = createElement('div', ['container', 'header__content']);

    // Бренд
    const brand = createElement('div', ['header__brand']);
    const logoIcon = createElement('div', ['header__logo-icon'], 'РК');
    const logoText = createElement('div', ['header__logo-text'], 'Рога и копыта');
    brand.append(logoIcon, logoText);

    // Навигация
    const nav = createElement('nav', ['header__nav']);
    const items = ['Стажировки', 'Практика', 'Амбассадоры в вузе', 'Обучение', 'Мероприятия'];
    items.forEach((text, i) => {
        const link = createElement('a', ['header__nav-item'], text);
        if (i === 0) link.classList.add('header__nav-item--active');
        nav.appendChild(link);
    });

    // Иконка аккаунта
    const accountIcon = createElement('div', ['account-icon']);
    const inner = createElement('div', ['account-icon__inner']);
    inner.append(
        createElement('div', ['account-icon__head']),
        createElement('div', ['account-icon__body'])
    );
    accountIcon.appendChild(inner);
    nav.appendChild(accountIcon);

    wrapper.append(brand, nav);
    header.appendChild(wrapper);
    container.appendChild(header);
}
