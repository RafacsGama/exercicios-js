function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function() { //setinterval é um temporizador 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa