const hamburger = document.querySelector(".hamburger");
const items = document.querySelector(".items");
const menuactive = document.querySelector(".menu-active");
const row = document.querySelector(".row");

hamburger.addEventListener("click", () => {
    menuactive.style.display = "block";
    menuactive.style.left = "3%";
    menuactive.style.position = "absolute";
    row.style.display = "none";
})

