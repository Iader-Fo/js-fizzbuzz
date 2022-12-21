// CREO UN CICLO DA 1 A 100

console.log("prima del ciclo");

for (let i = 1; i <= 100; i++) {

    // CREO UN DIV X OGNI (BOX-NUM)

    console.log("durante il ciclo", i);

    const div = document.createElement('div');

    // console.log("questo è il div creato:", div)

    // GLI ASSEGNO UNA CLASSE GENERICA PER LO STILE DI BASE

    div.className = 'general-box';

    // console.log("questo è il nome (classe) del div creato:", div.className)

    if (i % 3 == 0 && i % 5 == 0) {

        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)

        div.className = 'fizzbuzz-box';

        div.textContent = "FizzBuzz";

        // console.log("questo è il nome (classe) del div creato:", div.className)

        // console.log("questo è un multiplo di 3 e 5")

        // document.getElementById('fizzbuzz-box').innerHTML += "FizzBuzz ";

        // console.log("questo deve essere FizzBuzz")

    } else if (i % 3 == 0) {

        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)

        div.className = 'fizz-box';

        div.textContent = "Fizz";

        // console.log("questo è il nome (classe) del div creato:", div.className)

        // console.log("questo è un multiplo di 3")

        // document.getElementById('fizz-box').innerHTML += "Fizz ";

        // console.log("questo deve essere fizz")

    } else if (i % 5 == 0) {

        // GLI ASSEGNO LA CLASSE CON IL BG SPECIFICO (DA SPECIFICARE IN CSS O BOOTSTRAP)

        div.className = 'buzz-box';

        div.textContent = "Buzz";

        // console.log("questo è il nome (classe) del div creato:", div.className)

        // console.log("questo è un multiplo di 5")

        // document.getElementById('buzz-box').innerHTML += "Buzz ";

        // console.log("questo deve essere buzz")

    } else {

        document.getElementById('mio-div').innerHTML += i + " ";

    }

    // FACCIO L'APPEND DEL DIV CREATO NEL "mio-div" (cio' significa che trascrivo questo div nell'HTML)

    const mioDiv = document.querySelector('#mio-div');

    // console.log("questo è l'Append creato:", mioDiv)

    mioDiv.appendChild(div);

    
}

console.log("dopo il ciclo");