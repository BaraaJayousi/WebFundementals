// function generateChange(cents){
//     let pennies = 0;
//     let nickles = 0;
//     let dimes = 0;
//     let quarters = 0;
//     let halfDollars = 0;

//     if(cents / 50 >= 1){
//         halfDollars = Math.floor(cents / 50);
//         cents -= 50 * halfDollars
//     }
//     if(cents / 25 >= 1){
//         quarters = Math.floor(cents / 25);
//         cents -=25 * quarters;
//     }
//     if(cents / 10 >= 1){
//         dimes = Math.floor(cents / 10);
//         cents -= 10 * dimes;
//     }
//     if(cents / 5 >= 1){
//         nickles = Math.floor(cents / 5);
//         cents -= 5 * nickles;
//     }

//     pennies = cents;
    
//     console.log("Half Dollars (50c): " + halfDollars + "  Quarters (25c): " + quarters + " Dimes (10c): " + dimes +" Nickles (5c): " + nickles + " Pennies (1c): " + pennies)
// }

function betterGenerateChange(cents){
    let coinsValues = [50, 25, 10, 5, 1];
    let coinsAmnt = []
    for(let i =0; i < coinsValues.length; i++){
        if(cents / coinsValues[i] >= 1){
            coinsAmnt.push(Math.floor(cents / coinsValues[i]))
            cents -= coinsValues[i] * coinsAmnt[i]
        }else{
            coinsAmnt.push(0)
        }
    }
    console.log("Half Dollars (50c): " + coinsAmnt[0] + "  Quarters (25c): " + coinsAmnt[1] + " Dimes (10c): " + coinsAmnt[2] +" Nickles (5c): " + coinsAmnt[3] + " Pennies (1c): " + coinsAmnt[4])
}