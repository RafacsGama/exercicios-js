function vendaFruta (fruta) {
    switch (fruta){
        case 'maçã': 
        console.log("Não vendemos maçã aqui.")
        break
        case 'kiwi': 
        console.log('estamos em escassez de kiwi')
        break
        case 'melancia':  
        console.log( "Está aqui, são 3 reais o quilo")
        break
        default: 
        console.log('Erro, fruta inválida')
    }
}
vendaFruta('maçã')
vendaFruta('kiwi')
vendaFruta('melancia')
vendaFruta('Alcatra')