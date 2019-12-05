
const hamburger = document.querySelector(".header__nav-hamburger");
const hMenu = document.querySelector(".header__menu");
const hMenuItem = document.querySelectorAll(".header__menu-link");

hamburger.addEventListener("click" , (e)=>{
    if(hMenu.classList.contains("active-drop")){
        hMenu.classList.remove("active-drop");
        hMenu.style.display = "none";
    }else {
        hMenu.classList.add("active-drop");
        hMenu.style.display = "flex";
    }
});

