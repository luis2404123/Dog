document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector("header button");
    const targetSection = document.getElementById("info-section");

    if (scrollButton && targetSection) {
        scrollButton.addEventListener("click", () => {
            targetSection.scrollIntoView({
                behavior: "smooth", // Animiert das Scrollen
                block: "start" // Scrollt zum Anfang der Sektion
            });
        });
    } else {
        console.warn("Scroll-Button oder Zielsektion nicht gefunden!");
    }
});
