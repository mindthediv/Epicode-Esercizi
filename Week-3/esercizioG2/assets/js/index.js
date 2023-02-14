/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
var strManipulation = (str1,str2) => {
  let new1 = str1.substr(0,2);
  let new2 = str2.substr(-3);
  console.log(new2);
  let strTot = new1.concat(new2);
  return strTot.toUpperCase();
}
console.log(strManipulation('ciao','hello'));
/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
var oddArray = () => {
  let oddArray = [];
  for (let i = 1; i <= 100; i++) {
    let even = i % 2
    if (even != 0) {
    oddArray.push(i);
    } else {
      even = even;
    }
  }
  return oddArray
  }
console.log(oddArray());
/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
  var fiveArray = () => {
    let fiveArray = [];
    for (let i = 1; i <= 100; i++) {
      let five = i % 5
      if (five === 0) {
      fiveArray.push(i);
      } else {
        five = five;
      }
    }
    return fiveArray
    }
  console.log(fiveArray());
/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
var randomArray = () => {
  let rndArray = [];
  for (let i = 1; i <= 10; i++) {
    rndArray.push(Math.floor(Math.random() * 100) + 1);    
  }
  return rndArray;
}
console.log(randomArray());
/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

{
  let array = [1,8,32,45,3,88,100,23,46,9];
  array = array.filter(i =>  (i % 2) === 0) ;
  console.log(array);
}
/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */
{ 
  let array = [1,2,3,4];
  array = array.reduce((a,b) => a + b);
  console.log(array);
}
/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
{ 
  let array = [1,2,3,4];
  array = array.map(i => i + 1);
  console.log(array);
}
/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
{
  let array = ['ciao', 'hello', 'hola'];
  array = array.map(i => i = i.length);
  console.log(array);
}
/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
{
  let array = [1,8,32,45,3,88,100,23,46,9]
  array = array.filter(i =>  (i % 2) != 0);
  console.log(array);
} 
/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
var rndUnique = () => {
  let array = [];
  array.push(Math.floor(Math.random() * 10) +1 );
  for (let i = 0; i < 10; i++) {
    if ( array[i] != array[(i - 1)] ) {
      array.push(Math.floor(Math.random() * 10) +1 );
    } else {
      i = i
    }    
  }
  return array; // RIFAI
}
console.log(rndUnique());
/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
{
  let array = [1,2,3,4,5,6,7,8,9,10]
  let left = 0;
  let right = array.length -1;
  while ( left < right ) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
  console.log(array);
} 
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
 var oldestMovie = () => {
   let result = parseInt(movies[0].Year);
   movies.forEach(movie => {
      if(parseInt(movie.Year) < result){
        result = movie
      } else { result = result}
      return result;
   });
  }
  console.log(oldestMovie());
/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
var nMovies = () => {let nMovies = movies.length ; return nMovies ;};
console.log(nMovies());
/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
var moviesTitle = () => movies.map(i => i = i.Title );
console.log(moviesTitle());
/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16 (html)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('ESERCIZIO 16');

var getMovieById = (imdbID) => {
  return movies.find(movie => movie.imdbID === imdbID);
}

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'INPUT') {
    let movie = getMovieById(document.getElementById('selectFilm').value);
    document.getElementById('title').innerHTML = movie.Title;
    document.getElementById('year').innerHTML = movie.Year;
    document.getElementById('type').innerHTML = movie.Type;
    document.getElementById('poster').src = movie.Poster;
  }
});

console.log(getMovieById('tt0120737')); // LOR 1
console.log(getMovieById('tt4154796')); // Avengers: Endgame
console.log(getMovieById('tt0100054')); // Lord of The Flies
console.log(getMovieById('Giocatore1')); // Nothing
/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA) (html)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
