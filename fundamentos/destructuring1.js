//recurso novo do ES 2015
// retira da estrutura do objeto o item que vc tem interesse.
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua Abc',
        numero: 1000
    }
};
const{nome, idade} = pessoa;
console.log(nome,idade)

const{nome: n, idade: i} = pessoa;
console.log(n, i);

const{sobrenome, bemhumorada = true} = pessoa;
console.log(sobrenome, bemhumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log (logradouro, numero, cep);
