//lista de alunos e suas notas

/*
const notas = [];

//push é para inserir uma nova nota no array

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

//uma forma mais simples é usando estruturas de repetições

for (let i = 0 ; i < notas.length; i++)  {
  const nota = notas[i];
  soma = soma + nota;

}

//calculando e imprimindo a media das notas
const media = soma / notas.length;
    console.log(media);

/*
//somando as notas  e retirando  a media das
notas[0] + notas[1] + notas[2]+ notas[3] + notas[4];

//mostra ao tamnanho da lista
console.log(notas.length); 

//imprimindo a media das notas
console.log(soma / 5);

//uma forma mais simples é usando estruturas de repetições

usando FOR para percorrer um array de uma string, exemplo:
const nome = 'Helena Duarte Andrade';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
      
}*/

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);







