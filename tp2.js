let bDeveresEl = document.querySelector("#b1");
let bProvasEl = document.querySelector("#b2");
let bLivrosEl = document.querySelector("#b3");
let bCriadoresEl = document.querySelector("#b4");
let botoesEl = document.querySelectorAll("button")

bCriadoresEl.addEventListener('click', function(){
    window.location.href = 'criadores.html'
});

bDeveresEl.addEventListener('click', function(){
    window.location.href = 'deveres.html'
});

bProvasEl.addEventListener('click', function(){
    window.location.href = 'provas.html'
});

bLivrosEl.addEventListener('click', function(){
    window.location.href = 'livros.html'
});
