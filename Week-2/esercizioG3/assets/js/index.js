/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let nEx1 = 1;
    let nEx2 = 10;

    if (nEx1 > nEx2) {
        document.getElementById('ex1').innerHTML = `Il numero più grande è ${nEx1}` ;
    }
        else if (nEx1 < nEx2) {
            document.getElementById('ex1').innerHTML = `Il numero più grande è ${nEx2}` ;
        }
}    
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let nEx1 = 8;

    if (nEx1 != 5) {
        document.getElementById('ex2').innerHTML = `${nEx1} è diverso da 5` ;
    }
        else {
            document.getElementById('ex2').innerHTML = `${nEx1} è uguale a 5` ;
        }
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let nEx1 = 15;
    let result = (nEx1 % 5);
    if (result === 0) {
        document.getElementById('ex3').innerHTML = `${nEx1} è divisibile per 5` ;
    }
        else {
            document.getElementById('ex3').innerHTML = `${nEx1} non è divisibile per 5` ;
        }
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let nEx1 = 4
    let nEx2 = 12
    if (nEx1 === 8 || nEx2 === 8 || (nEx1 + nEx2) === 8 || (nEx1 - nEx2) === 8 || (nEx2 - nEx1) === 8 ) {
        document.getElementById('ex4').innerHTML = `Verificato` ;
    }
        else {
            document.getElementById('ex4').innerHTML = `Non Verificato` ;
        }
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{ 
    let cartPrices = [10,24,16,8];
    let totalShoppingCart = (cartPrices[0] + cartPrices[1] + cartPrices[2] + cartPrices[3]);

    if (totalShoppingCart > 50) {
        document.getElementById('ex5').innerHTML = `Il totale del carrello è di ${totalShoppingCart}$. Hai diritto alla spedizione gratuita!`; 
    }
        else {
            document.getElementById('ex5').innerHTML = `Il totale del carrello è di ${totalShoppingCart}. Verranno addizionati 10$ per i costi di spedizione. `;
        }
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
{ 
    let cartPrices = [10,24,16,8];
    let totalShoppingCart = (((cartPrices[0] / 100) * 80) + ((cartPrices[1] / 100) * 80) + ((cartPrices[2] / 100) * 80) + ((cartPrices[3] / 100) * 80) );

    if (totalShoppingCart > 50) {
        document.getElementById('ex6').innerHTML = `Il totale del carrello è di ${totalShoppingCart}$. Hai diritto alla spedizione gratuita!`; 
    }
        else {
            document.getElementById('ex6').innerHTML = `Il totale del carrello è di ${totalShoppingCart}. Verranno addizionati 10$ per i costi di spedizione. `;
        }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let nEx1 = 1;
    let nEx2 = 10;
    let nEx3 = 100;
    if (nEx1 >= nEx2 && nEx2 >= nEx3) {
        document.getElementById('ex7').innerHTML = `${nEx1}, ${nEx2}, ${nEx3}`; 
    }
        else if (nEx2 >= nEx1 && nEx1 >= nEx3) {
            document.getElementById('ex7').innerHTML = `${nEx2}, ${nEx1}, ${nEx3}`; 
        }
            else if (nEx3 >= nEx2 && nEx2 >= nEx1) {
                document.getElementById('ex7').innerHTML = `${nEx3}, ${nEx2}, ${nEx1}`;
            }
                else {
                    document.getElementById('ex7').innerHTML = `${nEx2}, ${nEx3}, ${nEx1}`;
                }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    let stringEx1 = 'ciao';
    if (typeof stringEx1 == 'number') {
      document.getElementById('ex8').innerHTML = `${stringEx1} è un numero!` ;
    }
      else {
        document.getElementById('ex8').innerHTML = `"${stringEx1}" non è un numero!` ;
      }

}
console.log(typeof stringEx1);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let nEx1 = 15;
  let result = (nEx1 % 2);
  if (result === 0) {
      document.getElementById('ex9').innerHTML = `${nEx1} è pari.` ;
  }
      else {
          document.getElementById('ex9').innerHTML = `${nEx1} è dispari.` ;
      }
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let val = 3
  if (5 < val && val < 10) {
      document.getElementById('ex10').innerHTML = `${val} è minore di 10.`;
    } else if (val < 5) {
      document.getElementById('ex10').innerHTML = `${val} è minore di 5.`
    } else {
      document.getElementById('ex10').innerHTML = `${val} è uguale a 10 o maggiore.`
    }
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}
 
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
document.getElementById('ex11').innerHTML = `${me.name}, ${me.lastName}, ${me.skills}, ${me.city}`;
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName; // oppure  me.lastName = ''; 
document.getElementById('ex12').innerHTML = `${me.name}, ${me.lastName}, ${me.skills}, ${me.city}`;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
document.getElementById('ex13').innerHTML = `${me.name}, ${me.lastName}, ${me.skills}, ${me.city}`;
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let array = [];
  array.splice(0,10,1,2,3,4,5,6,7,8,9,10);
  document.getElementById('ex14').innerHTML = `${array}`;


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
  array.splice(9,1,100)
  document.getElementById('ex15').innerHTML = `${array}`;
}