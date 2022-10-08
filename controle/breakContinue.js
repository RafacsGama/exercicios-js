const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //age no bloco mais próximo sendo while, for e switch. Não age sobre o código if
    }
    console.log(`${x} = ${nums[x]}`)  
}

for (y in nums) {
    if (y == 5) {
        continue //continua a partir do fim do laço corrente, chegou no indice 5 pulou e seguiu em diante.
    }
    console.log(`${y} = ${nums[y]}`)  
} //continue só age em estruturas de repetição

externo: 
for (a in nums) {
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log (`Par = ${a}, ${b}`)
    }
}