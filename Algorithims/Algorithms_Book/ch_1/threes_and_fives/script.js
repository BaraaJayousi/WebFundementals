function threesAndFives(){
    for(let i= 100; i <= 400000;i++){
        let divBy3 = i%3 == 0
        let divBy5 = i%5 == 0
        
        if((divBy3 || divBy5) && !(divBy3 && divBy5)){
            if(divBy3 && divBy5)
                console.log("Number: "+i+ " 3: "+divBy3 +"  5: "+divBy5)
        }
    }
}