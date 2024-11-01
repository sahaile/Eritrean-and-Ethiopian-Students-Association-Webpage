const posters = document.querySelectorAll('.opportunityBoardPoster');
const swipeThreshold = 60; 

posters.forEach(poster => {
    let touchStartX = 0;
    let touchEndX = 0;

    const dots = poster.querySelectorAll('.dot');

    poster.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    poster.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(poster);
    });

    function handleSwipe(poster) {
        const paragraph = poster.querySelector('.opportunityBoardPosterParagraph');
        const img = poster.querySelector('img');
        const figcaption = poster.querySelector('figcaption');

        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance < -swipeThreshold) { // Swipe left
            paragraph.style.opacity = '1';
            img.style.opacity = '0';
            figcaption.style.opacity = '0';
            updateActiveDot(1);
        } else if (swipeDistance > swipeThreshold) { // Swipe right
            paragraph.style.opacity = '0';
            img.style.opacity = '1';
            figcaption.style.opacity = '1';
            updateActiveDot(0);
        }
    }

    function updateActiveDot(activeIndex) {
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
});
