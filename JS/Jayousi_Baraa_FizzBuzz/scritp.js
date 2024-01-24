let textDiv = document.querySelector("#text")
for(var i = 1; i <= 100; i++){
    mutlitpleOfThree = i % 3 == 0;
    mutlipleOfFive = i % 5 == 0;

    if(mutlitpleOfThree && mutlipleOfFive){
        console.log("FizzBuzz")
        textDiv.innerHTML += "<p>FizzBuzz</p>"
    }
    else if(mutlipleOfFive){
        console.log("Buzz")
        textDiv.innerHTML += "<p>Buzz</p>"
    }
    else if(mutlitpleOfThree){
        console.log("Fizz")
        textDiv.innerHTML += "<p>Fizz</p>"
    }
    else{
        console.log(i)
        textDiv.innerHTML += "<p>" + i+ "</p>"
    }
}