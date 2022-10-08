function calcularVenda(código, quantidade){
    switch (código){
        case 100:
            return quantidade*3
        case 200:
            return quantidade*4
        case 300:
            return quantidade*5.5
        case 400:
            return quantidade*7.7
        case 500:
            return quantidade*3.5
        case 600:
            return quantidade*2.8
        default:
            return 'Produto inexistente'
    }
}
console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))