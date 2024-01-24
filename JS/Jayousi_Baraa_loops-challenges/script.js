function printOdds(){
    for(var i = 1; i <= 20;i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}

function multiplesOf3(){
    for(var i = 100; i >= 0; i--){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}

function printSequance(){
    for(var i = 4; i > -4; i-=1.5){
        console.log(i)
    }
}

function sigmaLoop(){
    let sum=0;
    for(var i = 1; i <= 100; i++){
        sum+=i
    }
    console.log(sum)
}

function sigma(n){
    if(n == 0){
        return 0;
    }
    return n + sigma(n - 1)
}

function factorialLoop(){
    let product = 1;
    for(var i =1; i <= 12; i++){
        product *= i
    }
    console.log(product)
}

function factorial(n){
    if(n == 0){
        return 1;
    }

    return n * factorial(n -1)
}


console.log("Challenge 1: Printing Odds 1 - 20")
printOdds();

console.log("Challenge 2: Decreasing Multiples of 3")
multiplesOf3();

console.log("Challenge 3: Print Sequance:")
printSequance();

console.log("Challenge 4a: Sigam using for loop")
sigmaLoop();

console.log("Challenge 4b: Sigam using recursions")
console.log(sigma(100));

console.log("Challenge 5a: Factorial using for loop")
factorialLoop();

console.log("Challenge 5b: Factorial using recursions")
console.log(factorial(12));