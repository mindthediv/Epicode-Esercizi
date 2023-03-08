/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando 
console.log('esercizio al');/*la volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


console.log('ESERCIZIO 1');
/*    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself = 'Gabriele';
console.log(myself);

console.log('ESERCIZIO 2');
/*    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];
pets.forEach(el => console.log(el));


console.log('ESERCIZIO 3');
/*    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
let_pet = 'bunny';
pets.push(let_pet);

console.log('ESERCIZIO 4');
/*    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
console.log(pets.pop());

console.log('ESERCIZIO 5');
/*    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let shiftPush = (let_array) => { let_array.push(let_array.shift()); return let_array; }
console.log(shiftPush(pets));

console.log('ESERCIZIO 6');
/*    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
pets.forEach(el => el.startsWith('c') ? console.log(true) : console.log(false));

console.log('ESERCIZIO 7');
/*    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.map(el => el.licensePlate = 'Eu-it');
console.log(cars);


console.log('ESERCIZIO 8');
/*    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

let carPush = (a,b,c,d,e) => {
    let_car = {brand: a, model: b,color: c,trims: d,licensePlate: e};
    cars.push(let_car);
    return cars.length;
}
console.log(carPush('Volkswagen','Golf','black', ['Gt','kit'],'Eu-it'));

console.log('ESERCIZIO 9');
/*    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []

let trimsIn = (let_array) => {
cars.forEach(el => let_array.push(el.trims[0]));
return let_array;
};

console.log(trimsIn(justFirstTrims));


console.log('ESERCIZIO 10');/*
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
cars.forEach(el => el.color.length <= 4 ? console.log('Fizz') : console.log('Buzz'));

console.log('ESERCIZIO 11');/*
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
console.log(cars.filter(el => el.trims.length > 2)); 

console.log('ESERCIZIO 12');/*
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
cars.map(el => { el.model = el.brand +' '+ el.model; delete el.brand; })
console.log(cars);


console.log('ESERCIZIO 13');/*
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (numericArray[i] != 32) {
    console.log(numericArray[i]);
    i++;    
}

console.log('ESERCIZIO 14');/*
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let checkPos = (let_array) => {
    const alfa_it = [null,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let posArray = [];

for (let i = 0; i < let_array.length; i++) {
    for (let j = 0; j < alfa_it.length; j++) {
        switch (let_array[i] === alfa_it[j]) {
            case true:
                posArray.push(alfa_it.indexOf(alfa_it[j]));
                break;
            default:
                break;
        } 
    }
}
return posArray;
}

console.log(checkPos(charactersArray));
