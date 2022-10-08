//aluno com 3 notas 
//calcular media ponderada das 3 notas 
//se media 5 aprovado
//se media abaixo de 5 reprovado
/*function calcMed(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b)) => a < b ? 1 :-1
    let mediaFinal = (notas[0]*4+notas[1]*3+notas[2]*3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1},${nota2}, ${nota3}. ${mediaFinal < 5? 'Reprovado.': 'Aprovado.'}`)
}
calcMed(10,2,10,9)
*/

//resolução errada... 
function medAprv(nota1, nota2, nota3){
    let mediaFinal = ((nota1 + nota2 + nota3)/3)
    if (mediaFinal>5){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}
console.log(medAprv(10,10,9))
console.log(medAprv(8,6,0))