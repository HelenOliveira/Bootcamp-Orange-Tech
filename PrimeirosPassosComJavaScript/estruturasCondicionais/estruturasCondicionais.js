// tipos de estruturas condicionais

//bolean

const num = 15;
const numPar = (num % 2) === 0;

console.log(numPar);

//Usando If  verificando se o numero é par

const numero = 15;
const numeroPar = (numero % 2) === 0;


if (numeroPar) {
    console.log('Par');    
}
else {
    console.log('Impar');
}

//Se o numero for divisivel por 5 e o for igual a zero.

const numeros = 15;
const numeroDivisivelpor5 = (numeros % 5) ===0;

if (numeros ===0) {
    console.log('O número é invalido'); 
} 
else if (numeroDivisivelpor5) {
        console.log('Sim');    
}
else {
    console.log('Nao');
}

//simplificando o código 

const numr = 5;

if ((numr % 2) === 0) {
    console.log('Par');    
}
else {
    console.log('Impar');
}



