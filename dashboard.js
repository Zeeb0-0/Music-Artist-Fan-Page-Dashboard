// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    // Mock Data for Dashboard
    const metrics = {
        pageViews: 2456,
        userInteractions: 652,
        conversionRate: '15.8%',
    };

    // Function to display metrics
    function displayMetrics() {
        document.querySelector('#pageViews').textContent = metrics.pageViews;
        document.querySelector('#userInteractions').textContent = metrics.userInteractions;
        document.querySelector('#conversionRate').textContent = metrics.conversionRate;
    }

    // Animation for metric counters on scroll
    function animateMetrics() {
        const metricsSection = document.querySelector('.metrics');
        const metricsPos = metricsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (metricsPos < screenPos) {
            metricsSection.classList.add('appear');
            window.removeEventListener('scroll', animateMetrics);
        }
    }

    // Smooth scroll to sections
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Call functions on load
    displayMetrics();
    window.addEventListener('scroll', animateMetrics);
});
