const fs = require('fs')
const { ary } = require('lodash')

//síncrono...
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

//__dirname é o diretorio atual no node... sempre disponível em todos os arquivos que vc esteja usando o node.