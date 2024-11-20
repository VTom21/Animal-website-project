document.addEventListener('DOMContentLoaded', function () {
// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
const iconSunny = document.getElementById('icon-sunny');
const iconMoon = document.getElementById('icon-moon');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle the dark mode on the body

    // Show the moon icon and hide the sun icon when in dark mode
    if (document.body.classList.contains('dark')) {
        iconMoon.style.display = 'block';  // Show moon icon
        iconSunny.style.display = 'none'; // Hide sun icon
        iconSunny.style.visibility = "hidden"; // Hides the element but it still takes up space
    } else {
        iconMoon.style.display = 'none';  // Hide moon icon
        iconSunny.style.display = 'block'; // Show sun icon
        iconSunny.style.visibility = "visible";
    }
});

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


