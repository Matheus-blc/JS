// let x = "";
// console.log(x);
// x = "oi";
/*
// 1) declara a função
                    //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");

function soma(){
    //outros codigos
    //varios console.log()
    //depois do retorno nada sera executada
    return 2 + 2;
} 

console.log(soma()) 



Função: Trecho de código  que só é executado quando é chamado/invocado

    Função void(vazia)
    função com Parâmetro(s)
    Função return
    Função arrow

Crie uma função para cada ação, não crie uma função para varias ações tipo, uma função que some subtraia divida multiplica em uma só função 

Ctrl + alt + n = executar



let valor = 20

function incrementa() {  //Função void ou seja vazia, não esta esta retornando nada só alterando alguma coisa dentro do codigo 
    valor = 20 + 30

}


incrementa() //estou invocando a função
console.log(valor)


                     //podemos passar parametros, e a variave que é criada nessa função só vai poder ser usada DENTRO dessa função
function mostraNome(nomeDaPessoa){

    console.log(nomeDaPessoa)

}

mostraNome("Rodolfo")



//Função void - vazia porque não retorna nada
function soma(numero1, numero2){

    const somaDosNumeros = numero1 + numero2

    console.log(somaDosNumeros)

}

soma(10,5)
soma(2,5)


function soma(numero1, numero2){

    const somaDosNumeros = numero1 + numero2

    return somaDosNumeros

}

//essa variavel chama a função mandando esses numeros
const meusNumeros = soma(4,6)
const meusNumeros2 = soma(40,54)


console.log(meusNumeros)
console.log(meusNumeros2)
*/

// Arrow function, é para ser resumida, sem nessecidade de return
const multi = (numero1, numero2) =>  numero1 * numero2


const multiplicacao = multi(2,5)

console.log(multiplicacao)




