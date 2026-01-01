// Tab navigation
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update button active state
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Tab button event listeners
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const tabName = button.getAttribute('data-tab');
        switchTab(tabName);
        e.target.classList.add('active');
    });
});

// Skill tag interaction
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});
