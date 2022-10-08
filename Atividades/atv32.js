function medArit (array){
    let media = 0
    for (let i = 0; i < array.length; i++){
        media += array[i]
    }
    return media/array.length
}
array = [1, 2, 3, 4, 5, 6]
console.log (medArit(array))    