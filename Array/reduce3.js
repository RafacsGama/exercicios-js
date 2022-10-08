const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]
//Desafio 1: todos os alunos são bolsistas?
//desafio 2: algum aluno é bolsista? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))