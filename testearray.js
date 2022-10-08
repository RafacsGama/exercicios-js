var frutas = ["Laranja", "Maçã", "Uvas", "Morango"]
console.log(frutas)

frutas.forEach(function(item, indice){
    console.log(indice, item)
})

var primeiro = frutas[0]
console.log(primeiro)

var terceiro = frutas [2]
console.log(terceiro)
var todosOsItensDaLista = frutas.length
console.log(todosOsItensDaLista)


//principais métodos arrays
var frutas = ["Laranja", "Maçã", "Uvas", "Morango"]
frutas.pop()
console.log(frutas)
var frutas = ["Laranja", "Maçã", "Uvas", "Morango"]
frutas.push("Banana")
console.log(frutas)
var frutas = ["Laranja", "Maçã", "Uvas", "Morango"]
frutas.shift(frutas)
console.log(frutas)
var frutas = ["Laranja", "Maçã", "Uvas", "Morango"]
frutas.unshift("Limão")
console.log(frutas)

console.log(typeof Array, typeof new Array, typeof[])