/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
    return l1*l2;
}

console.log(area(2,3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(x,y){
    if (x !== y){
        return x+y;
    }
    else{
        return (x+y)*3;
    }
}

console.log(crazySum(3,3));
console.log(crazySum(3,5));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(parametro1){
    let diff = Math.abs(parametro1-19);

    if(diff < 19){
        return diff;
    }
    else if ( parametro1 >= 19){
        return diff*3;
    }
}

console.log(crazyDiff(10));
console.log(crazyDiff(19));
console.log(crazyDiff(29));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (parametro2){
    if ((parametro2 >= 20 && parametro2 <= 100) || parametro2 === 400 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(boundary(50));
console.log(boundary(130));
console.log(boundary(400));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE " + str;
    }
}



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(p1){
    if ((p1 % 3 === 0) || (p1 % 7 === 0)){
        return true;
    }
    else{
        return false;
    }

}
console.log(check3and7(21));
console.log(check3and7(14));
console.log(check3and7(9));
console.log(check3and7(4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}
 let c = "Epicode";
 console.log(reverseString(c));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
    let words = str.split(' '); 
    for (let i = 0; i < words.length; i++) {
       
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' '); 
}

let d = "this is a test"

console.log(upperFirst(d));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    if (str.length <= 2) {
        return '';
    }
    return str.slice(1, -1);
}
console.log(cutString(d));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomNumbers = [];

    for (let i = 0; i < n; i++) {
       
        let randomNum = Math.floor(Math.random() * 11); 
        randomNumbers.push(randomNum);
    }
    
    return randomNumbers;
}

