//document.querySelector(".header__burger").addEventListener("click", () =&gt; {
//    document.querySelector(".top-menu").classList.toggle("show-menu");
//});

document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");

    burgerButton.addEventListener("click", () => {
        nav.classList.toggle("header__nav--active");
    });
});
