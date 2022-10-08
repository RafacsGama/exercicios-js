let comparaComThis = function (param) {
    console.log (this === param)
}
comparaComThis (global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis (global)
comparaComThis (obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind (obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
//this em uma função arrow é associado ao contexto em que a função arrow foi escrita, mesmo que o bind force a mudança de contexto.
