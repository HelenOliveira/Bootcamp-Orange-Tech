/*O Objeto é uma estrutura de chave e valor */

const Helen = {
    nome: 'Helen Oliveira',
    idade: 25
    
};
console.log(Helen.nome);
console.log(Helen.idade);
console.log(Helen);

//utilizando uma função dentro o objeto e usando o this para substituir o objeto

const pessoa = {
    nome: 'Helen Oliveira',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
    
};
//aceso direto no atributo
pessoa.nome = 'Helen';
pessoa.idade = 25;

pessoa.descrever();

//console.log(pessoa['nome']); (para acessar dinamicamente o atributo da função)
//Criando uma classe Pessoa para que sejam instanceadas 

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}
const helen = new Pessoa;
helen.nome = 'Helen Oliveira'; 
helen.idade =25;

console.log(helen); //posso chamar assim
helen.descrever(); // ou assim

//Usando construtores para instanciar objetos

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome =nome;
        this.idade=idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}
const helen = new Pessoa ('helen', 25);
const helena = new Pessoa ('helena', 55);

console.log(helen);
console.log(helena); 

//Usando a mesma classe pessoa com funções comparando duas pessoas

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome =nome;
        this.idade=idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`);
    }
}
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade `);
    }

}
const juliana = new Pessoa ('Juliana', 29);
const karen = new Pessoa ('karen', 18);

compararPessoas(juliana, karen);
