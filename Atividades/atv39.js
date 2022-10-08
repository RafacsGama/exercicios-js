//2vetores de mesmo tamanho
//trocar valores dos vetores
let vetor1 = [0]
let vetor2 = [2]
function trocaValores (vetor1, vetor2){
    if (vetor1.length == vetor2.length){
        for(let i = 0; i < vetor1.length; i++){
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    }else {
        return 'Valores diferentes.'
    }
    console.log('Novo Vetor 1: ' + vetor1)
    console.log('Novo Vetor 2: ' + vetor2)
}
trocaValores(vetor1, vetor2)