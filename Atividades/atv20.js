function saqueDinheiro (valorSaque) {
    let cedula100 = 0
    let cedula50 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque>=valorNota){
        switch (valorNota){
            case 100:
                valorSaque -=100
                cedula100++
                break
            case 50:
                valorSaque -=50
                cedula50++
                break
            case 10:
                valorSaque -=100
                cedula10++
                break
            case 5:
                valorSaque -=5
                cedula5++
                break
            case 1:
                valorSaque -=1
                cedula1++
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(cedula100, cedula50, cedula10, cedula5, cedula1)
}
function calcularValorNota(valorSaque){
    if (valorSaque >= 100){
        return 100
    }else if (valorSaque >= 50){
        return 50
    }else if (valorSaque >= 10){
        return 10
    } else if (valorSaque >= 5){
        return 5
    } else if (valorSaque >= 1){
        return 1
    }
}
function elaborarResultado (cedula100, cedula50, cedula10, cedula5, cedula1){
    let resultado = ''
    if (cedula100 > 0) {
        resultado +=`${cedula100} nota(s) de R$ 100`
    }
    if (cedula50 > 0) {
        resultado +=`${cedula50} nota(s) de R$ 50`
    }
    if (cedula10 > 0) {
        resultado +=`${cedula10} nota(s) de R$ 10`
    }
    if (cedula5  > 0) {
        resultado +=`${cedula5} nota(s) de R$ 5`
    }
    if (cedula1 > 0) {
        resultado +=`${cedula1} nota(s) de R$ 1`
    }
    return resultado
}
console.log(saqueDinheiro(159))