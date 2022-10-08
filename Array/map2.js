const carrinho = [
    '{"nome": "Borraha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco":13.90 }',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.500}'
]
//retorna um array apenas com os preços. 
//2 maps 1 com json
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)