const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;

let active = false;

let idI;

const timer = ()=> {
    if(!active) {
        active = true;
        btnTime.textContent = 'STOP';
        idI = setInterval(start, 10);
    } else if (active) {
        active = false;
        btnTime.textContent = 'START'
        clearInterval(idI);

    }
}

const reset = ()=> {
    time = 0;
    clearInterval(idI);
    panel.textContent = '---';
    btnTime.textContent = 'START';
    active = false;
}

const start = ()=> {
    time++;
    panel.textContent = (time/100).toFixed(2);
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);