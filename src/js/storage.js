// js/storage.js
export function saveFormData(stepKey, data) {
    sessionStorage.setItem(stepKey, JSON.stringify(data));
}

export function loadFormData(stepKey) {
    const data = sessionStorage.getItem(stepKey);
    return data ? JSON.parse(data) : {};
}

// Автоматическое сохранение поля при изменении
export function bindAutoSave(form, stepKey) {
    const elements = Array.from(form.elements).filter(el => el.name);
    
    // Восстановим данные из sessionStorage
    const savedData = loadFormData(stepKey);
    elements.forEach(el => {
        if (savedData[el.name] !== undefined) {
            if (el.type === 'radio') {
                if (el.value === savedData[el.name]) el.checked = true;
            } else {
                el.value = savedData[el.name];
            }
        }
    });

    // Сохраняем данные при изменении поля
    elements.forEach(el => {
        el.addEventListener('input', () => {
            const currentData = loadFormData(stepKey);
            if (el.type === 'radio') {
                if (el.checked) currentData[el.name] = el.value;
            } else {
                currentData[el.name] = el.value;
            }
            saveFormData(stepKey, currentData);
        });
        if (el.type === 'radio') {
            el.addEventListener('change', () => {
                const currentData = loadFormData(stepKey);
                if (el.checked) currentData[el.name] = el.value;
                saveFormData(stepKey, currentData);
            });
        }
    });
}