function toggleAccordion(accordionId, button) {
    const content = document.getElementById(accordionId);
    const arrow = button.querySelector('svg');
    content.classList.toggle('show');
    arrow.classList.toggle('rotate-180');
}
window.onscroll = function () {
    var win = window.innerHeight;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
    var scrollHeight = doc.scrollHeight - win;

    var scrollPercent = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    document.getElementById("progress-bar").style.width = scrollPercent + "%"; // Update width
};