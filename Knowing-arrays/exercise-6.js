/*
	6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
 */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sumNumbers = sumElements(numbers);
console.log(`A soma dos valores é: ${sumNumbers}`);

function sumElements(arr){
	return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}