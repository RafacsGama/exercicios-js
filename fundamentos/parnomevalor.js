//par/valor
const saudacao = 'opa' //contexto léxico 1

function exec () {
    const saudacao = 'Faaaala' //contexto léxico 2 
    return saudacao
};

//objetiso são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua blablabla',
        numero: 123
    }
}
console.log (saudacao);
console.log (exec());
console.log (cliente);