const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// METODO CICLO FOR 

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let numero = numbers[i]
    numero = numero +1;
    newNumbers.push(numero)
}
console.log(newNumbers);


// METODO FOR EACH 

// numbers.forEach((numero) => {
//   const nuovoNumero = numero + 1;
//   newNumbers.push(nuovoNumero);
// });

// console.log(newNumbers);
