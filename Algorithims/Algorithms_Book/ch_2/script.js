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