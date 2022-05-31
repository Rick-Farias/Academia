let menu = document.getElementById("menu");
let navmenu = document.getElementById("nav-menu");
let container = document.getElementById("container");

menu.addEventListener("click", function(){
        navmenu.classList.toggle("hide")
        container.classList.toggle("teste")
})