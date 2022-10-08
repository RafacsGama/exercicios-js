//arrow function => sempre atribuir a uma variável ou a uma constante
//para criar um corpo para uma função arroy é preciso obrigatoriamente do return.

const soma = (a, b) => a + b
console.log (soma(1, 2))

//arrow funtcion (this)
const lexico1 = () => console.log(this===exports)
const lexico2 = lexico1.bind({})
lexico1 ()
lexico2 ()

//parâmetro default
function log (texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest = espalhar ou agrupar 
function total(...numeros){
    let total = 0 
    numeros.forEach(n=>total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))