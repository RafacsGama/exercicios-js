//classe funciona em cima de função e herança em cima de prototype
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{ //avo é prototipo de pai e o termo extends define isso.
    constructor (sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)
const avo = new Avo
console.log(avo)//vai dar undefined pq o avo não herda nada do neto! 
