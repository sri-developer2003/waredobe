document.addEventListener("DOMContentLoaded", () => {
    // Side Navbar Functionality
    const sidenav = document.querySelector(".side-navbar");
    const sideCloseNav = document.querySelector(".side-navbar__close i");
    const menuToggle = document.querySelector(".navbar__menu-toggle");

    if (sideCloseNav && sidenav) {
        sideCloseNav.addEventListener("click", () => {
            sidenav.classList.remove("active"); // Hide the navbar
        });
    }

     if (menuToggle && sidenav) {
        menuToggle.addEventListener("click", () => {
            sidenav.classList.add("active"); // Show the navbar
        });
    }

    // New Arrival Carousel Scrolling
    const newArrivalContainer = document.querySelector(".newarrival");
    const leftButton = document.querySelector(".scroll-btn.left");
    const rightButton = document.querySelector(".scroll-btn.right");

    if (newArrivalContainer && leftButton && rightButton) {
        leftButton.addEventListener("click", () => {
            newArrivalContainer.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        });

        rightButton.addEventListener("click", () => {
            newArrivalContainer.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        });
    }

    // Product Search Functionality
    const searchInput = document.getElementById("search");
    const productItems = document.querySelectorAll(".featured__item");
    const productSection = document.querySelector(".featured__grid");

    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            const searchValue = event.target.value.toLowerCase();
            let matchFound = false;

            productItems.forEach((item) => {
                const productName = item.querySelector(".featured__name").textContent.toLowerCase();

                if (productName.includes(searchValue)) {
                    item.style.display = "block"; // Show the product
                    matchFound = true;
                } else {
                    item.style.display = "none"; // Hide the product
                }
            });

            // Check if any match was found
            let noMatchMessage = document.querySelector(".no-match-message");
            if (!matchFound) {
                if (!noMatchMessage) {
                    noMatchMessage = document.createElement("p");
                    noMatchMessage.classList.add("no-match-message");
                    noMatchMessage.textContent = "Oops, no products found.";
                    productSection.appendChild(noMatchMessage);
                }
            } else if (noMatchMessage) {
                noMatchMessage.remove();
            }
        });
    }
});






