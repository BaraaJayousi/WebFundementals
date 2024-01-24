
//Challenge 1: Always hungry
function alwaysHungry(arr) {
    let i = 0
    let hasFood=false;
    while(i < arr.length){
        if(arr[i] ==="food"){
            console.log("yummy");
            hasFood = true;
        }
        i++;
    }
    if(!hasFood){
        console.log("I'm hungry");
    }
}

console.log("Challenge 1: Always hungry")

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//Challenge 2: High Pass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(let i =0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

console.log("Challenge 2: High Pass filter")
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Challenge 3: Better than the average
function betterThanAverage(arr) {
    var sum = 0;
    let avg = 0
    // calculate the average
    for(let i=0; i< arr.length;i++){
        sum+=arr[i]
    }
    avg = sum/arr.length
    var count = 0
    // count how many values are greated than the average
    for(let i=0; i< arr.length;i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}

console.log("Challeng 3: Better Than Average")
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9,]);
console.log(result); // we expect back 4


//Challege 4: Array Reverse
function reverse(arr) {
    // your code here
    for(let i=0; i < arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[(arr.length-1) - i];
        arr[(arr.length-1) -i] = temp;
    }
    return arr;
}

console.log("Challenge 4: Reverse Array")
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



//Challenge 5: Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(var i=2; i < n; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
    return fibArr;
}

console.log("Challege 5: Fibonacci Array")
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




