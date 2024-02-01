function lastDigitAtoB(a,b){
    //checks if inputs are positive
    if(a < 0 || b < 0){
        console.log("Please provide positive numbers")
        return
    }
    //the answer is always 1 if the exponent is 0
    if(b == 0){
        return 1
    }

    console.log("the last digit :" ,Math.pow(a,b)%10)
}