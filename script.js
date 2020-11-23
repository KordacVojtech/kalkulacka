const btns = document.querySelectorAll('button');
const display = document.getElementById('display');
const equals = document.getElementById('equals')
const clear = document.getElementById('clear');
const procent = document.getElementById('procent');
const plusMinus = document.getElementById('plusMinus');

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

procent.addEventListener('click', function(){
    let value = eval((display.value)/100);
    display.value = value;
})

plusMinus.addEventListener('click', function(){
    let value = display.value;
    if(value[0]=='-'){
        value=value.substring(1);
        display.value = value;
    } else{
        let minus = '-';
        value = minus.concat(display.value);
        display.value = value;
    }
})
    

    
    
