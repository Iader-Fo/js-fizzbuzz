// CREO UN CICLO DA 1 A 100

// console.log("prima del ciclo");

// for (let i = 1; i <= 100; i++) {

//     // CREO UN DIV X OGNI (BOX-NUM)

//     console.log("durante il ciclo", i);

//     const div = document.createElement('div');

//     // console.log("questo è il div creato:", div)

//     // GLI ASSEGNO UNA CLASSE GENERICA PER LO STILE DI BASE

//     // div.className = 'general-box';

//     // console.log("questo è il nome (classe) del div creato:", div.className)

//     if (i % 3 == 0 && i % 5 == 0) {

//         // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)
//         div.classList.add('fizzbuzz');
//         div.textContent = "FizzBuzz";
//         // div.className = 'fizzbuzz-box';

//         // div.textContent = "FizzBuzz";

//         // console.log("questo è il nome (classe) del div creato:", div.className)

//         // console.log("questo è un multiplo di 3 e 5")

//         // document.getElementById('fizzbuzz-box').innerHTML += "FizzBuzz ";

//         // console.log("questo deve essere FizzBuzz")

//     } else if (i % 3 == 0) {

//         // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)
//         div.classList.add('fizz');
//         div.textContent = "Fizz";
//         // div.className = 'fizz-box';

//         // div.textContent = "Fizz";

//         // console.log("questo è il nome (classe) del div creato:", div.className)

//         // console.log("questo è un multiplo di 3")

//         // document.getElementById('fizz-box').innerHTML += "Fizz ";

//         // console.log("questo deve essere fizz")

//     } else if (i % 5 == 0) {

//         // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)
//         div.classList.add('buzz');
//         div.textContent = "Buzz";
//         // div.className = 'buzz-box';

//         // div.textContent = "Buzz";

//         // console.log("questo è il nome (classe) del div creato:", div.className)

//         // console.log("questo è un multiplo di 5")

//         // document.getElementById('buzz-box').innerHTML += "Buzz ";

//         // console.log("questo deve essere buzz")

//     } else {
//         div.classList.add('general');
//         div.textContent = i;
//         // document.getElementById('mio-div').innerHTML += i + " ";

//     }

//     // FACCIO L'APPEND DEL DIV CREATO NEL "mio-div" (cio' significa che trascrivo questo div nell'HTML)

//     container.appendChild(div);

//     // const mioDiv = document.querySelector('#mio-div');

//     // console.log("questo è l'Append creato:", mioDiv)


    
// }

// console.log("dopo il ciclo");




// CORREZIONE ESERCIZIO

// 1. Sfruttando i cicli FOR, facciamo un conteggio da 1 a 100.
// 2. Per ogni num:
// - controllo se è un multiplo di 3 (STAMPO in console FIZZ) OPPURE
// - controllo se è un multiplo di 5 (STAMPO in console BUZZ) OPPURE
// - controllo se è un multiplo di 3 e 5 (STAMPO in console FIZZBUZZ) OPPURE
// - se non è numero di 3 ne di 5 (STAMPO in console IL NUM CHE STO ANALIZZANDO)



// STEP:
// 1. CREO IL CONTAINER NELL'HTML
// 2. VADO SU JS
// 3. SELEZIONO IL CONTAINER CREATO NELL'HTML
// 4. CREO IL NUOVO ELEMENTO
// 4a. INSERISCO NEL NUOVO ELEMENTO QUELLO CHE PRIMA STAMPAVO IN CONSOLE
// 5 APPENDO IL NUOVO ELEMENTO AL MIO CONTAINER (CHE HO GIA SELEZIONTO)



// COSTRUTTO FOR
// for (CONTATORE; CONDIZIONE DI PERMANENZA; MODALITA DI AVANZAMENTO) {
//      istruzioni d seguire piu volte
// }
// OPERATORE MODULO: serve a calcolare il resto dato dalla divisione di 2 num.
// es. 10 % 3 = 1 ( perchè 10 / 3 = 3 con resto 1)

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.



// 1.
const container = document.querySelector('main');
for(let i = 1; i <= 100; i++){  // 1. Sfruttando i cicli FOR, facciamo un conteggio da 1 a 100.

    const newElement = document.createElement('div');

                                    // 2. Per ogni num:

    if(i % 3 == 0 && i % 5 == 0){       // - controllo se è un multiplo di 3 e 5
        console.log('FizzBuzz');        // STAMPO in console FIZZBUZZ

        newElement.innerHTML = 'FizzBuzz';
        newElement.className = 'box fizzbuzz';
        newElement.classList.add('terza-classe'); // questo è un altro modo per aggiungere una classe, la potevo scrivere nella riga sopra spaziandola!
    }

    else if(i % 3 == 0){                // - controllo se è un multiplo di 3                        
        console.log('Fizz');            // STAMPO in console FIZZ
        
        newElement.innerHTML = 'Fizz';
        newElement.className = 'box fizz';
        newElement.classList.add('terza-classe');
    }    

    else if(i % 5 == 0){                // - controllo se è un multiplo di 5
        console.log('Buzz');            // STAMPO in console BUZZ
        
        newElement.innerHTML = 'Buzz';
        newElement.className = 'box buzz';
        newElement.classList.add('terza-classe');
    }    

    else{                                      // - se non è numero di 3 ne di 5
        console.log( 'i', i, typeof i);        // STAMPO in console IL NUM CHE STO ANALIZZANDO

        newElement.innerHTML = i;
        newElement.className = 'box';
        newElement.classList.add('terza-classe');
    }

    container.append(newElement);

}

