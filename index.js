const track = document.querySelector('.track');
const logos = Array.from(track.children);
const logoWidth = logos[0].getBoundingClientRect().width; // Get the width of a logo
let currentIndex = 0;

// Function to move to the next slide
const moveToNextLogo = () => {
    // Update the current index
    currentIndex = (currentIndex + 1) % logos.length; // Loop back to the first logo

    // Calculate the amount to move
    const amountToMove = logoWidth * currentIndex;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
};

// Set an interval to move to the next logo every 3 seconds
const autoSlide = setInterval(moveToNextLogo, 3000);

// Optional: Pause on mouse hover
track.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

track.addEventListener('mouseleave', () => {
    setInterval(autoSlide, 3000);
});


const toggle = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('icon');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Change the icon based on the current mode
    if (document.body.classList.contains('dark')) {
        icon.setAttribute('name', 'moon');
    } else {
        icon.setAttribute('name', 'sunny-outline');
    }
});

// GSAP Animations
fetch('https://api.example.com/pet-tips')
    .then(response => response.json())
    .then(data => {
        document.getElementById('tips-section').innerHTML = data.map(tip => `<p>${tip.text}</p>`).join('');
    });

// 1. Header animation (fade-in and slide down)
gsap.from("#header h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from("#header nav ul li a", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    delay: 1
});

// 2. Hero Section (fade-in and zoom-in on text)
gsap.from(".hero h2", {
    opacity: 0,
    scale: 0.8,
    y: -50,
    duration: 1.5,
    ease: "power2.out",
    delay: 1.5
});

gsap.from(".hero p", {
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    delay: 2
});


// 4. About Section - slide up animation
gsap.from("#about", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 90%"
    }
});

// 5. Contact Section - fade-in with bounce effect
gsap.from("#contact h2", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "bounce.out",
    delay: 2.5
});

gsap.from("form input, form textarea, form button", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    delay: 3
});

// 6. Footer - fade-in
gsap.from("footer p", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 3.5
});

gsap.from(".footer", {
    opacity: 0,
    duration: 3,
    ease: "power2.out"
});

gsap.to(".footer", {
    opacity: 1,
    duration: 3,
    ease: "power2.out"
})

// Set the duration for the preloader to be visible (in milliseconds)
const preloadDuration = 3000; // Change 3000 to your desired time in milliseconds

window.onload = function () {
    const preloader = document.querySelector('.loader_div');
    const content = document.querySelector('.content');

    document.body.classList.add('overflow');

    // Hide the preloader after the specified duration
    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.remove('overflow');
        content.style.display = 'block'; // Show the content
    }, preloadDuration);
};

window.onscroll = function () {
    var win = window.innerHeight;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    var scrollHeight = doc.scrollHeight - win;

    var scrollPercent = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    document.getElementById("progress-bar").style.width = scrollPercent + "%"; // Update width
};

function home() {
    window.location.href = "index.html";
}

function github() {
    window.location.href = "https://github.com/VTom21/Animal-website-project";
}


// Get elements
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const offcanvas = document.getElementById('offcanvas');
const offcanvasContent = offcanvas.querySelector('.offcanvas');

// Show offcanvas on button click
openBtn.addEventListener('click', () => {
    offcanvas.classList.remove('hidden'); // Remove hidden class
    setTimeout(() => {
        offcanvasContent.classList.add('show'); // Add show class after a short delay
    }, 10);
});

// Hide offcanvas on close button click
closeBtn.addEventListener('click', () => {
    offcanvasContent.classList.remove('show'); // Remove show class
    offcanvasContent.addEventListener('transitionend', () => {
        offcanvas.classList.add('hidden'); // Add hidden class after transition ends
    }, { once: true }); // Ensure the event listener runs only once
});

// Get elements
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

// Close modal when clicking outside of the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

// Function to open modal
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Function to close modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});








