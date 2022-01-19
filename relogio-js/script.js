let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// função para atualizar o relógio analógico
function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

}

function fixZero(time) {

    // 1ª forma
    // if(time < 10) {
    //     return '0' + time;
    // } else {
    //     return time;
    // }

    // 2º forma
    return time < 10 ? `0${time}` : time;

}

// setando um intervalo de 1000ms (1 segundo)
setInterval(updateClock, 1000);