/* VIDEO */

let controler = document.getElementById("controler");
let texto2 = document.getElementById("texto-2")

texto2.addEventListener("mouseover", function(){
    controler.classList.remove("none");
});

texto2.addEventListener("mouseout", function(){
    controler.classList.add("none");
});

let retroceder = document.getElementById("retroceder")
let avancar = document.getElementById("avancar")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let mudo = document.getElementById("mudo")

retroceder.addEventListener("click", function(){
    video.currentTime -= 10;
})

avancar.addEventListener("click", function(){
    video.currentTime += 10;
})

play.addEventListener("click", function(){
    video.play();
})
pause.addEventListener("click", function(){
    video.pause()
})

/* Menu */
let menu = document.getElementById("menu");
let navmenu = document.getElementById("nav-menu");

menu.addEventListener("click", function(){
        navmenu.classList.toggle("hide")
})