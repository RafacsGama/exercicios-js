//tx de crescimento
//altura das criança
function crescFils(taxaCresc1, altura1, taxaCresc2, altura2){
if (altura1 == altura2){
    if (taxaCresc1 > taxaCresc2){
        return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
    }else{
        return 'As crianças em igual altura e crescimento.'
    }
}else {
    if (altura1 > altura2){
        if(taxaCresc1 >= taxaCresc2){
        return ' A criança menor não ultrapassará a maior.'
    }else{
        return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxaCresc1, altura2, taxaCresc2)} anos`
    }
}else{
    if(taxaCresc2>=taxaCresc1){
        return 'A criança menor não ultrapassará a maior.'
    }else{
        return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxaCresc1, altura2, taxaCresc2)} anos`
    }
}
}
}
function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}
console.log(crescFils(120, 3, 150, 6))