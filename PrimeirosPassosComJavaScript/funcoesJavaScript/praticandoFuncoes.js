function escreverNome(nome) {
    console.log('meu nome é ' + nome);

}
escreverNome('Helen');

//verificar se a pessoa é maior de idade;

function verificarIdade(idade) {

    if (idade >= 18) {
       console.log('Maior de Idade');

    } else {
        console.log('Menor de idade');
    }
}
verificarIdade(15);

/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- 1. À vista Débito, recebe 10% de desconto;
- 2. À vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3. Em duas vezes, preço normal de etiqueta sem juros;
- 4. Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));

}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}
const precoOriginal = 100;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoOriginal, 10));
}
else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoOriginal, 15));
}
else if (formaDePagamento === 3){
    console.log(aplicarDesconto(precoOriginal));
}
else {
   console.log(aplicarJuros(precoOriginal, 10))
}


