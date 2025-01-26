let currentPosition = 0;
const cardWidth = 200 + 10; // Card width + margin (200px + 10px)
const visibleCards = 5; // Number of cards visible at a time
const totalCards = 10; // Total number of cards in the carousel
const track = document.getElementById('carousel-track');

// Move carousel to the left (if not already at the start)
function moveLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}

// Move carousel to the right (if not already at the end)
function moveRight() {
    if (currentPosition < totalCards - visibleCards) {
        currentPosition++;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}

// Select all the FAQ questions
const faqEntries = document.querySelectorAll('.faq-entry');

faqEntries.forEach(faqEntry => {
    // Add click event listener to each faq-entry
    faqEntry.addEventListener('click', () => {
        // Toggle the 'active' class to show or hide the faq-answer
        faqEntry.classList.toggle('active');

        // Change the toggle icon between + and -
        const toggleIcon = faqEntry.querySelector('.toggle-icon');
        toggleIcon.textContent = faqEntry.classList.contains('active') ? '-' : '+';
    });
});