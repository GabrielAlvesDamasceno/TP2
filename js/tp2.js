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
    $('<div id="dever-biologia">' +
        '<input type="text" id="novo-dever-biologia" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-biologia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');

    $(document).on('keyup', '#novo-dever-biologia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-biologia').val() + '</label></li>').appendTo($('#lista-deveres-biologia'));
            $deveresBiologia.push($("#novo-dever-biologia").val());
            localStorage.setItem('deveresBiologia', JSON.stringify($deveresBiologia));
            $("#novo-dever-biologia").val() = '';
        }
    }));

    let $deveresSalvosBiologia = localStorage.getItem('deveresBiologia');
    if ($deveresSalvosBiologia) {
        $deveresBiologia = JSON.parse($deveresSalvosBiologia);
        $deveresBiologia.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-biologia'));
        });
    }
});

$('#filosofia').click(function () {
    $('main').empty();
    $('<h1>Filosofia</h1>').appendTo(mainEl);
    $('<div id="dever-filosofia">' +
        '<input type="text" id="novo-dever-filosofia" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-filosofia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');

    $(document).on('keyup', '#novo-dever-filosofia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-filosofia').val() + '</label></li>').appendTo($('#lista-deveres-filosofia'));
            $deveresFilosofia.push($("#novo-dever-filosofia").val());
            localStorage.setItem('deveresFilosofia', JSON.stringify($deveresFilosofia));
            $("#novo-dever-filosofia").val() = '';
        }
    }));

    let $deveresSalvosFilosofia = localStorage.getItem('deveresFilosofia');
    if ($deveresSalvosFilosofia) {
        $deveresFilosofia = JSON.parse($deveresSalvosFilosofia);
        $deveresFilosofia.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-filosofia'));
        });
    }
});

$('#fisica').click(function () {
    $('main').empty();
    $('<h1>Física</h1>').appendTo(mainEl);
    $('<div id="dever-fisica">' +
        '<input type="text" id="novo-dever-fisica" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-fisica"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');

    $(document).on('keyup', '#novo-dever-fisica', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-fisica').val() + '</label></li>').appendTo($('#lista-deveres-fisica'));
            $deveresFisica.push($("#novo-dever-fisica").val());
            localStorage.setItem('deveresFisica', JSON.stringify($deveresFisica));
            $("#novo-dever-fisica").val() = '';
        }
    }));

    let $deveresSalvosFisica = localStorage.getItem('deveresFisica');
    if ($deveresSalvosFisica) {
        $deveresFisica = JSON.parse($deveresSalvosFisica);
        $deveresFisica.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-fisica'));
        });
    }
});

$('#geografia').click(function () {
    $('main').empty();
    $('<h1>Geografia</h1>').appendTo(mainEl);
    $('<div id="dever-geografia">' +
        '<input type="text" id="novo-dever-geografia" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-geografia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'orange');

    $(document).on('keyup', '#novo-dever-geografia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-geografia').val() + '</label></li>').appendTo($('#lista-deveres-geografia'));
            $deveresGeografia.push($("#novo-dever-geografia").val());
            localStorage.setItem('deveresGeografia', JSON.stringify($deveresGeografia));
            $("#novo-dever-geografia").val() = '';
        }
    }));

    let $deveresSalvosGeografia = localStorage.getItem('deveresGeografia');
    if ($deveresSalvosGeografia) {
        $deveresGeografia = JSON.parse($deveresSalvosGeografia);
        $deveresGeografia.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-geografia'));
        });
    }
});

$('#historia').click(function () {
    $('main').empty();
    $('<h1>História</h1>').appendTo(mainEl);
    $('<div id="dever-historia">' +
        '<input type="text" id="novo-dever-historia" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-historia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'red');

    $(document).on('keyup', '#novo-dever-historia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-historia').val() + '</label></li>').appendTo($('#lista-deveres-historia'));
            $deveresHistoria.push($("#novo-dever-historia").val());
            localStorage.setItem('deveresHistoria', JSON.stringify($deveresHistoria));
            $("#novo-dever-historia").val() = '';
        }
    }));

    let $deveresSalvosHistoria = localStorage.getItem('deveresHistoria');
    if ($deveresSalvosHistoria) {
        $deveresHistoria = JSON.parse($deveresSalvosHistoria);
        $deveresHistoria.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-historia'));
        });
    }
});

