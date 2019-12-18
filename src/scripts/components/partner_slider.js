const button1 = document.getElementById('firstSlid');
const button2 = document.getElementById('secondSlid');
const button3 = document.getElementById('thirdSlid');

let firstSlid = document.querySelector('.firstSlid'); 
let secondSlid = document.querySelector('.secondSlid'); 
let thirdSlid = document.querySelector('.thirdSlid'); 

button1.onclick = function () {   
    firstSlid.style.display = 'inline-block';
    secondSlid.style.display = 'none';
    thirdSlid.style.display = 'none';
}

button2.onclick = function () {   
    firstSlid.style.display = 'none';
    secondSlid.style.display = 'inline-block';
    thirdSlid.style.display = 'none';
}

button3.onclick = function () {
    firstSlid.style.display = 'none';
    secondSlid.style.display = 'none';
    thirdSlid.style.display = 'inline-block';
}