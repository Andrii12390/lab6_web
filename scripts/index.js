const form = document.getElementById('glitch-form');
const textList = document.getElementById('output');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const glitchText = document.getElementById('glitch-text').value;
    const glitchColor = document.getElementById('glitch-color').value;
    const glitchSpacing = document.getElementById('glitch-spacing').value;
    const glitchFontSize = document.getElementById('glitch-font-size').value;
    try {
        const response = await fetch('https://lab6-backend.vercel.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: glitchText, color: glitchColor, spacing: glitchSpacing, fontSize: glitchFontSize }),
        });

        const data = await response.json();
        console.log('Response from server:', data);

    } catch (error) {
        console.error('Error:', error);
    }

    form.reset();
});


document.getElementById('delete-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://lab6-backend.vercel.app/data/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response.status)
    } catch (error) {
        console.log('Error: ', error)
    }
})