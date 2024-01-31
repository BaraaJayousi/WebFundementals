function generateChange(cents){
    let pennies = 0;
    let nickles = 0;
    let dimes = 0;
    let quarters = 0;
    let halfDollars = 0;

    if(cents / 50 >= 1){
        halfDollars = Math.floor(cents / 50);
        cents -= 50 * halfDollars
    }
    if(cents / 25 >= 1){
        quarters = Math.floor(cents / 25);
        cents -=25 * quarters;
    }
    if(cents / 10 >= 1){
        dimes = Math.floor(cents / 10);
        cents -= 10 * dimes;
    }
    if(cents / 5 >= 1){
        nickles = Math.floor(cents / 5);
        cents -= 5 * nickles;
    }

    pennies = cents;
    
    console.log("Half Dollars (50c): " + halfDollars + "  Quarters (25c): " + quarters + " Dimes (10c): " + dimes +" Nickles (5c): " + nickles + " Pennies (1c): " + pennies)
}