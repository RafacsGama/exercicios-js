//object.entries e object.values, ja tinah object keys
const obj ={ a: 1, b: 2, c:3 }
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj)) //entradas do objeto chave e valor

//melhrias em notação literal 
const nome = 'Abgail'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//classe 
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}
console.log(new Cachorro().falar())