// Theme management module
console.log('Theme module loaded');

const THEME_KEY = 'onboarding-theme';
const DARK_MODE_CLASS = 'dark-mode';

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle(DARK_MODE_CLASS);
    const isDarkMode = document.body.classList.contains(DARK_MODE_CLASS);
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
    console.log('Theme toggled to:', isDarkMode ? 'dark' : 'light');
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        document.body.classList.add(DARK_MODE_CLASS);
    }
}

// Get current theme
function getCurrentTheme() {
    return document.body.classList.contains(DARK_MODE_CLASS) ? 'dark' : 'light';
}

// Apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add(DARK_MODE_CLASS);
    } else {
        document.body.classList.remove(DARK_MODE_CLASS);
    }
    localStorage.setItem(THEME_KEY, theme);
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

