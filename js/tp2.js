let $bDeveresEl = $("#b1");
let $bLivrosEl = $("#b2");
let $bCriadoresEl = $("#b3");
let $botoesEl = $("button");

let $inputCor = $('.cor');
let $body = $('body');

let $bSalvar = $('.salvar');
let $bCarregar = $('.carregar');

let mainEl = document.querySelector("main");

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

$('#biologia').click(function () {
    $('main').empty();
    $('<h1>Biologia</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<button id="incluir-dever">+</button>' +
        '</div>').appendTo(mainEl);
});

$('#filosofia').click(function () {
    $('main').empty();
    $('<h1>Filosofia</h1>').appendTo(mainEl);
});

$('#fisica').click(function () {
    $('main').empty();
    $('<h1>Física</h1>').appendTo(mainEl);
});

$('#geografia').click(function () {
    $('main').empty();
    $('<h1>Geografia</h1>').appendTo(mainEl);
});

$('#historia').click(function () {
    $('main').empty();
    $('<h1>História</h1>').appendTo(mainEl);
});

$('#idiomas').click(function () {
    $('main').empty();
    $('<h1>Idiomas</h1>').appendTo(mainEl);
});

$('#matematica').click(function () {
    $('main').empty();
    $('<h1>Matemática</h1>').appendTo(mainEl);
});

$('#portugues').click(function () {
    $('main').empty();
    $('<h1>Português</h1>').appendTo(mainEl);
});

$('#quimica').click(function () {
    $('main').empty();
    $('<h1>Química</h1>').appendTo(mainEl);
});

$('#outros').click(function () {
    $('main').empty();
    $('<h1>Outros</h1>').appendTo(mainEl);
});