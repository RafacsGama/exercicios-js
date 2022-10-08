const sequencia = {
    _valor: 1, //convencionando de que é uma variavel interna dentro do objeto squencia < apenas convenção para a variável.
    get valor(){return this._valor++ },//getter e setter são funções para validação ou processamento antes de devolver a variável
    set valor(valor) { //javascript não suporta sobrecarga de métodos...
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)