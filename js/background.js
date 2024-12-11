function createBackgroundGrid() {
    const grid = document.querySelector('.background-grid');
    const numIcons =128; // 8x8 grid

    for (let i = 0; i < numIcons; i++) {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', 'bot');
        icon.classList.add('grid-icon');
        // Alternate animation delay for more natural movement
        icon.style.animationDelay = `${(i * 0.2) % 2}s`;
        grid.appendChild(icon);
    }

    // Initialize the icons after adding them
    lucide.createIcons();
}

// Initialize background when the DOM is loaded
document.addEventListener('DOMContentLoaded', createBackgroundGrid);