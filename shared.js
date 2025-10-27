/**
 * Toggles the responsive class on the top navigation bar to display or hide the links on small screens.
 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * Initializes event listeners when the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Handles the footer dropdown menu functionality.
    const dropdowns = document.querySelectorAll(".footer-dropdown");

    dropdowns.forEach(drop => {
        const submenu = drop.querySelector(".footer-submenu");
        const arrow = drop.querySelector(".footer-arrow");

        if (submenu && arrow) {
            arrow.addEventListener("click", (e) => {
                // Prevent default link behavior
                e.preventDefault();

                // Toggle the display of the submenu
                const isOpen = submenu.style.display === "block";
                submenu.style.display = isOpen ? "none" : "block";

                // Toggle the 'open' class for arrow rotation
                drop.classList.toggle("open", !isOpen);
            });
        }
    });
});