const btns = document.querySelectorAll('button');
const display = document.getElementById('display');
const equals = document.getElementById('equals')
const clear = document.getElementById('clear');
const procent = document.getElementById('procent');

for (let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        display.value += number
    })
}

clear.addEventListener('click', function(){
    display.value = '';
})


equals.addEventListener('click', function(){
    let value = eval(display.value);
    display.value = value;
})
    

    
    
