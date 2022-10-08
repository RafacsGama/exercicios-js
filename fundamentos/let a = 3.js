let a = 3 

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'
console.log (a)
console.log (global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // this é um module.exports
console.log(module.exports)
//criar uma variável sem var e let
//abc = 3 //não deve ser feito
//console.global(global.abc)