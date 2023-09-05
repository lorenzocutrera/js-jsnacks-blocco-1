/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

//definisco le due variabili in cui finiranno i valori inseriti dall'utente
/*
let userNumber1;
let userNumber2; 
*/

//richiesta dei due numeri all'utente
userNumber1 = prompt('inserisci un numero');
userNumber2 = prompt('inserisci un altro numero');


//logica di controllo maggiore

if(userNumber1 > userNumber2){
    console.log('il numero maggiore è userNumber1: ' + userNumber1);
} else if(userNumber1 < userNumber2){
    console.log('il numero maggiore è userNumber2: ' + userNumber2);
} else{
    console.log('i numeri sono uguali');
}

//BONUS
/*
Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*
let i = 0
while (i < 2){
    prompt('inserisci un numero'); i++
} console.log(i);
*/