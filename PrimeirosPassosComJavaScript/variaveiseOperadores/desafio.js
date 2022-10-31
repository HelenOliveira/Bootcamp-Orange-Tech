
/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

//Resolução do desafio

const precocombustivel = 5.67;
const kmPorLitro = 10;
const distanciakm = 250;

const gastoMedioCombustivel = distanciakm / kmPorLitro;
const gastoTotalViagem = gastoMedioCombustivel * precocombustivel;

console.log(gastoTotalViagem.toFixed(2));
  

