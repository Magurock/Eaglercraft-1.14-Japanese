
const jsonURL = 'https://raw.githubusercontent.com/EaglerDevs/EaglerCraft/main/assets.json';

async function fetchAndDisplayJSON() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        
        const jsonContent = document.getElementById('json-content');
        jsonContent.textContent = JSON.stringify(jsonData, null, 2); // Format the JSON for better readability
    } catch (error) {
        console.error('Error:', error);
    }
}

window.addEventListener('load', fetchAndDisplayJSON);