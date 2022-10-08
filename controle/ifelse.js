const immprimirResultado = function (nota){
    if(nota>=7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
immprimirResultado(10)
immprimirResultado(4)
immprimirResultado('epa!!') //cuidado fracamente tipada