$('#idiomas').click(function () {
    $('main').empty();
    $('<h1>Idiomas</h1>').appendTo(mainEl);
    $('<div id="dever-idiomas">' +
        '<input type="text" id="novo-dever-idiomas" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-idiomas"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'palevioletred');

    $(document).on('keyup', '#novo-dever-idiomas', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-idiomas').val() + '</label></li>').appendTo($('#lista-deveres-idiomas'));
            $deveresIdiomas.push($("#novo-dever-idiomas").val());
            localStorage.setItem('deveresIdiomas', JSON.stringify($deveresIdiomas));
            $("#novo-dever-idiomas").val() = '';
        }
    }));

    let $deveresSalvosIdiomas = localStorage.getItem('deveresIdiomas');
    if ($deveresSalvosIdiomas) {
        $deveresIdiomas = JSON.parse($deveresSalvosIdiomas);
        $deveresIdiomas.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-idiomas'));
        });
    }
});

$('#matematica').click(function () {
    $('main').empty();
    $('<h1>Matemática</h1>').appendTo(mainEl);
    $('<div id="dever-matematica">' +
        '<input type="text" id="novo-dever-matematica" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-matematica"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'purple');

    $(document).on('keyup', '#novo-dever-matematica', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-matematica').val() + '</label></li>').appendTo($('#lista-deveres-matematica'));
            $deveresMatematica.push($("#novo-dever-matematica").val());
            localStorage.setItem('deveresMatematica', JSON.stringify($deveresMatematica));
            $("#novo-dever-matematica").val() = '';
        }
    }));

    let $deveresSalvosMatematica = localStorage.getItem('deveresMatematica');
    if ($deveresSalvosMatematica) {
        $deveresMatematica = JSON.parse($deveresSalvosMatematica);
        $deveresMatematica.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-matematica'));
        });
    }
});

$('#portugues').click(function () {
    $('main').empty();
    $('<h1>Português</h1>').appendTo(mainEl);
    $('<div id="dever-portugues">' +
        '<input type="text" id="novo-dever-portugues" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-portugues"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');

    $(document).on('keyup', '#novo-dever-portugues', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-portugues').val() + '</label></li>').appendTo($('#lista-deveres-portugues'));
            $deveresPortugues.push($("#novo-dever-portugues").val());
            localStorage.setItem('deveresPortugues', JSON.stringify($deveresPortugues));
            $("#novo-dever-portugues").val() = '';
        }
    }));

    let $deveresSalvosPortugues = localStorage.getItem('deveresPortugues');
    if ($deveresSalvosPortugues) {
        $deveresPortugues = JSON.parse($deveresSalvosPortugues);
        $deveresPortugues.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-portugues'));
        });
    }
});

$('#quimica').click(function () {
    $('main').empty();
    $('<h1>Química</h1>').appendTo(mainEl);
    $('<div id="dever-quimica">' +
        '<input type="text" id="novo-dever-quimica" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-quimica"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');

    $(document).on('keyup', '#novo-dever-quimica', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-quimica').val() + '</label></li>').appendTo($('#lista-deveres-quimica'));
            $deveresQuimica.push($("#novo-dever-quimica").val());
            localStorage.setItem('deveresQuimica', JSON.stringify($deveresQuimica));
            $("#novo-dever-quimica").val() = '';
        }
    }));

    let $deveresSalvosQuimica = localStorage.getItem('deveresQuimica');
    if ($deveresSalvosQuimica) {
        $deveresQuimica = JSON.parse($deveresSalvosQuimica);
        $deveresQuimica.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-quimica'));
        });
    }
});

$('#outros').click(function () {
    $('main').empty();
    $('<h1>Outros</h1>').appendTo(mainEl);
    $('<div id="dever-outros">' +
        '<input type="text" id="novo-dever-outros" autofocus placeholder="Adicione mais um dever...">' +
        '<ul id="lista-deveres-outros"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');

    $(document).on('keyup', '#novo-dever-outros', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-outros').val() + '</label></li>').appendTo($('#lista-deveres-outros'));
            $deveresOutros.push($("#novo-dever-outros").val());
            localStorage.setItem('deveresOutros', JSON.stringify($deveresOutros));
            $("#novo-dever-outros").val() = '';
        }
    }));

    let $deveresSalvosOutros = localStorage.getItem('deveresOutros');
    if ($deveresSalvosOutros) {
        $deveresOutros = JSON.parse($deveresSalvosOutros);
        $deveresOutros.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-outros'));
        });
    }
});

$('#outros-livros').click(function () {
    $('main').empty();
    $('<h1>Outros</h1>').appendTo(mainEl);
    $('<div id="dever-outros-livros">' +
        '<input type="text" id="novo-dever-outros-livros" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-outros-livros"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');

    $(document).on('keyup', '#novo-dever-outros-livros', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-outros-livros').val() + '</label></li>').appendTo($('#lista-deveres-outros-livros'));
            $deveresOutrosLivros.push($("#novo-dever-outros-livros").val());
            localStorage.setItem('deveresOutrosLivros', JSON.stringify($deveresOutrosLivros));
            $("#novo-dever-outros-livros").val() = '';
        }
    }));

    let $deveresSalvosOutrosLivros = localStorage.getItem('deveresOutrosLivros');
    if ($deveresSalvosOutrosLivros) {
        $deveresOutrosLivros = JSON.parse($deveresSalvosOutrosLivros);
        $deveresOutrosLivros.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-outros-livros'));
        });
    }
});

