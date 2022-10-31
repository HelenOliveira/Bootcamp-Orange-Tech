/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

const nota1 = 2;
const nota2 = 9;

const nota3 = 1;

media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');

}
else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
}
else {
    console.log('Aprovado');
}
/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/

const peso = 50;
const altura = 1.53;

imc = peso / (altura * altura);

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

/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- 1. À vista Débito, recebe 10% de desconto;
- 2. À vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3. Em duas vezes, preço normal de etiqueta sem juros;
- 4. Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/


const precoOriginal = 100;
const formaDePagamento = 4;

console.log(formaDePagamento);

if (formaDePagamento === 1) {
    valorFinal = (precoOriginal /100) * 10;
    console.log(precoOriginal - valorFinal);
}
else if (formaDePagamento === 2){
    valorFinal = (precoOriginal /100) * 15;
    console.log(precoOriginal - valorFinal);
}
else if (formaDePagamento === 3){
    valorFinal = precoOriginal;
    console.log(valorFinal);
}
else {
    valorFinal = (precoOriginal /100) * 10;
    console.log(precoOriginal + valorFinal);
}
