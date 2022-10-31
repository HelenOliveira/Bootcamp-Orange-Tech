/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoGasolina = 5.00;
const precoAlcool = 4.00;
const tipoDeCombustivel = 'alcool';
const kmPorLitro = 13;
const distanciaPorKm = 150;

const gastoMedioCombustivel = distanciaPorKm / kmPorLitro;


if (tipoDeCombustivel === 'alcool') {
    const gastoTotalViagem = gastoMedioCombustivel * precoAlcool;
    console.log(gastoTotalViagem.toFixed(2));
}
else {
    const gastoTotalViagem = gastoMedioCombustivel * precoGasolina;
    console.log(gastoTotalViagem.toFixed(2));
}

