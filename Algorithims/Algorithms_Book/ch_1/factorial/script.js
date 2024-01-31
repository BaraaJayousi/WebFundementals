function factorial(num){
    if(num == 0){
        //It is a mathmatical rule
        return 1
    }

    return num * factorial(num - 1)
}