function fetchDataFromPlatform(whatsapp) {
    fetch(`http://localhost:3000/api/${whatsapp}`) // Replace with your actual endpoints
        .then(response => response.json())
        .then(data => {
            displayData(data, platform);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(data, whatsapp) {
    const platformElement = document.getElementById(platform);
    
    const metrics = Object.entries(data).map(([key, value]) => {
        return `<p>${key}: ${value}</p>`;
    }).join('');

    platformElement.innerHTML = `
        <h3>${whatsapp}</h3>
        ${metrics}
        <button onclick="fetchDataFromPlatform('${whatsapp}')">Refresh</button>
    `;
}

function fetchDataFromPlatform(instagram) {
    fetch(`http://localhost:3000/api/${instagram}`) // Replace with your actual endpoints
        .then(response => response.json())
        .then(data => {
            displayData(data, instagram);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(data, whatsapp) {
    const platformElement = document.getElementById(instagram);
    
    const metrics = Object.entries(data).map(([key, value]) => {
        return `<p>${key}: ${value}</p>`;
    }).join('');

    platformElement.innerHTML = `
        <h3>${instagram}</h3>
        ${metrics}
        <button onclick="fetchDataFromPlatform('${instagram}')">Refresh</button>
    `;
}

function fetchDataFromPlatform(twitter) {
    fetch(`http://localhost:3000/api/${twitter}`) // Replace with your actual endpoints
        .then(response => response.json())
        .then(data => {
            displayData(data, twitter);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(data, twitter) {
    const platformElement = document.getElementById(twitter);
    
    const metrics = Object.entries(data).map(([key, value]) => {
        return `<p>${key}: ${value}</p>`;
    }).join('');

    platformElement.innerHTML = `
        <h3>${twitter}</h3>
        ${metrics}
        <button onclick="fetchDataFromPlatform('${twitter}')">Refresh</button>
    `;
}
