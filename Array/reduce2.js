//reduce recebe elementos de 1 array, opera e passa esse elemento para a próxima. 
//acumula valor de chamada em chamada.
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]
//alunos.map(a => a.nota) gera um array com as notas dos objetos aluno.

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})// reduce faz a soma de todos os parâmetros, do primeiro até o próximo e assim até o último. 
console.log(resultado)