var quiz = new Array(),
    perguntasJaSaiu = new Array(),
    contador = 0;

quiz = {
    0: {
        pergunta: `<b>Está</b> errado <br/>
		afirmar sobre o ZBuffer <br/>
		
		<img src="images/1.png"/>`,

        alternativas: {
            0: 'Tem a mesma resolução do Frame Buffer',
            1: 'É usado no Raytracing',
            2: 'Pode ser inicializado com infinito em cada elemento',
            3: 'Está dentro do estágio de rasterização',
        },
        resposta: 1
    }
}