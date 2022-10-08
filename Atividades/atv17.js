function salarioAtual(plano, aumento){
    switch (plano) {
        case 'A':
            return aumento * 1.1
        case 'B':
            return aumento * 1.15
        case 'C':
            return aumento * 1.2
        default: 
        return 'Plano inválido.'
    }
}
console.log(salarioAtual('A', 1000))
console.log(salarioAtual('B', 1000))
console.log(salarioAtual('C', 1000))
console.log(salarioAtual('D', 1000))