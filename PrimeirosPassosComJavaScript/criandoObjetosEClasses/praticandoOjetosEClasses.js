/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
        marca;
    cor;
    gastoMedio;

constructor(marca, cor, gastoMedio){
    this.marca = marca;
    this.cor = cor ;
    this.gastoMedio = gastoMedio;
    
}
calcularViagem(distanciaEmKm, valorCombustivel){
    return distanciaEmKm* this.gastoMedio * valorCombustivel;
}
}
const fox = new  Carro('Fox', 'Cinza', 1/10);
const palio = new Carro('Fiat', 'Preto', 1/12);

console.log(fox.calcularViagem(200, 5));
console.log(palio.calcularViagem(100,4))

/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/ 

class Pessoa {
    nome;
    peso;
    altura;

constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso ;
    this.altura = altura;
} 
calcularImc() {
    return this.peso /  (this.altura * this.altura);

}
classificarImc(){

    const imc = this.calcularImc();

    if (imc < 18.5) {
        return ('Abaixo do peso');
    }
    else if (imc >= 18.5 && imc <= 25) {
        return ('Peso Normal');
    }
    else if (imc >= 25 && imc <= 30) {
        return ('Acima do peso');
    }
    else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    }
    else {
        return ('Obesidade Grave');
         }
    }
}
const jose = new Pessoa('Jose', 45, 1.70);
console.log(jose.calcularImc()); //depois de classificar o IMC esta linha não precisava usa la mais, porem deixei como exemplo;
console.log(jose.classificarImc());

const helen = new Pessoa ('Helen', 100, 1.65);
console.log(helen.calcularImc());
console.log(helen.classificarImc());//depois de classificar o IMC esta linha não precisava usa la mais, porem deixei como exemplo;


const karen = new Pessoa ('Karen', 45, 1.55);
console.log(karen.calcularImc()); //depois de classificar o IMC esta linha não precisava usa la mais, porem deixei como exemplo;
console.log(karen.classificarImc());









