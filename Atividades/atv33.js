vt1 = [1, 2, 3, 4]
vt2 = ['Joga', 'bola', 'sim', 'amanhã']
vt3 = [0.1, 2.3, 3.0, 4.8]
function concatenar (_args){
    resultado = []
    for (let i = 0; i <arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}
console.log (concatenar(vt1, vt3))
console.log (concatenar(vt2, vt1))