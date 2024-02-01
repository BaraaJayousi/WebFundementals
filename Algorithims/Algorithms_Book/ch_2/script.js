let testArr = [1,2,3,5,6,7,8,9]

console.log("Starting array: " , testArr)

//Push Front
function pushFront(arr,value){
    //adds a value to the front of the provided array
    // arr[arr.length] = value;

    //implementing the function without using Arry.length
    let arrLen = 0; 
    while(arr[arrLen]){
        arrLen++
    }
    arr[arrLen] = value
    return arr;
}


console.log("pusing to front: ",pushFront(testArr,420))

function popFront(arr){
    arr.pop();
    return arr;
}

console.log("poping from front: ",popFront(testArr))


function insertAt(arr,index,value){
    let arrLen = 0; 
    while(arr[arrLen]){
        arrLen++
    }

    if(index > arrLen){
        console.warn("Please provide a value less or equal than the array's length")
        return arr;
    }

    for(let i = arrLen; i > index; i--){
        arr[i] = arr[i-1]
    }
    arr[index] = value;

    return arr;
}

console.log("inserting at an index: ",insertAt(testArr,1,100))


function removeAt(arr,index){
    let arrLen = 0; 
    while(arr[arrLen]){
        arrLen++
    }

    if(index > arrLen - 1){
        console.warn("Please provide a value less than the array's length")
        return arr;
    }

    //swap the desired value at the specifed index  with the last index then pop it **** doesn't keep original order
    // let temp = arr[index]
    // arr[index] = arr[arrLen - 1]
    // arr[arrLen - 1] = temp;
    // arr.pop();

    //Swap the desired vale to the end of the array without altering the order
    let temp = arr[index]
    for(let i = index; i < arrLen; i++){
        arr[i]= arr[i+1]
    }

    arr[arrLen - 1] = temp
    arr.pop();
    return arr
}   


console.log("Removing value At idx 1: ", removeAt(testArr, 1))



function reverseArry(arr){
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - 1 - i] = temp
    }

    return arr;
}

console.log("reversing arry: ",reverseArry(testArr))