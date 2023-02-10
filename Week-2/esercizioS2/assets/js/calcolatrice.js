const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const btnEq = document.getElementById('btnEq');
const btnReset = document.getElementById('btnReset');
const btnDot = document.getElementById('btnDot');
const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

// !!! IL CODICE CHE SEGUE E' FUNZIONANTE E FA USO DEL METODO EVAL(), TUTTAVIA, ESSENDO ESSO
//     PERICOLOSO, AVREI PREFERITO NON USARLO IN UN CONTESTO PROFESSIONALE.
//      PIU' IN BASSO, COMMENTATO, IL CODICE "NO-GOOGLE" .


btnEq.addEventListener('click', function() {
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
});

btn1.addEventListener('click', function() {
    document.getElementById('screen').value += 1;
});

btn2.addEventListener('click', function() {
    document.getElementById('screen').value += 2;
});

btn3.addEventListener('click', function() {
    document.getElementById('screen').value += 3;
});

btn4.addEventListener('click', function() {
    document.getElementById('screen').value += 4;
});

btn5.addEventListener('click', function() {
    document.getElementById('screen').value += 5;
});

btn6.addEventListener('click', function() {
    document.getElementById('screen').value += 6;
});

btn7.addEventListener('click', function() {
    document.getElementById('screen').value += 7;
});

btn8.addEventListener('click', function() {
    document.getElementById('screen').value += 8;
});

btn9.addEventListener('click', function() {
    document.getElementById('screen').value += 9;
});

btn0.addEventListener('click', function() {
    document.getElementById('screen').value += 0;
});

btnDot.addEventListener('click', function() {
    document.getElementById('screen').value += '.';
});

btnAdd.addEventListener('click', function() {
    document.getElementById('screen').value += '+';
});

btnSub.addEventListener('click', function() {
    document.getElementById('screen').value += '-';
});

btnMul.addEventListener('click', function() {
    document.getElementById('screen').value += '*';
});

btnDiv.addEventListener('click', function() {
    document.getElementById('screen').value += '/';
});

btnReset.addEventListener('click', function() {
    document.getElementById('screen').value = '';
});


/* !!! IL CODICE QUI DI SEGUITO FUNZIONA MALE, QUALCOSA FA, MA NON ABBASTANZA.
    VOGLIO COMUNQUE CONSEGNARLO POICHE' FRUTTO DEL MIO IMPEGNO, BEN PIU' ALTO
    DI QUANTO NE ABBIA MESSO NEL CODICE PRECEDENTE //

var screen = [];
var add = '+'
var sub = '-'
var mul = '*'
var div = '/'
var count = '';
var x ;
var y ;
var result;

btnEq.addEventListener('click', function() {
    screenReader();
    screenPrint();
});

function screenReader() {
    for (let i = 0; i < screen.length; i++) {
        count += screen[i];
        if (screen[i] === add || screen[i] === sub || screen[i] === mul || screen[i] === div){            
            count = parseInt(count);
            x = count;
            y = 0;                             // Ponendo y = 0 sbaglio sicuramente, l'ho inserito come "toppa" mentre ragiono.
                switch (screen[i]) {           // Mi sono ispirato all'esempio in classe della lezione sullo switch, tuttavia
                    case add:                  // quell'esempio prende in considerazione solo due numeri ben definiti in due input.
                        result = x + y;        // Sono quasi sicuro occorra .splice() e/o .pop() ma tendo ad incartarmi nell'aprire
                        break;                 // più e più cicli for. Come faccio ad inviduare potenzialmente infinite porzioni di array?  
                    case sub:
                        result = x - y;
                        break;
                    case mul:
                        result = x * y;
                        break;
                    case div:
                        result = x / y;
                        break;
                    default:
                        break;
                }
                console.log(result);
                count = result;
        }
    }
    console.log(count);
    return count;
};

function screenPrint() {
    document.getElementById('screen').value = count;
}

btn1.addEventListener('click', function() {
    screen.push(1);
    document.getElementById('screen').value += 1;
});

btn2.addEventListener('click', function() {
    screen.push(2);
    document.getElementById('screen').value += 2;
});

btn3.addEventListener('click', function() {
    screen.push(3);
    document.getElementById('screen').value += 3;
});

btn4.addEventListener('click', function() {
    screen.push(4);
    document.getElementById('screen').value += 4;
});

btn5.addEventListener('click', function() {
    screen.push(5);
    document.getElementById('screen').value += 5;
});

btn6.addEventListener('click', function() {
    screen.push(6);
    document.getElementById('screen').value += 6;
});

btn7.addEventListener('click', function() {
    screen.push(7);
    document.getElementById('screen').value += 7;
});

btn8.addEventListener('click', function() {
    screen.push(8);
    document.getElementById('screen').value += 8;
});

btn9.addEventListener('click', function() {
    screen.push(9);
    document.getElementById('screen').value += 9;
});

btn0.addEventListener('click', function() {
    screen.push(0);
    document.getElementById('screen').value += 0;
});

btnDot.addEventListener('click', function() {
    screen.push('.');
    document.getElementById('screen').value += '.';
});

btnAdd.addEventListener('click', function() {
    screen.push('+');
    document.getElementById('screen').value += '+';
});

btnSub.addEventListener('click', function() {
    screen.push('-');
    document.getElementById('screen').value += '-';
});

btnMul.addEventListener('click', function() {
    screen.push('*');
    document.getElementById('screen').value += '*';
});

btnDiv.addEventListener('click', function() {
    screen.push('/');
    document.getElementById('screen').value += '/';
});

btnReset.addEventListener('click', function() {
    screen = [];
    count = '';
    document.getElementById('screen').value = '';
});
*/