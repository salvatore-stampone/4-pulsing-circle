const body = document.querySelector("body");
const firstCircle = document.querySelector(".first-circle");
const firstSpan = document.querySelector(".first-span");
const secondCircle = document.querySelector(".second-circle");

firstCircle.addEventListener("click", function () {
    body.style = "color: var(--dark-clr)";
    firstCircle.style = "box-shadow: none";
    firstSpan.style = "display: none;";
    secondCircle.style = "color: var(--secondary-clr); display: flex; animation: 2s innerPulse ease-in-out;";
})