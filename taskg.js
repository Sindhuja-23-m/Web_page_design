document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 2;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active", "prev", "next");
            if (index === currentIndex) {
                item.classList.add("active");
            } else if (index === currentIndex - 1) {
                item.classList.add("prev");
            } else if (index === currentIndex + 1) {
                item.classList.add("next");
            }
        });
    }

    document.querySelector(".next-btn").addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    document.querySelector(".prev-btn").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCarousel();
});
