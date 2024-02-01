let testArr = [1,2,3]

console.log("Starting array: " , testArr)

//Push Front
function pushFront(arr,value){
    //adds a value to the front of the provided array
    arr[arr.length] = value;

    return arr;
}


console.log("pusing to fron: ",pushFront(testArr,4))

function popFront(arr){
    arr.pop();
    return arr;
}

console.log("poping from front: ",popFront(testArr))


function insertAt(arr,index,value){
    if(index > arr.length){
        console.warn("Please provide a value less or equal than the array's length")
        return arr;
    }
    for(let i = arr.length; i > index; i--){
        arr[i] = arr[i-1]
    }
    arr[index] = value;

    return arr;
}

console.log("inserting at an index: ",insertAt(testArr,2,100))