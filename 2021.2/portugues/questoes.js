var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0;

var text01 = `<h3>Texto I</h3><br/>
A diferença entre ciência e fé é a seguinte: em ciência,
a gente tem que ver para crer. Você observa a natureza, você observa o mundo, obtém dados sobre como o
mundo funciona, analisa esses dados e entende. Pela
fé, você crê para ver. A crença vem antes da visão.
Você acredita naquilo, nem precisa ver nada, acredita
naquilo e esse, essencialmente, é o cerne da fé, que é
uma outra maneira de se relacionar com a realidade,
muito diferente da ciência.<br/>
Infelizmente, hoje em dia, parece que essa questão
está novamente a mil com a chamada ‘guerra’ entre
a ciência e a religião. Na verdade, essa é uma guerra
fabricada, porque, por exemplo, se você pergunta aos
cientistas, mais ou menos 40% deles, ao menos nos
Estados Unidos — não sei se existe essa estatística
no Brasil, talvez seja até maior aqui —, acreditam em
alguma forma de divindade, de Deus.<br/>
(...)<br/>
Para esses cientistas, existe um compromisso, uma
complementaridade entre o seu trabalho e a sua fé. Não
existe nenhum problema nesse caso. Mas, infelizmente,
existe conflito em outras situações.<br/>
(...)<br/>
A criança aprende numa aula que houve toda uma evolução da vida, os fósseis etc., 3,5 bilhões de anos de
evolução da vida aqui na Terra enquanto, na outra aula,
o professor diz que não. Que em seis dias Deus fez o
mundo, que nós somos todos descendentes de Adão e
Eva e o mundo tem apenas dez mil anos.<br/>
Note que a proposta é que isso seja ensinado em pé de
igualdade. São duas versões da mesma história e nenhuma é melhor do que a outra. Mas são, sim, duas histórias muito diferentes, com um objetivo muito diferente.
Então, a questão é como é construída a informação na
ciência.<br/>
(...) Não existe a possibilidade de um cientista afirmar:
eu acho que esse pedaço de osso aqui tem três milhões
de anos. Você sabe que tem três milhões de anos, com
grande precisão.<br/>
(...)<br/>
<small>Disponível em https://www.fronteiras.com/artigos/21-ideias-marcelo-gleiser-ea-complementaridade-entre-religiao-e-ciencia - adaptado. Acesso em: 05 de
maio de 2021</small>
<br/><br/>`;

var text02 = `<h3>Texto II</h3><br/>
<h4>Sujeito de Sorte</h4>
<small>Belchior</small>
Presentemente eu posso me<br/>
Considerar um sujeito de sorte<br/>
Porque apesar de muito moço<br/>
Me sinto são, e salvo, e forte.<br/>
E tenho comigo pensado<br/>
Deus é brasileiro e anda do meu lado<br/>
E assim já não posso sofrer<br/>
No ano passado.<br/>
Tenho sangrado demais<br/>
Tenho chorado pra cachorro<br/>
Ano passado eu morri<br/>
Mas esse ano eu não morro<br/>
(...)<br/>
<small>Disponível em https://www.letraz.com.br/belchior/sujeito-de-sorte/. Acesso em:
04 de maio de 2021</small>
<br/><br/>`;

quiz = {
    0: {
        pergunta: text01 +
            `<b> 01. </b> O texto I estabelece uma relação entre ciência e
            religião.De acordo com o autor,
            é possível afirmar que
            tanto a ciência quanto a religião são `,

        alternativas: {
            /* A */
            0: 'visões numéricas, logo precisam ser respeitadas.',
            /* B */
            1: 'pontos de vista equivalentes, portanto, indiscutíveis.',
            /* C */
            2: 'olhares distintos, porém sem o aspecto belicoso.',
            /* D */
            3: 'noções inviáveis como teorias universais, mas importantes.',
        },
        resposta: 2
    },

    1: {
        pergunta: text01 +
            `<b>02.</b> <i>“A criança aprende numa aula que houve toda uma
            evolução da vida, os fósseis etc., 3,5 bilhões de anos de
            evolução da vida aqui na Terra enquanto, na outra aula,
            o professor diz que não.”</i>
            <br/><br/>
            O fragmento em destaque sinaliza uma estratégia argumentativa com base em`,

        alternativas: {
            /* A */
            0: 'adição',
            /* B */
            1: 'exemplo',
            /* C */
            2: 'estatística',
            /* D */
            3: 'autoridade',
        },
        resposta: 1
    },

    2: {
        pergunta: text01 +
            `<b>03.</b> <i>“Você sabe que tem três milhões de anos, com
            grande precisão.”</i><br/><br/>
            No fragmento em destaque, assim como em outras
            passagens do texto I, percebe-se o uso do “você”.<br/><br/>
            O objetivo do uso desse pronome de tratamento é `,

        alternativas: {
            /* A */
            0: `estabelecer uma aproximação maior com o leitor, de
            modo a fazer com que haja uma sensação de interação
            no texto`,
            /* B */
            1: ` definir uma participação obrigatória do leitor, a fim
            de que ele construa uma opinião sobre o fato em discussão e se expresse`,
            /* C */
            2: `determinar uma relação de lugar de fala ao leitor
            que, por sua vez, se sente comprometido com o debate
            em foco`,
            /* D */
            3: `eleger o leitor como referência entre o enunciador e
            a mensagem pretendida, para que ele possa mediar o
            debate e opinar`,
        },
        resposta: 0
    },

    3: {
        pergunta: text01 +
            `<b>04.</b> O texto I é um artigo de opinião de natureza jornalística. Dessa forma, é possível afirmar que a função da
            linguagem predominante no texto é a`,

        alternativas: {
            /* A */
            0: 'emotiva',
            /* B */
            1: 'referencial',
            /* C */
            2: 'metalinguística',
            /* D */
            3: 'fática',
        },
        resposta: 1
    },

    4: {
        pergunta: text02 +
            `<b>05.</b> <i>“Ano passado eu morri
            Mas esse ano eu não morro.”</i> <br/><br/>
            
            A relação entre os versos destacados do texto II, com
            base na presença da conjunção “mas”, define um valor
            semântico de`,

        alternativas: {
            /* A */
            0: 'oposição',
            /* B */
            1: 'adição',
            /* C */
            2: 'consequência',
            /* D */
            3: 'tempo',
        },
        resposta: 0
    },

    5: {
        pergunta: text02 +
            `<b>06.</b> <i>“Me sinto são, e salvo, e forte.” </i>
            <br/><br/>
            No verso em destaque, percebe-se a repetição da conjunção “e”.<br/>
            Tal recurso linguístico tem uma função dentro do texto II,
            que se traduz como o objetivo de se`,

        alternativas: {
            /* A */
            0: `convencer o leitor sobre a negligência do eu lírico,
            ainda que o texto demonstre o contrário`,
            /* B */
            1: `promover autoconfiança por parte do coenunciador,
            apesar do contexto em discussão`,
            /* C */
            2: `impor as características do coenunciador, embora o
            quadro não valorize esses aspectos sentimentais`,
            /* D */
            3: `reforçar as sensações do eu lírico, mesmo que o
            contexto traga à tona muitas dificuldades`,
        },
        resposta: 3
    },
}