function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}
let opcao = -1 
 do {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log (`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log ('Até a próxima!')

// a expressão while deve ficar depois do bloco
// primeiro ela executa o bloco depois ela verifica o v ou f para finalizar 
