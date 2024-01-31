function threesAndFives(){
    let sum = 0;
    for(let i= 100; i <= 400000;i++){
        let divBy3 = i%3 == 0
        let divBy5 = i%5 == 0
        if((divBy3 || divBy5) && !(divBy3 && divBy5)){
            sum+= i;
        }
    }
    return sum;
}

function betterThreesAndFives(start, end){
    let sum = 0;
    for(let i= start; i <= end;i++){
        let divBy3 = i%3 == 0
        let divBy5 = i%5 == 0
        
        if((divBy3 || divBy5) && !(divBy3 && divBy5)){
            sum+= i;
        }
    }
    return sum;
}