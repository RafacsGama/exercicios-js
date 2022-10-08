// pessoa aponta para um endereço de memória 123 -> onde está o {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)
//pessoa em novo endereço de memória 456 {...}
//pessoa = {nome: 'Ana'}
Object.freeze(pessoa)//congelando o objeto pessoa > assim eu não consigo mais mexer no objeto > torna o objeto em uma constante.
pessoa.nome = 'Maria'
console.log(pessoa)
const pessoaConstante = Object.freeze({nome:'Jorge'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)