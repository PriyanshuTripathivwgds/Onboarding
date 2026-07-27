// Main Application Script
// Developer Onboarding Portal

console.log('Developer Onboarding Portal Loaded');

// Initialize application
function initApp() {
    console.log('App initialized');
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Button click handlers
    const buttons = document.querySelectorAll('.card button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
        });
    });
}

// Navigation active state
function setActiveNavigation() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar a');
    
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

