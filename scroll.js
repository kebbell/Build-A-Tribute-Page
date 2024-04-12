// Get the header elements
const h3Elements = document.querySelectorAll('.year-box h3');

// Add the sticky class to each h3 element when it reaches its scroll position
function handleScroll() {
    h3Elements.forEach((h3) => {
        const rect = h3.getBoundingClientRect();
        if (rect.top <= 0) {
            h3.classList.add('sticky');
        } else {
            h3.classList.remove('sticky');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
