function sumToOne(num){
    //the function sums the digits in the provided numbers till the resulting number has one digit 
    //e.g 1235 ==> 11 ==> 2 is the final result
    let sum =0;
    while(num > 0){
        sum += num% 10;
        num = Math.floor(num/10);
        // console.log("Number: " +num+ " Sum: " + sum)

        //before exiting the loop check if the sum has more than one digit 
        if(sum >= 10 && num == 0){
            num = sum;
            sum = 0;
        }
    }

    console.log("The final one digit result : " + sum)
}