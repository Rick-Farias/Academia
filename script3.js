// Controle do meu
let menu = document.getElementById("menu");
let navmenu = document.getElementById("nav-menu");
let container = document.getElementById("container");

menu.addEventListener("click", function(){
        navmenu.classList.toggle("hide")
        container.classList.toggle("teste")
})
//  Essa função mostra ao usuario que a quantidade de caracteres da senha é no minimo 8

let usuario = document.getElementById("usuario");
let senha1 = document.getElementById("senha-1");
let senha2 = document.getElementById("senha-2");
let btncadastro = document.getElementById("btn-cadastro");
let senhas = document.getElementById("senhas");

senhas.addEventListener("focusout",function(){
    let minimo = document.getElementById("minimo");
    let senha1v = senha1.value;
    let senha2v = senha2.value;

    let senha1l = senha1v.length;
    let senha2l = senha2v.length;
 
    if(senha1l , senha2l < 8){
        minimo.innerText = "Minimo 8 digitos";
    }else{
        minimo.innerText = "";
    }
    
} )

// Essa função controla a entrada de dados para que seja tudo correto
btncadastro.addEventListener("click", function(){
    let usuariov = usuario.value;
    var senha1v = senha1.value;
    var senha2v = senha2.value;

    let senha1l = senha1v.length;
    let senha2l = senha2v.length;

    if (senha1v , senha2v , usuariov == ""){

        alert("Usuario ou senha inválidos")

    }else if(senha1l , senha2l < 8){

        alert("Minimo de 8 caracteres")
    }else if(senha1v != senha2v){
        alert("As senhas não são compativeis")
    }else{
        alert("Cadastro realizado com sucesso")
    }
})


