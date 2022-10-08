function calcAnoBissexto (ano) {
    if(ano <= 0){
        return false
    }else if (ano % 400){
        return true
    }else if (ano % 100){
        return false
    }else if (ano % 4){
        return true
    }else{
        return false
    }
}
console.log(calcAnoBissexto(0))
console.log(calcAnoBissexto(4))
console.log(calcAnoBissexto(100))
console.log(calcAnoBissexto(400))
console.log(calcAnoBissexto(800))
console.log(calcAnoBissexto(2020))
console.log(calcAnoBissexto(2021))