//json primeiro formato de dados > para interoperabilidade entre sistemas. 
//formato textual genérico que não carrega nada específico de uma tecnologia. > formato binário < 
//dá pra ser lido em várias linguagens . para se ler e gerar .
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // formato de dados que trafegam de 1 aplicação para outra, exclui a função.

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c":true, "d":{}, "e":[]}'))
//sempre delimitar por "aspas duplas".