//obj é uma coleção dinâmica.
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua AVA',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42,
    }],
    calcularValorSeguro: function(){
        //...
    }
}
console.log(carro)
carro.proprietário.endereco.numero = 1000
carro['proprietário']['endereco']['logradouro'] = 'Rua Gigante'
console.log(carro)
//delete carro.condutores
delete carro.proprietário.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)