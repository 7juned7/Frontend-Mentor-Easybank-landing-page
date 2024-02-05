const menu = document.querySelector(".menu")
const headerNav = document.querySelector(".header_nav")

menu.addEventListener("click", () => {
    headerNav.classList.toggle("display_none")

})