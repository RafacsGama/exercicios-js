function jurosSimples(capitalInicial, taxaJuros, tempoDeAplicacao){
    return capitalInicial + (capitalInicial * taxaJuros * tempoDeAplicacao)
}
function jurosCompostos(capitalInicial, taxaJuros, tempoDeAplicacao){
    return capitalInicial * (taxaJuros + 1) ** tempoDeAplicacao
}
console.log (jurosSimples(100, 10/100, 2))
console.log (jurosCompostos(100, 10/100, 2))