$('#cientificos').click(function () {
    $('main').empty();
    $('<h1>Científicos</h1>').appendTo(mainEl);
    $('<div id="dever-cientificos">' +
        '<input type="text" id="novo-dever-cientificos" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-cientificos"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');

    $(document).on('keyup', '#novo-dever-cientificos', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-cientificos').val() + '</label></li>').appendTo($('#lista-deveres-cientificos'));
            $deveresCientificos.push($("#novo-dever-cientificos").val());
            localStorage.setItem('deveresCientificos', JSON.stringify($deveresCientificos));
            $("#novo-dever-cientificos").val() = '';
        }
    }));

    let $deveresSalvosCientificos = localStorage.getItem('deveresCientificos');
    if ($deveresSalvosCientificos) {
        $deveresCientificos = JSON.parse($deveresSalvosCientificos);
        $deveresCientificos.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-cientificos'));
        });
    }
});

$('#comedia').click(function () {
    $('main').empty();
    $('<h1>Comédia</h1>').appendTo(mainEl);
    $('<div id="dever-comedia">' +
        '<input type="text" id="novo-dever-comedia" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-comedia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');

    $(document).on('keyup', '#novo-dever-comedia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-comedia').val() + '</label></li>').appendTo($('#lista-deveres-comedia'));
            $deveresComedia.push($("#novo-dever-comedia").val());
            localStorage.setItem('deveresComedia', JSON.stringify($deveresComedia));
            $("#novo-dever-comedia").val() = '';
        }
    }));

    let $deveresSalvosComedia = localStorage.getItem('deveresComedia');
    if ($deveresSalvosComedia) {
        $deveresComedia = JSON.parse($deveresSalvosComedia);
        $deveresComedia.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-comedia'));
        });
    }
});

$('#drama').click(function () {
    $('main').empty();
    $('<h1>Drama</h1>').appendTo(mainEl);
    $('<div id="dever-drama">' +
        '<input type="text" id="novo-dever-drama" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-drama"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'orange');

    $(document).on('keyup', '#novo-dever-drama', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-drama').val() + '</label></li>').appendTo($('#lista-deveres-drama'));
            $deveresDrama.push($("#novo-dever-drama").val());
            localStorage.setItem('deveresDrama', JSON.stringify($deveresDrama));
            $("#novo-dever-drama").val() = '';
        }
    }));

    let $deveresSalvosDrama = localStorage.getItem('deveresDrama');
    if ($deveresSalvosDrama) {
        $deveresDrama = JSON.parse($deveresSalvosDrama);
        $deveresDrama.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-drama'));
        });
    }
});

$('#fantasia').click(function () {
    $('main').empty();
    $('<h1>Fantasia</h1>').appendTo(mainEl);
    $('<div id="dever-fantasia">' +
        '<input type="text" id="novo-dever-fantasia" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-fantasia"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'red');

    $(document).on('keyup', '#novo-dever-fantasia', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-fantasia').val() + '</label></li>').appendTo($('#lista-deveres-fantasia'));
            $deveresFantasia.push($("#novo-dever-fantasia").val());
            localStorage.setItem('deveresFantasia', JSON.stringify($deveresFantasia));
            $("#novo-dever-fantasia").val() = '';
        }
    }));

    let $deveresSalvosFantasia = localStorage.getItem('deveresFantasia');
    if ($deveresSalvosFantasia) {
        $deveresFantasia = JSON.parse($deveresSalvosFantasia);
        $deveresFantasia.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-fantasia'));
        });
    }
});

$('#ficcao').click(function () {
    $('main').empty();
    $('<h1>Ficção Científica</h1>').appendTo(mainEl);
    $('<div id="dever-ficcao">' +
        '<input type="text" id="novo-dever-ficcao" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-ficcao"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'palevioletred');

    $(document).on('keyup', '#novo-dever-ficcao', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-ficcao').val() + '</label></li>').appendTo($('#lista-deveres-ficcao'));
            $deveresFiccao.push($("#novo-dever-ficcao").val());
            localStorage.setItem('deveresFiccao', JSON.stringify($deveresFiccao));
            $("#novo-dever-ficcao").val() = '';
        }
    }));

    let $deveresSalvosFiccao = localStorage.getItem('deveresFiccao');
    if ($deveresSalvosFiccao) {
        $deveresFiccao = JSON.parse($deveresSalvosFiccao);
        $deveresFiccao.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-ficcao'));
        });
    }
});

