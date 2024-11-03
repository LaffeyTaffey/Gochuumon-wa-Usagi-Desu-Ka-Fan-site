// Set initial theme
document.addEventListener('DOMContentLoaded', () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    updateThemeToggleIcon();
});

// Function to update theme toggle icon
function updateThemeToggleIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Scroll handling
        let lastScrollTop = 0;
        const header = document.querySelector('.header-nav');
        const title = document.querySelector('.site-title');

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
                title.style.opacity = '0';
            } else {
                header.classList.remove('hidden');
                title.style.opacity = '1';
            }
            
            lastScrollTop = scrollTop;
        });

        // Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon();
    showNotification(`Switched to ${newTheme} mode`);
});

        // Back button
        const backButton = document.querySelector('.back-button');
        backButton.addEventListener('click', () => {
            window.history.back();
        });

        // Navigation link animations
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                showNotification(`Navigating to ${href.substring(1)}`);
                // Add your actual navigation logic here
            });
        });

        // Notification system
        function showNotification(message) {
            const notification = document.querySelector('.notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
});