let a = ''; // first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

//Экран

const out = document.querySelector('.calc-screen p');

function clearAll(){
     a = ''; // first number
     b = ''; //second number
     sign = ''; // знак операции
     finish = false;
     out.textContent = 0; //Изначально отображаем 0
}

document.querySelector('.ac').onclick = clearAll;

const button = document.querySelector('.buttons')
button.addEventListener('click', BTN)
function BTN(event) {
    //Нажата не кнопка
    if(!event.target.classList.contains('btn')) return;


    //Нажата АС
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;//в кей заношу значение из кнопки

    //Нажата о-9
    if (digit.includes(key)) {
        // Если нет знака и второго числа нет. Первый кейс
        if (b ==='' && sign ===''){
        a+=key;
        console.log(a, b, sign);
        out.textContent = a;
        }
        //Финал
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;


        }
        // Второй кейс
        else {
            b = b + key;
            out.textContent = b;
        }
        console.log(a,b,sign);
        return
    }

    //Нажат знак
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a,b,sign)
        return;
    }


    //Нажата =
    if (key === '=') {
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;

        }
        finish = true;
        out.textContent = a;
        console.log(a,b,sign)
    }
}

