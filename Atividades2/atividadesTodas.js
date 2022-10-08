//Primeira questão
function cumprimentar (nome){
    return `Olá ${nome}!`
}
console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))

//Segunda Questão
function idadeEmAnosParaDias(idade){
    var dias = 365
    return idade * dias
}
console.log((idadeEmAnosParaDias(28)), 'Dias')

//terceira questão
function calcSalario(qtdHoras, vlHora){
    return `Salário do funcionário este mês será  R$ ${qtdHoras*vlHora}.`
}
console.log(calcSalario(150, 40.5))

//quarta questão
function mesDoAno(mes){
    switch(mes){
        case 1:
            console.log('Janeiro')
        break
        case 2:
            console.log('Fevereiro')
        break
        case 3:
            console.log('Março')
        break
        case 4:
            console.log('Abril')
        break
        case 5:
            console.log('Maio')
        break
        case 6:
            console.log('Junho')
        break
        case 7:
            console.log('Julho')
        break
        case 8:
            console.log('Agosto')
        break
        case 9:
            console.log('Setembro')
        break
        case 10:
            console.log('Outbro')
        break
        case 11:
            console.log('Novembro')
        break
        case 12:
            console.log('Dezembro')
        break
        default:
            console.log('Mês inválido.')
        
    }
}
mesDoAno(2)
mesDoAno(9)
mesDoAno(10)
mesDoAno(19)

//quinta questão
function maiorOuIgual(a, b){
    if (typeof a != typeof b) return false
        return a >=b
}
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(5, 1))

//sexta questão
function inverso(valor){
    const tipo = typeof valor
    if(tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou números esperados, mas o parâmetro é do tipo ${tipo}`
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(100))
console.log(inverso("programação"))
console.log(inverso(31))

//sétima questão
function estaEntre (minimo, maximo, numero, inclusivo = false){
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre(10, 100, 50,))
console.log(estaEntre(3, 150, 3, true))

//oitava questão
function multiplicar(a, b){
    let resultado = 0
    for (let i = 0; i <b;i++)
    resultado += a
    return resultado
}
console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))

//nona questão
function repetir(item, quantidade){
    return Array(quantidade).fill(item)
}
console.log(repetir("código", 2))
console.log(repetir(7, 3))

//decima questão
function maisVezes(numero){
    return Array(numero).fill('+').join('')
}
console.log(maisVezes(2))
console.log(maisVezes(9))

//décima primeira questão
function receberPrimeiroEUltimoElemento(elemento){
    const primeiroElemento = elemento.shift()
    const ultimoElemento = elemento.pop()
    return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))

//decima segunda questão
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}
console.log(removerPropriedade({a:1, b:2}, "a"))

//decima terceira questão
function filtrarNumeros(array){
    return array.filter(item => typeof item === "number")
}
console.log(filtrarNumeros(["javascript", 1, "4", "web", 20]))

//décima quarta questão
function objetoParaArray(objeto){
    const resultado = []
    for (let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}
console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

//décima quinta questão
function receberSomenteOsParesDeIndicesPares(nums){
    let resultado = []
    for (let i = 0; i < nums.length; i+=2){
        const numeroPar = nums [i] %2 === 0
        if(numeroPar)
        resultado.push(nums[i])
    }
    return resultado
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

//décima sexta questão
function calcAnoBissexto (ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return (divisivelPorQuatro && !divisivelPorCem || divisivelPorQuatrocentos)
}
console.log(calcAnoBissexto(2020))
console.log(calcAnoBissexto(2100))

//décima sétima questão
function arrayNum(n){
    const vIn = 0
    const sumWI = n.reduce((acumulador, nAtual) => acumulador + nAtual, 0)
    return sumWI
}
console.log(arrayNum([1, 2, 3]))

//décima oitava questão
function despesasTotais (itens){
    var total = 0 
    for (let item of itens)
    total += item.preco
    return total
}
console.log(despesasTotais([
    {nome: "jornal online", cetegoria: "informação", preco: 89.99},
    {nome: "cinema", categoria: "entretenimento", preco: 150}
]))

//décima nona questão 
function calcMedia(numeros){
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros){
        somaTotal += numero
    }
    return somaTotal/quantidadeDeNumeros
}
console.log(calcMedia([0, 10]))
console.log(calcMedia([1, 2, 3, 4, 5]))

//vigésima questão
function areaTriangulo (base, altura){
    const area = (base*altura/2).toFixed(2)
    return `A área do triangulo é ${area}!`
}
console.log(areaTriangulo(10, 15))
console.log(areaTriangulo(12, 38))

//vigésima primeira questão 
function menorNumero(numeros){
    return Math.min(...numeros);
}
console.log(menorNumero([10, 5, 35, 65]))

//vigésima segunda questão
function funcaoDaSorte(numeroEscolhido){
    const min = 1
    const max = 10 
    const numeroAleatorio = Math.floor(Math.random()*(max - min + 1) + min)
    return (numeroEscolhido === numeroAleatorio ? 
        `Parabéns! O número escolhido foi o ${numeroAleatorio}`:
        `Que pena, o número escolhido foi o ${numeroAleatorio}`
    )
}
console.log(funcaoDaSorte(10))

//vigésima terceira questão 
function contarPalavras(frase){
    const palavras = frase.split(" ")
    return palavras.length
}
console.log(contarPalavras("Sou uma Frase")) 

//vigésima quarta questão
function contarCaractere(caractereBuscado, frase){
    let contador = 0
    for (let i = 0; i < frase.length; i++){
        if (frase.charAt(i) === caractereBuscado)
        contador++
    }
    return contador
}
console.log(contarCaractere("r", "A sorte favorece os audazes"))

//vigésima quinta questão
function buscarPalavrasSemelhantes (inicio, palavras){
    const resultado = []

    for (let palavra of palavras)
        if(palavra.includes(inicio))
        resultado.push(palavra)

    return resultado
}
console.log(buscarPalavrasSemelhantes("pro",["programação", "mobile", "profissional"]))

//vigésima sexta questão
function removerVogais(frase){
    return frase.replace(/[aeiou]/ig,'')
}
console.log(removerVogais("fundamentos"))

//vigesima sétima questão
function inverter(objeto){
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor =>{
        const chave = 0
        valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}
console.log(inverter({a:1, b:2, c:3}))

//vigésima oitava questão
function filtrarPorQuantidadeDeDigito (numeros, quantidadeDesejada){
    return numeros.filter(numero =>{
        const quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === quantidadeDesejada
    })
}
console.log(filtrarPorQuantidadeDeDigito([38, 2, 365, 10, 125, 11], 2))

//vigésima nona questão
function segundoMaior (numeros){
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    return segundoMaior
}
console.log(segundoMaior([12, 16, 1, 5]))

//trigésima questão
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array)/array.length
function receberMelhorEstudante(estudantes){
    const estudantesComMedias = Object.entries(estudantes).map(estudante =>{
        const chave = 0,
        valor = 1
        return {nome: estudante[chave], media: media(estudante[valor])}
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}
console.log(receberMelhorEstudante({
    joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))
