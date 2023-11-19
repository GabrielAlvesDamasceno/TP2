let $bDeveresEl = $("#b1");
let $bLivrosEl = $("#b2");
let $bCriadoresEl = $("#b3");
let $botoesEl = $("button");

let $inputCor = $('.cor');
let $body = $('body');

let $bSalvar = $('.salvar');
let $bCarregar = $('.carregar');

$bCriadoresEl.click(function () {
    window.location.href = 'criadores.html'
});

$bDeveresEl.click(function () {
    window.location.href = 'deveres.html'
});

$bLivrosEl.click(function () {
    window.location.href = 'livros.html'
});

$inputCor.change(function () {
    $body.css('background-color', $inputCor.val());
});

$bSalvar.click(function () {
    localStorage.setItem('cor', $inputCor.val());
});

$bCarregar.click(function () {
    $body.css('background-color', localStorage.getItem('cor'));
});