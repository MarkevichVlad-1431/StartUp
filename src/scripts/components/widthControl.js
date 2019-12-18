const widthOutput = document.querySelector('#width');
let ul = document.querySelector('.menu > ul');

if(document.documentElement.clientWidth < 769){
    ul.classList.add('closeMenu');
}

//catch width changes
function resize() {
  let width = window.innerWidth;

  if (width > '769') {
    ul.classList.remove('openMenu');
    ul.classList.remove('closeMenu');
  } else{
    ul.classList.add('closeMenu');
  }
}

window.onresize = resize;
