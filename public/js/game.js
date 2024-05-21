const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game_board = document.querySelector('.game_board');
const start_box = document.querySelector('.start_box');
const over_box = document.querySelector('.over_box');
const religion_exp = document.getElementById('religion_exp');

function start() {

    game_board.style.display = 'block';
    start_box.style.display = 'none';
    over_box.style.display = 'none';

    var timer;
    var timer_txt = document.querySelector('.timer');
    var sec = 0;
    var pause = false;

    timer = setInterval(() => {

        if (!pause) {
            var minutos = Math.floor(sec / 60); // Calcula os minutos
            var segundos = sec % 60; // Calcula os segundos

            var minutosFormatados = minutos < 10 ? '0' + minutos : minutos; // Formata os minutos com zero à esquerda, se necessário
            var segundosFormatados = segundos < 10 ? '0' + segundos : segundos; // Formata os segundos com zero à esquerda, se necessário

            timer_txt.innerHTML = `${minutosFormatados}:${segundosFormatados}`;

            sec++;
        }

    }, 1000)


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
            
            setTimeout(() => {
                clearInterval(loop);
                game_over();
            }, 2000);
        }
        
    }, 10);
    
    document.addEventListener('keydown', jump);
}

function game_over() {

    game_board.style.display = 'none';
    over_box.style.display = 'block';

    religion_exp.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi omnis quidem eveniet, illum deserunt placeat perspiciatis earum provident veritatis. Cum dolor dolorem commodi. Animi consectetur ullam minima aliquid amet maxime, sequi blanditiis aspernatur facilis, possimus exercitationem sint dolores adipisci nisi perspiciatis commodi quas officiis, voluptates inventore facere labore non vitae! Impedit quisquam dolores nostrum provident ducimus natus sint praesentium adipisci odit deserunt non magnam laboriosam voluptatibus ipsum quod et quo, amet soluta placeat atque esse tempore fuga porro! Id nostrum rem incidunt laboriosam natus recusandae neque vero quod tempore, soluta cumque fugit quas facilis culpa voluptatem tempora mollitia qui quam."

}

function restart() {
    window.location.href = "game.html";
}