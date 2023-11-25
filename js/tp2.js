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
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');
});

$('#filosofia').click(function () {
    $('main').empty();
    $('<h1>Filosofia</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');
});

$('#fisica').click(function () {
    $('main').empty();
    $('<h1>Física</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');
});

$('#geografia').click(function () {
    $('main').empty();
    $('<h1>Geografia</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'orange');
});

$('#historia').click(function () {
    $('main').empty();
    $('<h1>História</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'red');
});

$('#idiomas').click(function () {
    $('main').empty();
    $('<h1>Idiomas</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'palevioletred');
});

$('#matematica').click(function () {
    $('main').empty();
    $('<h1>Matemática</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'purple');
});

$('#portugues').click(function () {
    $('main').empty();
    $('<h1>Português</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');
});

$('#quimica').click(function () {
    $('main').empty();
    $('<h1>Química</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');
});

$('#outros').click(function () {
    $('main').empty();
    $('<h1>Outros</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');
});

$('#outros-livros').click(function () {
    $('main').empty();
    $('<h1>Outros</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');
});

$('#cientificos').click(function () {
    $('main').empty();
    $('<h1>Científicos</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');
});

$('#comedia').click(function () {
    $('main').empty();
    $('<h1>Comédia</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');
});

$('#drama').click(function () {
    $('main').empty();
    $('<h1>Drama</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'orange');
});

$('#fantasia').click(function () {
    $('main').empty();
    $('<h1>Fantasia</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'red');
});

$('#ficcao').click(function () {
    $('main').empty();
    $('<h1>Ficção Científica</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'palevioletred');
});

$('#infantis').click(function () {
    $('main').empty();
    $('<h1>Infantis</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'purple');
});

$('#romance').click(function () {
    $('main').empty();
    $('<h1>Romance</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');
});

$('#suspense').click(function () {
    $('main').empty();
    $('<h1>Suspense</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');
});

$('#terror').click(function () {
    $('main').empty();
    $('<h1>Terror</h1>').appendTo(mainEl);
    $('<div id="dever">' +
        '<input type="text" id="novo-dever" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');
});

let $deveres = [];

$(document).on('keyup', '#novo-dever', (function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        $('<li><label><input id="feito" type="checkbox">' + $('#novo-dever').val() + '</label></li>').appendTo($('#lista-deveres'));
        $deveres.push($("#novo-dever").val());
        $('#novo-dever').val() = ' ';
    }
}));