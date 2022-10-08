//mostrar os maiores números no vetor
//mostrar os menores números no vetor
function minMax(vetor){
    let maiores
    let menores 
    for (let i = 0; i <vetor.length; i++){
        if (maiores === undefined && menores === undefined){
            maiores = vetor [i]
            menores = vetor [i]
    }else {
        if (vetor [i] > maiores){
            maiores = vetor[i]
        }
        if (vetor [i] < menores){
            menores = vetor[i]
        } 
    }
}
return [maiores, menores]
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(minMax(vetor))