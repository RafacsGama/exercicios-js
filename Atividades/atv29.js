function intervaloNum(vetor){
    qtdNumInterv = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor [i] <= 20){
            qtdNumInterv++
        }
    }
    return `${qtdNumInterv} numeros dentro do intervalo.`
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(intervaloNum(vetor))