const menu_button = document.querySelector(".header__menu");

menu_button.addEventListener("click", () => {
    let menu = document.querySelector(".header__menu-mobile");
    setTimeout(() => {
        menu.style.opacity == 0? menu.style.opacity = 1 : menu.style.opacity = 0;
    }, 100)
});