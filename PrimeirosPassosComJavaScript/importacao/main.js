//usar para chamar as funçoes auxiliares
//Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 1000.
//Faça um programa que receba os 5 numeros para os alunos emostre o maior numero sorteado.


const {gets, print} =  require('./funcoesAuxiliares');

const numerosSorteados =[];
    for (let i = 0; i <=5 ; i++) {
        const numerosSorteado = gets();
        numerosSorteados.push(numerosSorteado);
    }
   
let maiorValor =0;

for (let i= 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    
    if (numeroSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}
print(maiorValor);

  //otimizando o código 
  
  let maiorValorEncontrado = 0;

for (let i= 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}
 print(maiorValorEncontrado);