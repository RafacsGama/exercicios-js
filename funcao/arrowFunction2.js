function Pessoa(){
    this.idade = 0
    
    setInterval(() => { //setinterval é um temporizador 
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa