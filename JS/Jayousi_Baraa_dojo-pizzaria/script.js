function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]))

console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))


console.log(pizzaOven("rolled", "tomato", ["chedder", "feta"], ["mushrooms", "bell peppers", "sausage"]))

console.log(pizzaOven("hand tossed", "ketch-up", ["mozzarella", "greek"], ["olives", "onions"]))

//Bonus: Random pizza maker

    let crustTypeList=["napolitan", "new york", "st. louis", "sicilian", "chicago-style deep dish", "pan pizza", "rolled", "deep dish"];
    let sauceTypeList =["traditional", "marinara", "tomato", "red", "white", "pesto", "alfredo", "arrabbiata", "buffalo", "salsa"];
    let cheesesList = ["mozzarella", "feta", "chedder", "aged havarti", "gorgonzola", " parmigiano-reggiano", "toma"," provolone", "gouda", "Gruyere", "Ricotta", "goat cheese", "pecorino-romano", "parmesan"];
    let toppingsList =["anchovies" ,"bacon" ,"chicken" ,"ground beef" ,"mushrooms" ,"olives" ,"onions" ,"pepperoni" ,"peppers" ,"pineapple" ,"salami" ,"sausage" ,"spinach" ,"tomatoes"];
/*This funtion uses Math.random with a pre-prepared list of pizza types, sauces, cheeses and topping
    to generate a random pizza your dinner will be up to fate XD */

function randomPizza(crustTypeList, sauceTypeList, cheesesList, toppingsList){
    //Set a random crust type and sauce for the random pizza, yummyyyy!
    let randCrustType = crustTypeList[Math.round(Math.random() * (crustTypeList.length - 1))]
    let randsauceType = sauceTypeList[Math.round(Math.random() * (sauceTypeList.length - 1))]

    //set a random number of cheese types minimum  1 type (sucks I know) up to 4 types (yeppeeee)
    let cheesesTypesAmount = Math.round(Math.random() * 3 + 1)
    let cheesesTypes=[];
    for(let i = 0; i < cheesesTypesAmount; i++){
        cheesesTypes.push(cheesesList[Math.round(Math.random() * (cheesesList.length - 1))]);
    }

    //set a random number of toppings starting from 0 (Sad!!) topping up to 6 toppings (Toppings overload )
    let toppingsAmount = Math.round(Math.random() * 6);
    let toppingTypes=[];
    for(let i =0; i < toppingsAmount; i++){
        toppingTypes.push(toppingsList[Math.round(Math.random() * (toppingsList.length - 1))])
    }
    
    //Bake the random pizza with the pizzaOven() then return it
    return pizzaOven(randCrustType,randsauceType, cheesesTypes,toppingTypes)
}
//Bonus test
console.log("%c Testing bonus function","color:white; background-color:red;font-weight:600;font-size:18px")
let testingRepeation = 10;

for(var i =0; i < testingRepeation; i++){
    console.table(randomPizza(crustTypeList, sauceTypeList, cheesesList, toppingsList));
}


//Printing the random pizza onto the DOM
let pizzaDetailsElem = document.querySelector("#pizza");
let pizzaOrder = randomPizza(crustTypeList, sauceTypeList, cheesesList, toppingsList);

pizzaDetailsElem.innerHTML += "<ol class='alternating-colors'>";
const orderedList = document.createElement('ol');
orderedList.classList.add('alternating-colors')
for(i=0; i  < Object.keys(pizzaOrder).length; i++){
    orderedList.innerHTML +=`<li><strong>${Object.keys(pizzaOrder)[i]}:</strong><p>${(Object.values(pizzaOrder)[i].length > 0)?(Object.values(pizzaOrder)[i]):"<em>Nothing</em>"}</p></li>`;
}
pizzaDetailsElem.appendChild(orderedList)