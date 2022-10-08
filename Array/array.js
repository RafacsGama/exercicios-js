console.log(typeof Array, typeof new Array, typeof[])
//array em js é objeto. estrutura dinamica. tipos de dados são os mais variadoos possíveis
//trabalhar com dados homogeneos por boas práticas. 
//arrays são indexados a partir do 0 
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
//console.log(aprovados[3])
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados [8] === undefined)
console.log(aprovados)
aprovados.sort()//método sort altera o array ordendando...
console.log(aprovados)

delete aprovados[1] //operador delete 
console.log (aprovados[1])
console.log (aprovados[2])

aprovados = ['Bia','Carlos', 'Ana']
aprovados.splice(1, 1)//exclui um item do array
console.log(aprovados)
aprovados = ['Bia','Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')//pode excluir e adicionar elementos em determinado indice...
console.log(aprovados)