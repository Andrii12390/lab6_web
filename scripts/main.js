const textList = document.getElementById('output');

// Функція для отримання даних і рендерингу
async function fetchAndRenderData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();

        // Очищуємо попередній вміст
        textList.innerHTML = '';

        // Рендеримо кожен елемент
        data.forEach(item => renderGlitchItem(item));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Функція для рендерингу одного елемента
function renderGlitchItem(item) {
    if(item === 'null' || !item) {
        textList.innerHTML = '';
        return;
    }
    const glitchElement = document.createElement('div');
    glitchElement.className = 'glitch';
    glitchElement.setAttribute('data-text', item.text);
    glitchElement.textContent = item.text;

    // Динамічні стилі
    glitchElement.style.color = item.color;
    glitchElement.style.letterSpacing = `${item.spacing}px`;
    glitchElement.style.fontSize = `${item.fontSize}px`;

    textList.appendChild(glitchElement);
}

// Налаштування WebSocket
const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const newItem = JSON.parse(event.data);
    console.log('New item received:', newItem);

    // Додаємо новий елемент до списку
    renderGlitchItem(newItem);
};

// Завантаження даних при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fetchAndRenderData);
