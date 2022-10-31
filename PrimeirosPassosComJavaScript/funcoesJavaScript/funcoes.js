//Usando funçoes para melhorar a qualidado do código

//exemplos de funções: Exemplo teste

function teste() {
    console.log('teste');
}

teste();
teste();

//exemplo 2 chamando a função sayMyName

function sayMyname(name) {
    console.log('your name is:' + name);
}
sayMyname('Renan');
sayMyname('Vitor');

// exemplo 3 incrementar funcao  juros

function incrementarjuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarjuros(100, 10));
console.log(incrementarjuros(100, 15));
console.log(incrementarjuros(100, 20));

//exemplo 4 : usando a funcao main 

function main() {
    console.log('Programa Principal')

}
main();

// Usando o modelo de funcao main para fazer qualquer funcao, exexmplo funcao Calcular juros

function CalcularJuros() {
    console.log('Progarma Principal');
    CalcularJuros();
    
}

//Usaando a funcao para calcular o IMC
/*
function calcularImc(peso, altura) {
    return peso / Math.pow (altura,2);   
}
const peso = 50;
const altura = 1.53;
imc = calcularImc(100, 1.65);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
}
else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');
}
else if (imc >= 25 && imc <= 30) {
    console.log('Obeso');
}
else {
    console.log('Obesidade Grave');
}

//retirando o console.log e colocando return para melhorar o código;
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// colocando a função Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
