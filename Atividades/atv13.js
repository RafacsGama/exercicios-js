const diaUtil = function (diaUtil) {
    switch (Math.floor(diaUtil)){
        case 1: 
        return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6:
        return'Dia útil!'
        case 7:  
        return "Fim de semana"
        default: 
        return 'Dia inválido'
    }
}
console.log(diaUtil(1))
console.log(diaUtil(5))