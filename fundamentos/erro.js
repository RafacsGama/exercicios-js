//erro
function tratarErrorELancar(erro){
    //throw new Error('...')
    //throw 10
    throw true
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch (e) {
        tratarErrorELancar (e)
    } finally {
        console.log ('final')
    }
}

const obj = {name:'Roberto'}
imprimirNomeGritado(obj)