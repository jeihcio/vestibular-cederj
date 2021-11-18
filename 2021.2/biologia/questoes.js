var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0;

quiz = {
    0: {
        pergunta: `<b>07.</b> As briófitas são pequenas plantas herbáceas (a
            maioria até 10 cm) representadas por três filos: hepáticas
            (filo Hepatophyta), musgos (filo Bryophyta) e antóceros
            (filo Anthocerophyta).<br/>
            Os pesquisadores acreditam que as hepáticas, os musgos e os antóceros foram as primeiras linhagens a divergirem do ancestral comum das plantas terrestres. Dessa
            forma, são consideradas as pioneiras na transição do
            ambiente aquático para o terrestre. No mundo, são conhecidas cerca de 17.900 espécies e, no Brasil, aproximadamente 2.950 espécies.
            <br/><br/>
            A característica que impede que esses vegetais consigam atingir uma grande estatura é`,

        alternativas: {
            /* A */
            0: 'a ausência de um gametófito como fase dominante',
            /* B */
            1: 'a ausência de vasos condutores',
            /* C */
            2: 'a presença de uma semente que protege o embrião.',
            /* D */
            3: 'a presença de um gameta masculino flagelado',
        },
        resposta: 1
    },

    1: {
        pergunta: `<b>08.</b> Coronavírus é uma família de vírus envelopados
        de RNA com senso positivo, responsável por provocar,
        em humanos, doenças respiratórias. Em 2019, a Organização Mundial da Saúde (OMS) foi alertada sobre
        vários casos de pneumonia causada por um novo coronavírus na cidade de Wuhan, na China. A nova cepa
        do vírus, atualmente identificada como SARS-CoV-2, se
        espalhou rapidamente para diversos países do mundo
        e, em março de 2020, a OMS declarou pandemia de
        COVID-19, a doença causada pelo novo coronavírus.<br/>
        O SARS-CoV-2 é capaz de infectar as células da via
        respiratória a partir da interação das espículas de glicoproteínas virais com os receptores de angiotensina 2
        (ACE2), como mostrado na figura abaixo
        
        <img src="images/1.png"/>
        
        <br/><br/>
        Após entrar nas células, o vírus libera o seu genoma
        que, por sua vez, comandará o processo de síntese das
        proteínas virais. Para que isso ocorra, é importante a
        participação de uma estrutura celular que está associada à síntese de proteína.

        <br/><br/>
        O componente celular envolvido nesse processo é`,

        alternativas: {
            /* A */
            0: 'o retículo endoplasmático rugoso',
            /* B */
            1: 'o lisossomo',
            /* C */
            2: 'o retículo endoplasmático liso',
            /* D */
            3: 'a mitocôndria',
        },
        resposta: 0
    },

    2: {
        pergunta: `<b>09.</b> A Árvore Solar é um produto criado pela empresa
        Sunew e é capaz de converter a luz do sol em energia
        elétrica. Isso é possível graças às placas compostas de
        filmes fotovoltaicos orgânicos (OPV), que permitem que
        essa tecnologia funcione como uma miniusina solar, mas
        em uma versão aperfeiçoada. Além de produzir energia
        elétrica de forma sustentável e ter um baixo custo, os
        materiais orgânicos são facilmente recicláveis quando
        chegam ao fim de sua vida útil. A energia elétrica produzida pela Árvore Solar pode ser utilizada para iluminação
        de locais públicos e, até mesmo, ser usada para carregar
        smartphones.<br/>
        
        <img src="images/2.png"/>
        
        <br/><br/>
        A Árvore Solar foi projetada para captar a energia luminosa e transformá-la em energia elétrica. O nome
        escolhido para essa tecnologia remete aos organismos
        autotróficos fotossintetizantes, como as plantas, que
        também têm a capacidade de absorver energia luminosa e transformá-la em uma nova forma de energia, através de um mecanismo chamado de fotossíntese.
        
        <br/><br/>
        Em relação à fotossíntese, uma substância essencial
        para esse processo, e sua respectiva função, é`,

        alternativas: {
            /* A */
            0: 'o gás oxigênio, para a geração deATP na fase clara',
            /* B */
            1: 'o gás carbônico, para a formação de O2 na fase escura',
            /* C */
            2: 'a água, para repor os elétrons perdidos pela clorofila na fase fotoquímica',
            /* D */
            3: 'a clorofila, para absorção de fótons durante a fase química',
        },
        resposta: 2
    },

    3: {
        pergunta: `<b>10.</b> A Universidade Federal de Minas Gerais (UFMG),
        em conjunto com instituições de ensino e pesquisa de
        diversos países, aderiu a um estudo para testar a eficácia e a proteção da vacina contra o vírus HIV. Esse vírus
        é o agente responsável pela Síndrome da Imunodeficiência Adquirida (AIDS), que é transmitido através de
        sangue, sêmen ou fluidos vaginais contaminados. No
        organismo humano, o vírus é capaz de infectar e destruir células do sistema imunológico, interferindo na capacidade do organismo de combater outras infecções.
        <br/>A vacina estudada pela UFMG e outros centros de pesquisa, além de ser segura para a população, tem como
        objetivo`,

        alternativas: {
            /* A */
            0: 'induzir uma imunidade passiva nos indivíduos através da inoculação de anticorpos específicos',
            /* B */
            1: 'induzir uma imunidade passiva nos indivíduos, estimulando a produção de anticorpos específicos',
            /* C */
            2: 'induzir um efeito inibitório na replicação viral, através da inoculação de medicamentos antivirais',
            /* D */
            3: 'induzir uma imunidade ativa nos indivíduos, estimulando a produção de anticorpos específicos.',
        },
        resposta: 3
    },

    4: {
        pergunta: `<b>11.</b> A sinalização química por hormônios é a função do
        sistema endócrino, um dos dois sistemas básicos para
        comunicação e regulação no corpo animal. Os hormônios produzidos por esse sistema são responsáveis por
        regular muitas propriedades corporais como pressão e
        volume sanguíneos, metabolismo de energia, concentrações de soluto nos líquidos corporais, crescimento e
        desenvolvimento, alterações físicas e comportamentais
        relacionadas à maturidade sexual, além de outros fatores. Dessa forma, a disfunção na produção e secreção
        de algum hormônio pode desencadear-se em sérios distúrbios.
        <br/>
        Dentre as doenças associadas a distúrbios na produção de hormônios, pode-se citar o feocromocitoma.
        Essa doença é causada por um tumor nas glândulas
        suprarrenais, que produz, em grandes concentrações,
        o hormônio adrenalina. A maioria dos sintomas encontrados em pacientes portadores de feocromocitoma é
        consequência direta do aumento na produção desse
        hormônio.
        <br/>
        Um efeito do aumento na produção de adrenalina é`,

        alternativas: {
            /* A */
            0: 'o aumento da frequência cardíaca.',
            /* B */
            1: 'a contração das pupilas.',
            /* C */
            2: 'o aumento do peristaltismo',
            /* D */
            3: 'a diminuição dos batimentos cardíacos',
        },
        resposta: 0
    },

    5: {
        pergunta: `<b>12.</b> O Pantanal, umas das maiores planícies sedimentares alagáveis do mundo, está localizado na bacia hidrográfica do Alto Paraguai. O bioma possui uma área de aproximadamente 150.355 km² (IBGE, 2021), estando entre os
        Estados de Mato Grosso e Mato Grosso do Sul, e ainda,
        ocupando uma pequena região da Bolívia e Paraguai.
        <br/>As inundações periódicas nos períodos de chuvas, ocasionadas pelas cheias do Rio Paraguai e seus afluentes, é o
        fenômeno ecológico mais significativo desse bioma. A biodiversidade faunística está representada por mais de 650
        espécies de aves; inúmeras espécies de peixes, mamíferos, répteis e, dentre os insetos, são mais de mil espécies
        de borboletas catalogadas.
        <br/>Apesar de o Pantanal ter sido, em 2000, considerado como
        a Reserva da Biosfera e Patrimônio Natural da Humanidade pela Unesco, a sua biodiversidade corre riscos. Toda
        sua vegetação vem sendo destruída, e as queimadas são
        as principais responsáveis por isso.
        <br/>Em 2020, foram registrados mais de 15 mil focos de incêndios no Pantanal, o que ocasionou a destruição de milhões
        de hectares do bioma.
        <br/>O período extremante seco e as altas temperatura contribuem para as queimadas, mas uma significativa parte dos
        focos de incêndio é causada por ações antrópicas ilegais
        com objetivo de remover a vegetação nativa e substituir por
        pastagem.
        <small>Fonte: https://www.bbc.com/portuguese/brasil-53662968. Acesso em: 25/05/21
        (adaptado)</small><br/>
        Um dos fatores associados à falta de chuva no Pantanal
        e em outros biomas brasileiros é`,

        alternativas: {
            /* A */
            0: 'a intensificação do processo de lixiviação e perda dos nutrientes no solo ',
            /* B */
            1: 'a diminuição do processo de desertificação das florestas tropicais',
            /* C */
            2: 'o desmatamento da Amazônia, diminuindo a corrente de umidade que surge na floresta',
            /* D */
            3: 'a intensificação dos processos erosivos por interferências antrópicas',
        },
        resposta: 2
    }
}