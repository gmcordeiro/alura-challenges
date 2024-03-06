/*
	4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
 */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((numbers) => {
	return numbers%2 === 0;
})
console.log(evenNumbers);