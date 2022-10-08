const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
//minhaFuncao fez o que foi declarado pra ela fazer > carregou com ela o escopo lexico onde foi definida.
