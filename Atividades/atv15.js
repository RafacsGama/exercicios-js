function vendaCarro (modelo) {
    switch (modelo){
        case 'hatch': 
            return "Compra efetuada com sucesso."
        case 'sedan': 
        case 'Motocicleta':
        case 'Caminhonete':
            return "Tem certeza que não prefere este modelo?"
        default: 
        return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}
console.log(vendaCarro('hatch'))
console.log(vendaCarro('Motocicleta'))
console.log(vendaCarro('Sedan'))
console.log(vendaCarro('Caminhonete'))
console.log(vendaCarro('jetski'))