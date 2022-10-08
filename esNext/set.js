//não é indexado e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Sport').add('Flamengo')
times.add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['João', 'Pedro', 'Raquel', 'Bruna', 'João']
const nomesSet = new Set(nomes)
console.log(nomesSet)