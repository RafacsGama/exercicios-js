const porta = 3003 //porta = processo dentro de um computador > comunicação de um computador com outro. 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //função send envia resposta. vai converter par JSON
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //responde em json o produto no servidor
})
app.delete('./produtos', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,()=>{
    console.log(`Servidor está  rodando na porta ${porta}`)
})