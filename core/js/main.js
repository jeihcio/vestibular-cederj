var casa = '';

function getDescricaoMateria(materia) {
    switch (materia.toString().toLowerCase()) {
        case 'portugues':
            return "Língua Portuguesa e Literatura Brasileira";
        case 'biologia':
            return "Biologia";
        case 'fisica':
            return "Física";
        case 'geografia':
            return "Geografia";
        case 'historia':
            return "História";
        case 'matematica':
            return "Matemática";
        case 'quimica':
            return "Química";
        case 'ingles':
            return "Língua Inglesa";
        case 'espanhol':
            return "Língua Espanhola";
        default:
            return "";
    }
}

function imprimirMateriaAno() {
    let materia = document.getElementsByClassName("materia");
    let ano = document.getElementsByClassName("ano");

    let url = window.location;
    let regex = new RegExp("[0-9]{4}\.[0-9]{1}\/.*\/");
    let descricao = regex.exec(url);
    let itens = descricao.toString().split("/");

    materia[0].innerHTML = getDescricaoMateria(itens[1]);
    ano[0].innerHTML = itens[0];
}

function imprimirPergunta() {

    var perguntaHTML = '',
        perguntaAleatoria = 0,
        qtdPerguntas = 0,
        ordemDasPerguntas = [],
        gerarOrdem = 0;

    /* Define a quantidade de perguntas que o array quiz irá ter -1 */
    qtdPerguntas = (function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    })(quiz);

    /* Perguntas do jogo 

       As perguntas do jogo estão num array chamado quiz que está
       no scopo globo da aplicação. Dentro do arquivo quiz.js

    */

    /* Escolhe Pergunta aleatoria */
    perguntaAleatoria = Math.floor(Math.random() * qtdPerguntas);

    if (perguntasJaSaiu.length == qtdPerguntas) {
        alert('Fim!');
        location.reload();
        return false;
    }

    while (perguntasJaSaiu.indexOf(perguntaAleatoria) >= 0) {
        perguntaAleatoria = Math.floor(Math.random() * qtdPerguntas);
    }

    /* Gerar ordem aleatórias das respostas */
    ordemDasPerguntas = [];
    for (var nI = 0; nI < 4; nI++) {

        gerarOrdem = Math.floor(Math.random() * 4);
        while (ordemDasPerguntas.indexOf(gerarOrdem) >= 0) {
            gerarOrdem = Math.floor(Math.random() * 4);
        }

        ordemDasPerguntas.push(gerarOrdem);

    }

    /* Monta HTML para imprimir na página */
    perguntaHTML = '<span>' + quiz[perguntaAleatoria].pergunta + '</span><br/><br/>' +

        '<form id="hp">' +
        '	<input type="radio" name="respostas" id="A" value=" ' + ordemDasPerguntas[0] + ' "> ' +
        '	<label for="A">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[0]] + '</label><br/>' +

        '	<input type="radio" name="respostas" id="B" value=" ' + ordemDasPerguntas[1] + ' "> ' +
        '	<label for="B">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[1]] + '</label><br/>' +

        '	<input type="radio" name="respostas" id="C" value=" ' + ordemDasPerguntas[2] + ' "> ' +
        '	<label for="C">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[2]] + '</label><br/>' +

        '	<input type="radio" name="respostas" id="D" value=" ' + ordemDasPerguntas[3] + ' "> ' +
        '	<label for="D">' + quiz[perguntaAleatoria].alternativas[ordemDasPerguntas[3]] + '</label><br/>' +

        '    <input type="hidden" name="respostaCorreta" value="' + quiz[perguntaAleatoria].resposta + '">' +
        '</form>';

    /* Adicionar a página */
    $("#scroll").html(perguntaHTML);

    /* Remover perguntas já realizadas do array para que na proxima vez
       que a função for chamada não repetir a pergunta 

       obs: Array global no arquivo quiz.js */
    perguntasJaSaiu.push(perguntaAleatoria);

    var valor = parseInt($('#perguntasRespondidas').text());
    $('#perguntasRespondidas').text(++valor);

}

function verResposta() {
    var respostaCerta = parseInt($('input[name=respostaCorreta]').val());
    $('input[name=respostas]').each(function() {
        if ($(this).val() == respostaCerta) {
            var id = $(this)[0].id,
                label = $('label[for=' + id + ']');
            label.css('color', 'red');
        }
    });
}

$(document).ready(function() {

    var repostaSelecionada = '',
        repostaCorreta = '';

    /* Imprimir a pergunta */
    imprimirPergunta();

    /* Imprimir a matéria e o ano da prova */
    imprimirMateriaAno();

    /* =============================================================================================
    ==============================================================================================*/

    $("#vassoura").click(function() {

        /* Verificar qual resposta foi selecionada */
        repostaSelecionada = $("input[name='respostas']:checked").val();
        repostaCorreta = $("input[name='respostaCorreta']").val();

        /* Verificar se alguma resposta foi selecionada */
        if (repostaSelecionada == undefined) {
            sweetAlert("Atenção", "Selecione uma resposta !", "error");
            return false;
        }

        if (repostaSelecionada.trim() == repostaCorreta) {
            sweetAlert({
                    title: "Parabéns",
                    text: "Resposta correta !",
                    type: "success"
                },
                function() {
                    imprimirPergunta();
                });

        } else
            sweetAlert("Errou", "Resposta errada !", "error");

    });
});