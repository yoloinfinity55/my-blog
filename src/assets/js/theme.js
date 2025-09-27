// theme.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Function to load the theme on page load
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Event listener for the toggle button
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
});
