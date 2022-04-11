let display = document.getElementById('display');
let btn = document.querySelectorAll('button');

for(let i in btn) {
    btn[i].addEventListener('click', calc);
}

function calc(event) {
    let btnClicked = event.target.value;
    if(btnClicked === '='){
        display.value = eval(display.value);
    }else if(btnClicked === 'c'){
        display.value = '';
    }
    else{
        display.value += btnClicked;
    }
}