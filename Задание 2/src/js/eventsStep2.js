export function initFormStep2Events(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const formData = Object.fromEntries(data.entries());
        console.log('Данные формы Step 2:', formData);

        showConfirmation(form.parentElement);
    });
}

function showConfirmation(container) {
    container.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('confirmation-message');

    const title = document.createElement('h1');
    title.textContent = 'Спасибо!';

    const text = document.createElement('p');
    text.textContent = 'Ваша информация сохранена. Мы свяжемся с вами в ближайшее время.';

    wrapper.append(title, text);
    container.appendChild(wrapper);
}
