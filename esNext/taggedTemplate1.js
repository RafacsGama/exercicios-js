//tagged template - processa uma template striing dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situação = 'Aprovado'
console.log(tag `${aluno} está ${situação}`)

// vai ser utilizado em situações de formatação de valores numéricos em valores monetários...
