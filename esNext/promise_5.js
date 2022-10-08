function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        if(Math.random()<chanceDeErro){
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao('testando...', 0.5)
    .then(v=> console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(()=> console.log('Fim...'))
//faz o bom e velho try catch para tratativa de erros.
