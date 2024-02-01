//Push Front
function pushFront(arr,value){
    //adds a value to the front of the provided array
    arr[arr.length] = value;

    return arr;
}

let testArr = [1,2,3]
console.log(pushFront(testArr,4))