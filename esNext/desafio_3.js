const fs = require('fs')
const { split } = require('lodash')
const path = require ('path')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, conteudo){
            resolve(conteudo.toString())
            //função callback   
        })
        console.log('Depois de ler')
    })
}
const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)