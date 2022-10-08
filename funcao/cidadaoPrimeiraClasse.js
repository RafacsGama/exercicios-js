// função em JS é First-class object (citizens)
// higher-order function
// toda função é undefined se vc não chamar o return...
//associada a uma função existe um bloco.
//o bloco é obrigatório.
//criar de forma literal 
function fun1(){ }

//armazenar uma função em uma variável
const fun2 = function (){ }
//armazenar uma função dentro de uma array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log (array[0](2, 3))
//armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log (obj.falar())
//passar função como parâmetro
function run(fun) {
    fun()
}
run (function (){console.log('Executando...') })
//uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}
soma (2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4) 