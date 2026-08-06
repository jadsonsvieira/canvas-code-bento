// Showroom Interactive Script - Canvas & Code
document.addEventListener('DOMContentLoaded', () => {
    // Hover micro-interactions for project cards
    const projectCards = document.querySelectorAll('.project-card, .deck-card, .comp-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(0, 240, 255, 0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        });
    });
});
