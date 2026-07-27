// Dashboard functionality
console.log('Dashboard loaded');

// Load dashboard content
function loadDashboard() {
    console.log('Loading dashboard...');
    updateProgressBar();
    setupTaskChecklist();
}

// Update progress bar animation
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        let width = 0;
        const target = parseInt(progressBar.style.width) || 65;
        
        const interval = setInterval(() => {
            if (width >= target) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 30);
    }
}

// Setup task checklist functionality
function setupTaskChecklist() {
    const checkboxes = document.querySelectorAll('.tasks-table input[type="checkbox"]');
    const percentDisplay = document.getElementById('percent');
    const taskProgress = document.getElementById('taskProgress');
    
    if (!checkboxes.length) return;
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checked = document.querySelectorAll('.tasks-table input[type="checkbox"]:checked').length;
            const percentage = Math.round((checked / checkboxes.length) * 100);
            
            if (percentDisplay) {
                percentDisplay.textContent = percentage + '%';
            }
            if (taskProgress) {
                taskProgress.style.width = percentage + '%';
            }
        });
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDashboard);
} else {
    loadDashboard();
}

