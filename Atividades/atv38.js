function numImpar(inicio = 0, fim = 0){
    if (inicio > fim){
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }
    for (let i = inicio; i<= fim; i++){
        if (i %2 ==1){
            console.log(i)
        }
    }
}
numImpar(20,89)
numImpar(90, 80)