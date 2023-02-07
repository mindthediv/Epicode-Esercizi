var nome1 = 'Aldo';
let object = 'cliente';
const pi = 3.14;

document.getElementById('concatena').innerHTML = nome1 + ', ' + object + ', ' + pi;

//

var tot = nome1 + ', ' + object + ', ' + pi;

document.getElementById('concatena2').innerHTML = tot;

//

var x = 'Mario';
var y = 'Carla';

document.getElementById('var').innerHTML = x;
document.getElementById('let').innerHTML = y;
document.getElementById('final').innerHTML = x;

document.getElementById('let2').innerHTML = x;
document.getElementById('let3').innerHTML = y;

{
    let x = y;
    document.getElementById('final2').innerHTML = x;
}

console.log(x);
//

var init = 15;
document.getElementById('iniziale').innerHTML += ' ' + init;

{
    let sum = init + 15;
    document.getElementById('valore1').innerHTML += ' ' + sum + ', ' + ++sum ;
}

{
    let sub = init - 10;
    document.getElementById('valore2').innerHTML += ' ' + sub + ', ' + --sub; 
}

{
    let mul = init * 3;
    document.getElementById('valore3').innerHTML += ' ' + mul;
}

{
    let div = init / 3;
    document.getElementById('valore4').innerHTML += ' ' + div;
}

var type = ( typeof init == 'number') ? 'è un numero' : 'non è un numero';
document.getElementById('valore5').innerHTML += ' ' + init + ' ' + type;

