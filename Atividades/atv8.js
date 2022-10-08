let stringPontuacoes = '10, 20, 21, 8, 25, 3, 0, 30, 1'
function avaliaPontuacoes (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebRecord = 0
    let piorJogo = 1 
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes [0]
    for(let i = 1; i <pontuacoes.length; i++){
        if(pontuacoes[i]>maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebRecord++            
        }else if (pontuacoes[i] <menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebRecord, piorJogo]
}
console.log(avaliaPontuacoes(stringPontuacoes))