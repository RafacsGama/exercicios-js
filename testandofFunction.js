const a = 10
const b = 20
function somar(){
    soma = a + b
    return soma
}
console.log(somar())
function subtrair(){
    sub = somar() - b
    return sub
}
console.log(subtrair())
function multiplicar(){
    mult = subtrair() * b
    return mult
}
console.log(multiplicar())
function dvisao() {
    div = multiplicar()/b
    return div
}
console.log (dvisao())