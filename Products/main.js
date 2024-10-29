document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('dark-mode-toggle');
    const mobileToggle = document.getElementById('mobile-dark-mode-toggle');
    const icon = document.getElementById('icon');
    const mobileIcon = document.getElementById('icon-mobile');
    const hamburger = document.getElementById('hamburger');
    const mobileNavLinks = document.getElementById('mobile-nav-links');

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark');

        // Change the icon based on the current mode
        if (document.body.classList.contains('dark')) {
            icon.setAttribute('name', 'moon');
            mobileIcon.setAttribute('name', 'moon');
        } else {
            icon.setAttribute('name', 'sunny-outline');
            mobileIcon.setAttribute('name', 'sunny-outline');
        }
    }

    // Attach event listeners
    toggle.addEventListener('click', toggleDarkMode);
    mobileToggle.addEventListener('click', toggleDarkMode);

    // Mobile navigation toggle functionality
    hamburger.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('hidden');
    });
});

// Scroll progress bar
window.onscroll = function () {
    var win = window.innerHeight;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    var scrollHeight = doc.scrollHeight - win;

    var scrollPercent = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    document.getElementById("progress-bar").style.width = scrollPercent + "%"; // Update width
};

// Initialize AOS (Animate On Scroll)
AOS.init();

function toggleAccordion(accordionId, button) {
    const content = document.getElementById(accordionId);
    const arrow = button.querySelector('svg');
    content.classList.toggle('show');
    arrow.classList.toggle('rotate-180');
}
