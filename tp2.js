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

cheet('l a r a n j a', function () {
    $body.css('background-color', 'orange');
});

cheet('v e r m e l h o', function () {
    $body.css('background-color', 'red');
});

cheet('p r e t o', function () {
    $body.css('background-color', 'black');
});

cheet('v i a d o', function () {
    $body.css('background-color', 'hotpink');
});

cheet('p r e t o', function () {
    $body.css('background-color', 'black');
});

cheet('a z u l', function () {
    $body.css('background-color', 'blue');
});

cheet('v e r d e', function () {
    $body.css('background-color', 'green');
});

cheet('b r a n c o', function () {
    $body.css('background-color', 'white');
});

cheet('a m a r e l o', function () {
    $body.css('background-color', 'yellow');
});