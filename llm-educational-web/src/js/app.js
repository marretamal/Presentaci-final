// JavaScript code for interactivity on the web page

// Function to show/hide the comparative table
function toggleComparativeTable() {
    const table = document.getElementById('comparative-table');
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'block';
    } else {
        table.style.display = 'none';
    }
}

// Function to display an alert message
function showAlert(message) {
    alert(message);
}

// Function to change the color/theme of the page
function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Añadir animación al título para que aparezca desde arriba
const headerTitle = document.querySelector('header h1');
headerTitle.style.position = 'relative';
headerTitle.style.opacity = '0';
headerTitle.style.transform = 'translateY(-50px)';

window.addEventListener('load', () => {
    setTimeout(() => {
        headerTitle.style.transition = 'opacity 1s ease, transform 1s ease';
        headerTitle.style.opacity = '1';
        headerTitle.style.transform = 'translateY(0)';
    }, 500); // Retraso de 500ms para la animación
});

// Ensure the button is added after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleTable');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleComparativeTable);
    }
});

// Event listeners for buttons
document.getElementById('alert-btn').addEventListener('click', () => showAlert('Button clicked!'));
document.getElementById('theme-btn').addEventListener('click', changeTheme);