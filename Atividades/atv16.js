function calculadora(valor1, operacao, valor2){
    switch (operacao){
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2 
        case '/':
            return valor1 / valor2
        default:
            return  'Operação inválida'
    }
}
console.log(calculadora(1,'+',2))
console.log(calculadora(1,'-',2))
console.log(calculadora(1,'*',2))
console.log(calculadora(1,'/',2))
console.log(calculadora(1,'b',2))