// Runtime Application Core Initializer
document.addEventListener('DOMContentLoaded', () => {
    initFormValidation();
    initThemeManager();
});

/**
 * 1. Client-side Validation Pipeline for Form Entities
 */
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const messageElement = document.getElementById('message');

        const submissionData = {
            name: nameElement.value.trim(),
            email: emailElement.value.trim(),
            message: messageElement.value.trim()
        };

        // Execution Check Constraints
        if (!submissionData.name || !submissionData.email || !submissionData.message) {
            alert("Exception encountered: All localized configuration entry fields must contain valid string parameters.");
            return;
        }

        // Structural Log Mocking Simulation Outbound Action
        alert(`Data Transmitted Successfully!\nThank you, ${submissionData.name}. Your message payload data has been successfully verified.`);
        contactForm.reset();
    });
}

/**
 * 2. Theme State Manager Logic (Dark Mode Toggle functionality)
 */
function initThemeManager() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        const rootElement = document.documentElement;
        const currentActiveTheme = rootElement.getAttribute('data-theme');

        if (currentActiveTheme === 'dark') {
            rootElement.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
        } else {
            rootElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        }
    });
}
