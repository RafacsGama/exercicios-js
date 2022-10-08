let a = 1 
console.log(a)
//associado a uma promessa vem uma diversidade de coisas 
//sempre que uso operador new eu crio um novo objeto.
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y: 4
    })

})
console.log(typeof p)//promessa cria objeto.
p.then((valor) => console.log(valor.x))
