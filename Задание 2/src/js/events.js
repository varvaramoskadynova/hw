export function initFormEvents(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // предотвращаем стандартную отправку

        // Собираем данные формы
        const data = new FormData(form);
        const formData = Object.fromEntries(data.entries());
        console.log('Данные формы Step 1:', formData);

        // Сохраняем данные в sessionStorage
        sessionStorage.setItem('step1Data', JSON.stringify(formData));

        // Переходим на Step 2
        window.location.href = 'step-2.html';
    });
}

