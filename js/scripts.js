// CREO UN CICLO DA 1 A 100

console.log("prima del ciclo");

for (let i = 1; i <= 100; i++) {
    // CREO UN DIV X OGNI (BOX-NUM)

    // GLI ASSEGNO UNA CLASSE GENERICA PER LO STILE DI BASE

    console.log("durante il ciclo", i);

    if (i % 3 == 0 && i % 5 == 0) {

        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)

        console.log("questo è un multiplo di 3 e 5")

        document.getElementById('mio-div').innerHTML += "FizzBuzz ";

        console.log(" questo deve essere FizzBuzz")

    } else if (i % 3 == 0) {

        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)
        console.log("questo è un multiplo di 3")

        document.getElementById('mio-div').innerHTML += "Fizz ";

        console.log(" questo deve essere fizz")
    } else if (i % 5 == 0) {
        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)
        console.log("questo è un multiplo di 5")

        document.getElementById('mio-div').innerHTML += "Buzz ";

        console.log(" questo deve essere buzz")
    } else {
        document.getElementById('mio-div').innerHTML += i + " ";
    }
    // FACCIO L'APPEND DEL DIV CREATO NEL "mio-div" (cio' significa che trascrivo questo div nell'HTML)
}

console.log("dopo il ciclo");