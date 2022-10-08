//operador ...rest(juntar)/spread(espalhar)
//usar o rest com parâmetro de função

//usar o spread como objeto
const funcionario = {nome: 'Maria', salario: 12349.99 }
//criar outro objeto usando spread
const clone = { ativo: true, ...funcionario } //espalhar atributos de funcionarios na cosnt clone
console.log(clone)

//usar para espalhar elementos de 1 array dentro de outro array
const grupoA = ['João', 'Carlos', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Pedro']
console.log(grupoFinal)
