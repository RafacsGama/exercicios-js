//todos pagam 100
//crianças menores de 10 anos pagam 180
//conveniados com idade entre 10 e 30 pagam 150
//>30<60 pagam 195 
//>60 pagam 230
function pagaPlano(idade){
    if (idade<10){
        return 180
    }
    if (idade<30){
        return 150
    }
    if (idade<60){
        return 195
    }else{
        return 230
    }
}
console.log(pagaPlano(18))
console.log(pagaPlano(29))
console.log(pagaPlano(1))
console.log(pagaPlano(88))