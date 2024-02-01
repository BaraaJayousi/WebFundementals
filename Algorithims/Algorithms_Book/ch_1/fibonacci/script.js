//used recusions for faster implementation
// function fibonacci(num){
//     if(num == 0){
//         return 0
//     }else if (num == 1 || num == 2){
//         return 1
//     }

//     return fibonacci(num - 1) + fibonacci(num - 2)
// }


//used loops for loop training 
function fibonacci(num){
    if(num == 0){
        return 0
    }else if (num == 1 || num == 2){
        return 1
    }
    let fibonacciNum = 1
    let n1 = 1;
    let n2 = 1;
    for(let i = 3; i <= num; i++){
        fibonacciNum = n1 + n2;
        n2 = n1;
        n1 = fibonacciNum;
    }

    return fibonacciNum;
}