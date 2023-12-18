const menuBtn = document.getElementById("menu")
const closeBtn = document.getElementById("close")
const navList = document.querySelector(".nav-list")

menuBtn.addEventListener("click", () => {
    console.log('click');
    menuBtn.style.display = "none"
    closeBtn.style.display = "block"
    navList.style.display = "flex"

})

console.log(navList);

closeBtn.addEventListener("click", () => {
    menuBtn.style.display = "block"
    navList.style.display = "none"
    closeBtn.style.display = "none"


})