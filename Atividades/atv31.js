//percorrer valores inteiros e mostrar os negativos no array
function mostrNegativos (vetor){
    let qtdNeg = 0
    for (let i = 0; i <vetor.length; i++){
        if(vetor[i] < 0){
            qtdNeg++
        }
    }
    return qtdNeg
}
vetor = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mostrNegativos(vetor))