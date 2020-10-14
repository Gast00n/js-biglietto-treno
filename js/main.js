/**
 * Calcolatore di prezzo, secondo una tratta chilometrica
 */

// Raccolta dati:
var prezzo = 0.21;
var nome = prompt('Inserisci il tuo nome');

document.getElementById('name').innerHTML = nome;



var eta = parseInt( prompt('Inserisci la tua età') );

//  Controllo età

if (isNaN(eta)) {
    do eta = parseInt( prompt('Età non valida, inserisci età') );
    while (isNaN(eta));
}

var chilo = parseInt( prompt('Inserire il numero di chilometri da fare') );

//Controllo valore chilometri

if (isNaN(chilo)) {
    do chilo = parseInt( prompt('Distanza non valida, inserisci distanza') );
    while (isNaN(chilo));
}


document.getElementById('chilo').innerHTML = chilo;

// Costo biglietto per KM

var costoKm = chilo * prezzo;
var sconto20 = (costoKm / 100) * 20;
var sconto40 = (costoKm / 100) * 40;

// Calcolo di eventuali sconti

if (eta < 18) {
    var costoFinale = costoKm - sconto20;
    document.getElementById('costo').innerHTML = costoFinale;
    document.getElementById('tariffaInt').innerHTML = '(la tariffa intera per la sua tratta è pari a:<strong> ' + costoKm + '€</strong>)';
    document.getElementById('sconto').innerHTML = 'A cui è stato applicato uno sconto del <strong>20%</strong> dedicato ai viaggiatori di età <em>inferiore ai 18 anni</em>!';
} else if ( eta >= 65) {
    var costoFinale = costoKm - sconto40;
    document.getElementById('costo').innerHTML = costoFinale;
    document.getElementById('tariffaInt').innerHTML = '(la tariffa intera per la sua tratta è pari a:<strong> ' + costoKm + '€</strong>)';
    document.getElementById('sconto').innerHTML = 'A cui è stato applicato uno sconto del <strong>40%</strong> dedicato ai viaggiatori di età <em>superiore ai 65 anni</em>!';
} else {
    var costoFinale = costoKm
    document.getElementById('costo').innerHTML = costoFinale;
    document.getElementById('sconto').innerHTML = 'Siamo spiacenti, non è disponibile, al momento, una scontistica dedicata alla sua fascia di età!';
}

function newFunction() {
    return 'Numero non valido! Inserisci un\'età valida, per favore!';
}
