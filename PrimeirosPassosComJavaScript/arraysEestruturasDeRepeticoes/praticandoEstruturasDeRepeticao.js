//1) Crie um programa que dado um número imprima a sua tabuada.

const numero= 7;

for (let i = 0; i <=10; i++) {
    console.log(i * numero);
    
}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros= [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i <= 10; i++) {
    
    if ( i % 2 === 0) {
       console.log(i);
    }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const palavra =['navio', 'vila', 'bola', 'vespera'];

    for (let i = 0; i < palavra.length; i++) {
            console.log(palavra);
       
        }
//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   //Ex de lista = [2, 7, 3, 8, 10, 4]

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   //Ex de lista de notas = [2, 7, 3, 8, 10, 4]



