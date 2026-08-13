const starsContainer = document.getElementById("stars");

function createStars() {
    const starCount = window.innerWidth < 600 ? 90 : 150;

    starsContainer.innerHTML = "";

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 2 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            2 + Math.random() * 4 + "s";

        starsContainer.appendChild(star);
    }
}

createStars();

window.addEventListener("resize", () => {
    createStars();
});
