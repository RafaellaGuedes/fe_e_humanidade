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
            var minutos = Math.floor(sec / 60);
            var segundos = sec % 60;

            var minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
            var segundosFormatados = segundos < 10 ? '0' + segundos : segundos; 

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

    religion_exp.innerHTML = "O hinduísmo é uma antiga tradição religiosa que se originou na Índia, e sua história remonta a milhares de anos, tendo suas raízes nas antigas tradições védicas. Essa religião é dividida em várias tradições e escolas de pensamento. O hinduísmo é caracterizado pela pluralidade de deuses e deusas, rituais coloridos e significativos, e uma rica tradição literária de escrituras sagradas. Os principais objetivos do hinduísmo são alcançar a libertação espiritual (moksha), seguir o dever moral (dharma) e buscar a prosperidade material (artha)."

}

function restart() {
    window.location.href = "game.html";
}