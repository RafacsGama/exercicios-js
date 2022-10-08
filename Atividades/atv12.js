function fat(a){
    if( a == 0){
        return 1
    }else{
        return a * fat(a-1) 
    }
}
console.log(fat(10))