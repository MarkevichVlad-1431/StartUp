let photographicTape   = document.querySelector('.photographicTape');
const right            = document.getElementById('right');
const left             = document.getElementById('left');
let fotos              = document.querySelectorAll('.foto');
let sum                = 0;
let current            = 0;

for (let i = 0; i < fotos.length; i++) {
    sum++;
}

class Slaider{
    constructor(){
        let current = 0;
    }

    goLeft(){
        if (current >= (sum-6)) return;
        current++;
        photographicTape.style.left = current * -287 + 'px';
    }

    goRight(){
        if ( (current == 0) || (current < 0) ) return;
        --current;
        photographicTape.style.left = current * -287 + 'px';
    }
}

let slider = new Slaider();

right.onclick = slider.goLeft;
left.onclick = slider.goRight;
