let testArr = [-1,2,3,-5,6,7,8,-9]

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



function removeNegatives(arr){
    //check if the last value is negative number
    if(arr[arr.length -1] < 0){
        arr.pop();
    }

    //removes negative numbers without keeping the original order of the array
    for(let i = 0; i < arr.length;i++){
        if(arr[i] < 0){
            let temp = arr[i];
            arr[i] = arr[arr.length -1];
            arr[arr.length - 1] = temp;

            arr.pop();
        }
    }

    return arr;
}

console.log("remove negatives: ", removeNegatives(testArr))


function skylineHeight(arr){
    let newArr = []
    let heighestOnbe = 0;

    for(let i = 0; i< arr.length ;i++){
        if(arr[i] > heighestOnbe){
            newArr.push(arr[i])
            heighestOnbe = arr[i]
        }
    }
    return newArr
}

console.log("skyline hight book ex: ",skylineHeight([1,-1,7,3]))
console.log("skyline hight: ",skylineHeight(testArr))


let sortedArray = [20,23,44, 70, 102, 113,115,119]

function binarySearch(arr, value){
    //becuase the array is sorted the last value must be the largest in the array hence the desired value must be smaller
    //if the last value is smaller than the desired value then it can't be present in the array
    // if(arr[arr.length -1 ] < value){
        
    //     return false
    // }

    //implemneting the divide and conqoure strategy
    let low = 0;
    let high = arr.length -1
    let mid = Math.floor(low + (high - low)/2)
    while(mid != low && mid > -1){
        if(arr[mid] > value){
            high = mid - 1
            mid = Math.floor(low + (high - low)/2)
        }else{
            low = mid +1;
            mid = Math.floor(low + (high - low)/2)
        }

        if(arr[mid] == value){
            return true
        }
    }
    console.warn("The value %d you're looking for is not present",value)
    return false;
}

console.log("%c Binary Search Algorithm","color:red; font-size:42px; font-weight:800")

console.log("ordered array: ", sortedArray)

console.log("Binary Search for 120: ",binarySearch(sortedArray,120))
console.log("Binary Search for 44: ",binarySearch(sortedArray,44))
console.log("Binary Search for 102: ",binarySearch(sortedArray,102))
console.log("Binary Search for 100: ",binarySearch(sortedArray,100))
console.log("Binary Search for 23: ",binarySearch(sortedArray,23))
console.log("Binary Search for 119: ",binarySearch(sortedArray,119))
console.log("Binary Search for 21: ",binarySearch(sortedArray,21))
console.log("Binary Search for 115: ",binarySearch(sortedArray,115))



function rotateArr(arr, shiftBy){
    if(shiftBy % arr.length == 0){
        return arr
    }
    document.body.
    
}