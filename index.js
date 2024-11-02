

function changeLanguage(lang) {
    fetch(`/Supported Languages/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check if data is correctly fetched
            console.log(data); // Debug: Log the data to see if it's correct

            // Iterate over each key in the data object
            Object.keys(data).forEach(key => {
                // Select all elements with the class corresponding to the key
                const elements = document.querySelectorAll(`.${key}`);

                // Set the inner text for each element found
                elements.forEach(el => {
                    el.innerText = data[key] || ''; // Fallback to empty string if no data
                });
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



function updateFlag() {
    const selectedLanguage = document.querySelector('.dropdown-selected').innerText;
    const items_array = ["id11", "id14", "id17", "id19", "id21", "id23", "id25", "id27", "id28", "id46", "id48"];
    let flagImageUrl = "";

    switch (selectedLanguage) {
        case "English":
            flagImageUrl = 'https://flagsapi.com/US/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '16px';

                }
            });
            break;
        case "French":
            flagImageUrl = 'https://flagsapi.com/FR/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '15.1px';

                }
            });
            break;

        case "Spanish":
            flagImageUrl = 'https://flagsapi.com/ES/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '14.1px';

                }
            });
            break;

        case "German":
            flagImageUrl = 'https://flagsapi.com/DE/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '14.1px';

                }
            });
            break;

        case "Russian":
            flagImageUrl = 'https://flagsapi.com/RU/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '14.1px';

                }
            });
            break;

        case "Arabic":
            flagImageUrl = 'https://flagsapi.com/SA/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '14.1px';

                }
            });
            break;


        case "Italian":
            flagImageUrl = 'https://flagsapi.com/IT/flat/64.png';
            items_array.forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.style.fontSize = '14.1px';

                }
            });
            break;
        default:
            flagImageUrl = 'https://flagsapi.com/US/flat/64.png';
            break;
    }

    document.getElementById('flag-icon').src = flagImageUrl;
}
updateFlag();

// Auto slideshow functionality
const track = document.querySelector('.track');
const logos = Array.from(track.children);
const logoWidth = logos[0].getBoundingClientRect().width;
let currentIndex = 0;

const moveToNextLogo = () => {
    currentIndex = (currentIndex + 1) % logos.length;
    const amountToMove = logoWidth * currentIndex;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
};

const autoSlide = setInterval(moveToNextLogo, 3000);
track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => setInterval(autoSlide, 3000));

// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('icon');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        icon.setAttribute('name', 'moon');
    } else {
        icon.setAttribute('name', 'sunny-outline');
    }
});

const preloadDuration = 3000;

window.onload = function () {
    const preloader = document.querySelector('.loader_div');
    const content = document.querySelector('.content');

    document.body.classList.add('overflow');

    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.remove('overflow');
        content.style.display = 'block';
    }, preloadDuration);
};

// Scroll progress bar
window.onscroll = function () {
    const win = window.innerHeight;
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = doc.scrollHeight - win;

    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
};

// Offcanvas functionality
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const offcanvas = document.getElementById('offcanvas');
const offcanvasContent = offcanvas.querySelector('.offcanvas');

openBtn.addEventListener('click', () => {
    offcanvas.classList.remove('hidden');
    setTimeout(() => {
        offcanvasContent.classList.add('show');
    }, 10);
});

closeBtn.addEventListener('click', () => {
    offcanvasContent.classList.remove('show');
    offcanvasContent.addEventListener('transitionend', () => {
        offcanvas.classList.add('hidden');
    }, { once: true });
});

// Modal functionality
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Dropdown functionality
function toggleDropdown() {
    const options = document.getElementById('dropdown-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectLanguage(option) {
    const language = option.getAttribute('data-value');
    const languageText = option.innerText;
    document.querySelector('.dropdown-selected').innerText = languageText;

    changeLanguage(language);
    updateFlag();
    document.getElementById('dropdown-options').style.display = 'none';
}

document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.custom-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdown-options').style.display = 'none';
    }
});





