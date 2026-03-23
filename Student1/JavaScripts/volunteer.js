document.addEventListener("DOMContentLoaded", function () {
    // Select all volunteer cards
    const cards = document.querySelectorAll(".volunteer-card");

    function showCards() {
        // Define the trigger height (80% of the viewport height)
        const triggerHeight = window.innerHeight * 0.8;

        // Loop through each card and check its position
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            // If the card is within the trigger height, add the "show" class
            if (cardTop < triggerHeight) {
                card.classList.add("show");
            }
        });
    }

    // Run the function when the user scrolls
    window.addEventListener("scroll", showCards);

    // Run once when the page loads to show any visible cards
    showCards();
});


