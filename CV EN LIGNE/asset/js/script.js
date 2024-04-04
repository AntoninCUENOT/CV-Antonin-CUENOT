document.addEventListener("DOMContentLoaded", function() {
    const h2Link = document.querySelector("h2 a");
    const animationContainer = document.getElementById("animation-container");
    const h2 = document.querySelector("h2");

    h2Link.addEventListener("click", function(event) {
        event.preventDefault();
        h2.style.display = "none"; // Faire disparaître le h2
        animationContainer.classList.remove("animation-hidden");
    });

    animationContainer.addEventListener("click", function() {
        animationContainer.classList.add("animation-hidden");
        h2.style.display = "block"; // Faire réapparaître le h2 après la disparition de l'animation
    });

    const h1Element = document.querySelector("h1");
    const skillsContainer = document.querySelector(".skills");
    const header = document.querySelector("header");
    const otherContent = document.querySelectorAll("body > :not(header):not(.skills)");

    h1Element.addEventListener("click", function() {
        // Cacher tous les autres contenus sauf le header et les compétences
        otherContent.forEach(element => {
            if (element !== skillsContainer && element !== header) {
                element.style.display = "none";
            }
        });

        // Afficher le savoir-être et le savoir-faire
        skillsContainer.style.display = "flex";
    });

    skillsContainer.addEventListener("click", function() {
        // Faire réapparaître le h1 et le h2
        h1Element.style.display = "block";
        h2.style.display = "block";
        skillsContainer.style.display = "none";
    });
});
