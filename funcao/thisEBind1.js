const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas de funcional e orientação a objeto.

const falarDePessoa = pessoa.falar.bind(pessoa) //bind amarra o this ao objeto desejado. Já que o this em JS é aleatório, varia muito.
falarDePessoa()

/*const falar2 = pessoa.falar
falar2()*/
