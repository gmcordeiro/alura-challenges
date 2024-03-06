/*
 * 2 - Crie um array de números, chamado "valores". Depois, escreva um programa que some todos os elementos deste array utilizando o método reduce.
 */
let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let somaValores = valores.reduce((acumulador, valorAtual) => valorAtual + acumulador, 0);
console.log(`A soma dos valores é: ${somaValores}`)