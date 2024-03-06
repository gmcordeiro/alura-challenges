/*
	5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
 */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const multiples = multiplesOfFive(numbers);
console.log(multiples);

function multiplesOfFive(arr) {
	return arr.filter(num => num%5 === 0 && num > 5)
}