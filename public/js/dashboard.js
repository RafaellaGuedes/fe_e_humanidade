window.addEventListener('load', function() {
    obterDadosGrafico();
    obterDadosReligiao();
});

function alterarNome() {
    var nomeUsuario = document.getElementById(`nomeUsuario`)
    var descricao = sessionStorage.NOME_USUARIO;
    var nomeFormatado = descricao.toUpperCase();
    nomeUsuario.innerHTML = nomeFormatado;
}


function obterDadosGrafico(idUsuario) {

    var idUsuario = sessionStorage.ID_USUARIO;

    alterarNome();

    fetch(`/score/buscarUltimosPontos/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, idUsuario);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Pontuação',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.momento.split('T')[1].split('.')[0]);
        dados.datasets[0].data.push(registro.Pontos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'line',
        data: dados,
    };

    let myChart = new Chart(
        document.getElementById(`score_canvas`),
        config
    );

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function obterDadosReligiao() {

    fetch(`/religioes/ultimas`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarReligiao(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarReligiao(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let borderColors = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [],
            fill: false,
            borderColor: borderColors,
            backgroundColor: borderColors,
            tension: 0.1
        }]
    };

    const colorPalette = [
        'rgb(255, 99, 132)', 
        'rgb(54, 162, 235)', 
        'rgb(255, 206, 86)', 
        'rgb(75, 192, 192)', 
        'rgb(153, 102, 255)', 
        'rgb(255, 159, 64)',
        'rgb(0, 255, 127)', 
        'rgb(255, 0, 255)'
    ];

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.religiao);
        dados.datasets[0].data.push(registro.quantidade);

        let colorIndex = i % colorPalette.length;
        borderColors.push(colorPalette[colorIndex]);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    
    let myChart2 = new Chart(
        document.getElementById(`religion_canvas`),
        config
    );

}