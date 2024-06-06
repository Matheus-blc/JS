function apresentar(nome) {
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`;
//se passar 2 parametros tem que abrir parenteses 
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução 

const somaDosNumerosPequenos = (num1, num2) => {
           //ou
    if (num1 || num2 > 10){
      return "somente numeros de 1 a 9"
} else {
    return num1 + num2;
}
}
// operador maior ou igual que 
// >=



