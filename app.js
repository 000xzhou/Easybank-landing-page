const hamburger = document.querySelector("[data-hamburger]")

const navLinks = document.querySelector(".icon-li")
const bg = document.querySelector(".bg-thing")

hamburger.addEventListener("click", navMenu)
bg.addEventListener("click", navMenu)
function navMenu() {
    if (navLinks.style.display === "grid") {
        hamburger.setAttribute("Src", "images/icon-hamburger.svg")
        navLinks.style.display = "none"
        bg.classList.remove("bg")

    } else {
        hamburger.setAttribute("Src", "images/icon-close.svg")
        navLinks.style.display = "grid"
        bg.classList.add("bg")
        navLinks.classList.add("slide-bottom")
    }
}