const escola = [{
    turma: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3               
    }]
}, {
    turma: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 7.1
    }, {
        nome: 'Roberto',
        nota: 9               
    }]
}]
const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)
//map associado com concat, um único array com todos os dados dos arrays. 
console.log([].concat( [ 8.1, 9.3 ], [ 7.1, 9 ] ))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)