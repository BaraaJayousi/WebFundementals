function sigma(num){
    let sum = 0
    if(num > 0){
        for(let i = 0; i <= num; i++){
            sum += i;
        }
    }

    return sum;
}