/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = (Math.floor(Math.random() * 20) +1);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name : 'Gabriele',
  surname : 'Pagliaricci',
  age : '24'
}
console.log(typeof me);
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['HTML', 'CSS', 'JavaScript'];
console.log(me.skills);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const pushSkill = () => {me.skills.push('Audio Manipulation'); return me.skills;}
console.log(pushSkill());
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
const popSkill = () => {me.skills.pop(); return me.skills;}
console.log(popSkill());
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {return Math.floor(Math.random() * 7);}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (a,b) => {if (a>b) {return a} else {return b}};
console.log(whoIsBigger(1,10)); console.log(whoIsBigger(40,4));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (string) => {return string.split(' ');}
console.log(splitMe('Sto completando il test'));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (string, boolean) => {
  if (boolean==true) {
    string = string.substr(1);
    return string;
    } else {
    string = string.substr(0,((string.length) - 1));
    return string;
    }}
console.log(deleteOne('esercizio',true)); console.log(deleteOne('esercizio',false)); 
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (string) => {
  let array = string.split(' ');
  console.log(array);
  console.log(parseInt('Questo'));
  for (let i = 0; i <= array.length; i++) {
      if (parseInt(array[i]) === NaN){
        array = array
      }else {                                             // !!! POSSIBILE SIA BUGGATO? QUESTO E' IL TERZO APPROCCIO CHE PROVO!   
        console.log(parseInt(array[i]));                  //      A RIGOR DI LOGICA FUNZIONA, E LO DIMOSTRA IL CONSOLE.LOG NELL'ELSE. 
        array.splice(i,1);                                //     TUTTAVIA SEMBRA DISCRIMINARE 'QUESTO','NE','USARE'.
    }
  }
  return array.join(' ');
}
console.log(onlyLetters('Questo è 1 esempio, ne avrei 3 o 4 da usare')); 
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (string) => {
  let arr = Array.from(string);
  if (arr.some(el => el=='@') && arr.some(el => el=='.')) {
    return 'Email valida.';
  } else {
    return  'Email non valida.'
  }
}
console.log(isThisAnEmail('utente@email.com')); console.log(isThisAnEmail('utenteemail.com')); console.log(isThisAnEmail('utente@emailcom'));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  today = new Date();
  switch (today.getDay()) {
    case 1 : return 'Oggi è lunedì';
    break;
    case 2 : return 'Oggi è martedì';
    break;
    case 3 : return 'Oggi è mercoledì';
    break;
    case 4 : return 'Oggi è giovedì';
    break;
    case 5 : return 'Oggi è venerdì';
    break;
    case 6 : return 'Oggi è sabato';
    break;
    case 0 : return 'Oggi è domenica';
    break;
    default:
      return 'Sei fuori dallo spazio-tempo';
  }
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (n) => {
  let _sum = 0;
  let _values = [];
  for (let i = 0; i <= n; i++) {
    _values.push(dice());
  }
  _sum = _values.reduce((a,b) => a+b)
  return { sum : _sum, values : _values }    
}
console.log(rollTheDices(4));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
var thatDate = new Date ('2023 02 01');
const howManyDays = (givenDate) => {
    let today = new Date();
    let pastMs = ( today.getTime() - givenDate.getTime());
    let pastDays = Math.floor(pastMs / (1000*60*60*24));
    return pastDays;
}
console.log(howManyDays(thatDate));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
var myBirthday = new Date ('1998 05 05');
const isTodayMyBirthday = (myBirthday) => {
    let today = new Date();
    let todaySum = (today.getMonth() + today.getDate());
    let myBirthdaySum = (myBirthday.getMonth() + myBirthday.getDate());
    return ((todaySum === myBirthdaySum) ? 'Oggi è il mio compleanno!' : 'Oggi non è il mio compleanno.');
}
console.log(isTodayMyBirthday(myBirthday));
/* ESERCIZIO 10
// Arrays & Oggetti

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
var artista = {nomeArtista: 'Gustav', cognomeArtista: 'Klimt', ambito: 'Pittura', operaFamosa: 'Il bacio'};
const deleteProp = (obj, prop) => { delete obj[prop]; return obj;}
console.log(deleteProp(artista,'operaFamosa'));

/*Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito. 
*/
const newestMovie = () => {
  let newest = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      newest = movies[i];
    }  
  }
  return newest.Title;
}
console.log(newestMovie());   
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () => {return movies.length;}
console.log(countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
var yrsArray = []
const onlyTheYears = () => {movies.forEach(el => yrsArray.push(el.Year)); return yrsArray;}
console.log(onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = () => {return movies.filter(el => el.Year.charAt('0') == '1');}
console.log(onlyInLastMillennium());
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = () => {return yrsArray.reduce((a,b) => parseInt(a)+parseInt(b));}
console.log(sumAllTheYears());
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (string) => { return movies.filter(el => el.Title.includes(string));}
console.log(searchByTitle('Avengers'));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (string) => {
  let obj = {match: [], unmatch: []} ;
  movies.forEach(el => (el.Title.includes(string)) ? obj.match.push(el) : obj.unmatch.push(el));
  return obj;
}
console.log(searchAndDivide('Avengers'));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) => {let moviesNless = movies; moviesNless.splice(n,1,undefined); return moviesNless;}
console.log(removeIndex(6));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
 var containerEl = document.getElementById('container');
 console.log(containerEl.textContent);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
var allTdArray = document.querySelectorAll('td');
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const allTdText = () => allTdArray.forEach(el => console.log(el.textContent));
allTdText();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const redBgLinks = () => document.querySelectorAll('a').forEach(el => el.style.backgroundColor = 'red');
redBgLinks();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addMyItem = () => { 
  let newItem = document.createElement('li'); newItem.textContent =  'nuovo elemento';
  document.getElementById('myList').appendChild(newItem);
}
addMyItem();
addMyItem();
addMyItem();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const clearList = () => document.getElementById('myList').textContent = '';
clearList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const testClass = () => document.querySelectorAll('tr').forEach(el => el.className = 'test');
testClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (n) => {
  let tree = [];
  let leaf = '*';
  for (let i = 1; i <= n; i++) {
    tree.push(leaf.repeat(i) + '\n');
  }
  dimmiDisi = tree.join('');
  return dimmiDisi;
}
console.log(halfTree(8));
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = (n) => {
  let tree = [];
  let leaf = '*';
  for (let i = 1; i <= n; i++) {
    tree.push(leaf.repeat(i) + '\n');
  }
  dimmiDisi = tree.join('');
  return dimmiDisi;
}
console.log(halfTree(8));
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
 const isItPrime = (n) => {
  switch (true) {
    case (n < 0) : return 'I numeri negativi non sono considerabili primi';
    break;
    case (n == 0) : return '0 non è considerabile un numero primo';
    break;
    case (n == 1) : return '1 non è considerabile un numero primo';
    break;
    case (n == 2) : return '2 è un numero primo';
    break;
    case (n == 3) : return '3 è un numero primo';
    break;
    case (n % 2 == 0): return `${n} non è un numero primo`;          // !!! SO CHE NON FUNZIONA CON NUMERI DIVISIBILI PER 5,7,11... es. 25, 21, 55..., ci torno dopo se riesco.
    break;
    case (n % 3 == 0): return `${n} non è un numero primo`;
    default:
      return `${n} è un numero primo`;
  }
}
 console.log(isItPrime(11)); console.log(isItPrime(7)); console.log(isItPrime(12)); console.log(isItPrime(8));
 console.log(isItPrime(19)); console.log(isItPrime(5)); console.log(isItPrime(20)); console.log(isItPrime(55));