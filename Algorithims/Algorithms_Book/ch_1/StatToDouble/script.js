function statToDouble(){
    let diceOne = Math.round((Math.random() * 5) + 1)
    let diceTwo = Math.round((Math.random() * 5) + 1)

    let max = 1,
        min = 1,
        avg = 0,
        sum = 0,
        count = 0;
    let rolls = []

    while(diceOne != diceTwo){
        rolls.push(diceOne);
        rolls.push(diceTwo);

        count++;

        diceOne = Math.round((Math.random() * 5) + 1)
        diceTwo = Math.round((Math.random() * 5) + 1)
    }
    console.log("Doubles Are roled after : " + count +" rolls")
    if(rolls.length > 0){
        min = rolls[0];
        for(let i = 0; i< rolls.length; i++){
            if(min > rolls[i]){
                min = rolls[i];
            }
            if(max < rolls[i]){
                max = rolls[i];
            }
            sum += rolls[i];
        }
        avg = sum/rolls.length
    }
    console.log("Min: "+ min +" Max: "+ max+ " Average: "+ avg + " Number of rolls: " +count)
}