function gerarNumerosEntre(min,max){
    if (min>max){
        [max, min] = [min, max]
    }

    return new Promise (resolve => {
        const fator = max - min + 1 
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 2)
    .then(numx2 =>`Aposte neste numero ${numx2}`)
    .then(console.log)