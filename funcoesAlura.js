function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;

}

//console.log(nomeIdade("Juliana", 40)) //se atente a ordens do que você pergunta ao JS ele não sabe oque é oque



function soma(numero1, numero2){
    return numero1 + numero2;

}    
function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))


function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”