$('#infantis').click(function () {
    $('main').empty();
    $('<h1>Infantis</h1>').appendTo(mainEl);
    $('<div id="dever-infantis">' +
        '<input type="text" id="novo-dever-infantis" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-infantis"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'purple');

    $(document).on('keyup', '#novo-dever-infantis', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-infantis').val() + '</label></li>').appendTo($('#lista-deveres-infantis'));
            $deveresInfantis.push($("#novo-dever-infantis").val());
            localStorage.setItem('deveresInfantis', JSON.stringify($deveresInfantis));
            $("#novo-dever-infantis").val() = '';
        }
    }));

    let $deveresSalvosInfantis = localStorage.getItem('deveresInfantis');
    if ($deveresSalvosInfantis) {
        $deveresInfantis = JSON.parse($deveresSalvosInfantis);
        $deveresInfantis.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-infantis'));
        });
    }
});

$('#romance').click(function () {
    $('main').empty();
    $('<h1>Romance</h1>').appendTo(mainEl);
    $('<div id="dever-romance">' +
        '<input type="text" id="novo-dever-romance" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-romance"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'rgb(24, 94, 224)');

    $(document).on('keyup', '#novo-dever-romance', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-romance').val() + '</label></li>').appendTo($('#lista-deveres-romance'));
            $deveresRomance.push($("#novo-dever-romance").val());
            localStorage.setItem('deveresRomance', JSON.stringify($deveresRomance));
            $("#novo-dever-romance").val() = '';
        }
    }));

    let $deveresSalvosRomance = localStorage.getItem('deveresRomance');
    if ($deveresSalvosRomance) {
        $deveresRomance = JSON.parse($deveresSalvosRomance);
        $deveresRomance.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-romance'));
        });
    }
});

$('#suspense').click(function () {
    $('main').empty();
    $('<h1>Suspense</h1>').appendTo(mainEl);
    $('<div id="dever-suspense">' +
        '<input type="text" id="novo-dever-suspense" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-suspense"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', 'greenyellow');

    $(document).on('keyup', '#novo-dever-suspense', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-suspense').val() + '</label></li>').appendTo($('#lista-deveres-suspense'));
            $deveresSuspense.push($("#novo-dever-suspense").val());
            localStorage.setItem('deveresSuspense', JSON.stringify($deveresSuspense));
            $("#novo-dever-suspense").val() = '';
        }
    }));

    let $deveresSalvosSuspense = localStorage.getItem('deveresSuspense');
    if ($deveresSalvosSuspense) {
        $deveresSuspense = JSON.parse($deveresSalvosSuspense);
        $deveresSuspense.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-suspense'));
        });
    }
});

$('#terror').click(function () {
    $('main').empty();
    $('<h1>Terror</h1>').appendTo(mainEl);
    $('<div id="dever-terror">' +
        '<input type="text" id="novo-dever-terror" autofocus placeholder="Adicione mais um livro...">' +
        '<ul id="lista-deveres-terror"></ul>' +
        '</div>').appendTo(mainEl);
    $body.css('background-color', '#FFDE59');

    $(document).on('keyup', '#novo-dever-terror', (function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) {
            $('<li><label><input type="checkbox">' + $('#novo-dever-terror').val() + '</label></li>').appendTo($('#lista-deveres-terror'));
            $deveresTerror.push($("#novo-dever-terror").val());
            localStorage.setItem('deveresTerror', JSON.stringify($deveresTerror));
            $("#novo-dever-terror").val() = '';
        }
    }));

    let $deveresSalvosTerror = localStorage.getItem('deveresTerror');
    if ($deveresSalvosTerror) {
        $deveresTerror = JSON.parse($deveresSalvosTerror);
        $deveresTerror.forEach(function (dever) {
            $('<li class="list-item"><div class="checkbox"><label><input type="checkbox">' + dever + '</label></div></li>').appendTo($('#lista-deveres-terror'));
        });
    }
});

let $deveresBiologia = [];
let $deveresFilosofia = [];
let $deveresFisica = [];
let $deveresGeografia = [];
let $deveresHistoria = [];
let $deveresIdiomas = [];
let $deveresMatematica = [];
let $deveresPortugues = [];
let $deveresQuimica = [];
let $deveresOutros = [];

let $deveresOutrosLivros = [];
let $deveresCientificos = [];
let $deveresComedia = [];
let $deveresDrama = [];
let $deveresFantasia = [];
let $deveresFiccao = [];
let $deveresInfantis = [];
let $deveresRomance = [];
let $deveresSuspense = [];
let $deveresTerror = [];