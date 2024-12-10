const textList = document.getElementById('output');

async function fetchAndRenderData() {
    try {
        const response = await fetch('https://lab6-backend.vercel.app/data');
        const data = await response.json();

        textList.innerHTML = '';

        data.forEach(item => renderGlitchItem(item));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderGlitchItem(item) {
    if(item === 'null' || !item) {
        textList.innerHTML = '';
        return;
    }
    const glitchElement = document.createElement('div');
    glitchElement.className = 'glitch';
    glitchElement.setAttribute('data-text', item.text);
    glitchElement.textContent = item.text;

    glitchElement.style.color = item.color;
    glitchElement.style.letterSpacing = `${item.spacing}px`;
    glitchElement.style.fontSize = `${item.fontSize}px`;

    textList.appendChild(glitchElement);
}

document.addEventListener('DOMContentLoaded', fetchAndRenderData);
