// Smooth button interaction
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});
