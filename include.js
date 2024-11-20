// js/include.js

function includeCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}

function includeJS(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.head.appendChild(script);
}

// Include Tailwind CSS (Production version)
includeJS('https://cdn.tailwindcss.com');

// Include Ionicons JS (ESM version and non-module version for older browsers)
includeJS('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js');
includeJS('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js');

// Optionally, you can add the custom CSS file too.
includeCSS('index.css');
