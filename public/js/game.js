const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game_board = document.querySelector('.game_board');
const start_box = document.querySelector('.start_box');
const over_box = document.querySelector('.over_box');
const religion_name = document.getElementById('religion_name');
const religion_exp = document.getElementById('religion_exp');
var sec = 0;
var pontuacaoVar = 0;
var timer;
var timer_txt = document.querySelector('.timer');
var pause = false;

timer = setInterval(() => {

    if (!pause) {
        var segundosFormatados = sec < 10 ? '0' + sec : sec;

        timer_txt.innerHTML = `00:${segundosFormatados}`;

        sec++;
    }

}, 1000)

function start() {
    sec = 0;
    pause = false;
    var game_over_called = false;
    game_board.style.display = 'block';
    start_box.style.display = 'none';
    over_box.style.display = 'none';

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }

    const loop = setInterval(() => {

        const pipe_position = pipe.offsetLeft;
        const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');


        if (pipe_position <= 120 && pipe_position > 0 && mario_position < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipe_position}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${mario_position}px`;

            mario.src = './assets/mario_over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            pause = true;
            pontuacaoVar = (sec - 1) * 3;

            if (!game_over_called) {
                game_over_called = true; 
                clearInterval(loop);
                setTimeout(() => {
                    game_over();
                    score();
                }, 2000);
            }
        }

    }, 10);


    document.addEventListener('keydown', jump);
}


var name_religion = [
    "protestantismo",
    "Catolicismo",
    "Candomblé",
    "Espiritismo",
    "Hinduísmo",
    "Islamísmo",
    "Umbanda",
    "Judaísmo",
    "Ateísmo",
    "Taoísmo",
    "Wicca"
];

var exp_religion = [
    "O protestantismo é uma vertente do cristianismo, ele enfatiza a autoridade das Escrituras Sagradas, a salvação pela fé em Jesus Cristo e o acesso direto de todos os fiéis a Deus, sem a necessidade de intermediários. Além disso, o protestantismo promove uma busca contínua pela reforma da igreja, buscando retornar às raízes do cristianismo primitivo. Existem muitas denominações e tradições dentro do protestantismo, cada uma com suas próprias ênfases doutrinárias e práticas, mas todas compartilham esses princípios fundamentais.",
    "O catolicismo é uma das principais vertentes do cristianismo, com uma história que remonta aos primeiros séculos da era cristã. Baseia-se na crença na Trindade (Deus Pai, Filho e Espírito Santo), na autoridade da Bíblia e na tradição da igreja, especialmente dos ensinamentos dos Padres da Igreja e das decisões dos concílios ecumênicos. O catolicismo reconhece o Papa como o líder espiritual máximo, considerando-o o sucessor de São Pedro e o representante de Cristo na Terra. Além disso, destaca-se pela prática dos sacramentos, como o batismo, a confirmação, a eucaristia, a penitência, a unção dos enfermos, a ordem e o matrimônio, vistos como canais de graça divina. A devoção aos santos, a veneração de Maria e a importância dos rituais litúrgicos também são características distintivas do catolicismo.",
    "O Candomblé é uma religião de matriz africana que se desenvolveu no Brasil, especialmente na região Nordeste, durante o período da escravidão. Baseia-se na adoração aos Orixás, divindades que representam forças da natureza, e na crença na comunicação com os ancestrais e espíritos da natureza. Os rituais do Candomblé incluem danças, cânticos, oferendas e cerimônias de iniciação, realizadas em templos chamados terreiros. Cada terreiro é dedicado a um Orixá principal e liderado por um sacerdote ou sacerdotisa conhecido como Pai ou Mãe de Santo. O Candomblé valoriza a ancestralidade, a natureza e a conexão espiritual com o sagrado, promovendo o equilíbrio entre corpo, mente e espírito.",
    "O Espiritismo é uma doutrina religiosa e filosófica que surgiu no século XIX, fundada pelo educador francês Allan Kardec. Baseia-se na crença na existência de Deus, na imortalidade da alma e na comunicação com os espíritos. Através da mediunidade, os espíritas acreditam que é possível estabelecer um contato entre o mundo material e espiritual, visando o progresso moral e intelectual. O Espiritismo prega a prática da caridade, da tolerância e da evolução espiritual através do estudo, da reflexão e da vivência dos ensinamentos de Jesus Cristo. Os centros espíritas são locais de reunião onde os praticantes realizam estudos doutrinários, sessões mediúnicas e atividades de assistência social. Essa doutrina tem uma visão universalista, buscando conciliar a ciência, a filosofia e a religião em busca do aprimoramento individual e coletivo.",
    "O hinduísmo é uma antiga tradição religiosa que se originou na Índia, e sua história remonta a milhares de anos, tendo suas raízes nas antigas tradições védicas. É baseada em textos sagrados como os Vedas e Upanishads, ensina a adoração de um ser supremo, Brahman, manifestado em várias deidades como Vishnu e Shiva. Caracteriza-se por crenças como karma (lei de causa e efeito) e samsara (ciclo de renascimento). Os hindus buscam a libertação espiritual (moksha), seguir o dever moral (dharma) e buscar a prosperidade material (artha) através de diferentes práticas, como conhecimento, devoção, ação correta e meditação. A religião é marcada por festivais e mitologia rica, com a pluralidade de deuses e deusas e rituais coloridos e significativos.",
    "O Islamismo é uma religião monoteísta abraâmica que se baseia nos ensinamentos do profeta Muhammad, registrados no Alcorão, o livro sagrado do Islã. Os seguidores do Islã, chamados muçulmanos, acreditam em um único Deus, Alá, e em Muhammad como seu último mensageiro. Os Cinco Pilares do Islã são fundamentais para a prática religiosa, incluindo a declaração de fé (Shahada), a oração cinco vezes ao dia (Salah), a caridade (Zakat), o jejum durante o mês do Ramadã (Sawm) e a peregrinação a Meca (Hajj), se possível. O Islã é conhecido por sua ênfase na justiça social, moralidade e comunidade. Ele tem uma rica tradição cultural, incluindo arte, arquitetura e música, influenciando muitas sociedades ao longo da história.",
    "A Umbanda é uma religião brasileira que combina elementos do espiritismo, das religiões indígenas africanas e ameríndias, do catolicismo e de outras crenças. Surgiu no Brasil no início do século XX e é caracterizada pela diversidade de práticas rituais, pela crença na comunicação com os espíritos e pelo culto aos Orixás, entidades espirituais que representam forças da natureza e aspectos da vida humana. Os terreiros de Umbanda são os locais de culto, onde são realizadas as sessões mediúnicas, os rituais de cura, as oferendas aos Orixás e os trabalhos espirituais para ajudar os fiéis em suas necessidades materiais, emocionais 	e espirituais. A Umbanda valoriza a caridade, a fraternidade, a harmonia com a natureza e a busca pela evolução espiritual, promovendo a união entre os seres humanos e o mundo espiritual.",
    "O Judaísmo é uma das mais antigas religiões monoteístas do mundo, baseada na fé e nas tradições do povo judeu. Seus ensinamentos são encontrados principalmente no Tanakh, que é a Bíblia Hebraica, e no Talmude, uma coleção de escritos rabínicos que interpretam e expandem as leis e os ensinamentos judaicos. O Judaísmo enfatiza a relação entre Deus e o povo judeu, e seu propósito é viver de acordo com a vontade divina expressa nos mandamentos e na ética religiosa. Alguns dos princípios fundamentais incluem a crença em um Deus único e indivisível, a observância do sábado (Shabat), a prática da circuncisão, a celebração de festivais como o Pessach (Páscoa) e o Yom Kipur (Dia do Perdão), entre outros rituais e tradições que permeiam a vida cotidiana dos judeus. O Judaísmo também tem uma rica história cultural, incluindo contribuições significativas para a arte, a literatura, a filosofia e a ciência.",
    "O ateísmo é a ausência de crença ou convicção na existência de divindades ou deuses. Os ateus não creem em um ser supremo ou em entidades sobrenaturais e, portanto, rejeitam as religiões e sistemas de crenças que envolvem a adoração ou devoção a uma divindade. Em vez disso, os ateus geralmente baseiam suas visões do mundo na razão, na evidência empírica e no pensamento crítico. O ateísmo pode assumir várias formas, desde a simples falta de crença em qualquer divindade até visões mais complexas que abordam questões éticas, morais e filosóficas. Algumas pessoas podem se identificar como ateias de forma explícita, enquanto outras simplesmente não se identificam com nenhuma religião ou sistema de crenças religiosas. O ateísmo tem sido uma parte significativa da história da filosofia, da ciência e da cultura em muitas sociedades ao longo do tempo, influenciando debates sobre moralidade, política, educação e outros aspectos da vida humana.",
    "O taoísmo é uma antiga tradição filosófica e religiosa originária da China, centrada no conceito de Tao, que pode ser traduzido como 'o Caminho' ou 'a Via'. O Tao representa a força fundamental que permeia e sustenta o universo, sendo uma fonte de harmonia e equilíbrio. O taoísmo enfatiza a simplicidade, a naturalidade, o fluxo espontâneo e a aceitação do mundo como ele é.Os praticantes do taoísmo buscam viver de acordo com os princípios do Tao, cultivando virtudes como a humildade, a compaixão e a não ação (Wu Wei), que não significa inatividade, mas sim agir de forma espontânea e em harmonia com o fluxo natural das coisas. O taoísmo também inclui práticas religiosas, como rituais, cerimônias e o culto aos ancestrais e divindades associadas ao Tao, como o Tao Te Ching e o Zhuangzi.",
    "A Wicca é uma religião neopagã que se baseia em tradições pré-cristãs, principalmente europeias, e incorpora elementos de magia, ritualismo e reverência à natureza. Os wiccanos adoram uma variedade de divindades, muitas vezes associadas à natureza, eles celebram o ciclo das estações e os rituais são frequentemente realizados em sintonia com as fases da lua. A prática da magia é um aspecto importante pois a magia wiccana é vista como uma forma de manifestar intenções positivas e promover o equilíbrio e a harmonia na vida pessoal e no mundo. Os wiccanos frequentemente formam grupos chamados covens, onde praticam rituais, estudam, e compartilham conhecimentos. A religião enfatiza a responsabilidade pessoal, o respeito pela natureza e a interconexão de toda a vida."
];

function randomItem(items) {
    var index = Math.floor(Math.random() * items.length);

    return items[index];
}

function game_over() {

    game_board.style.display = 'none';
    over_box.style.display = 'block';

    var religion_index = randomItem(name_religion);

    religion_name.innerHTML = religion_index;
    religion_exp.innerHTML = exp_religion[name_religion.indexOf(religion_index)];

}

function restart() {
    window.location.href = "game.html";
}

function score() {

    fetch("/score/cadastrar_score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pontuacaoServer: pontuacaoVar
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
        } else {
            console.log('Erro na resposta:', resposta.statusText);
        }

    }).catch(function (erro) {
        console.log('Erro no fetch:', erro);
    })
}