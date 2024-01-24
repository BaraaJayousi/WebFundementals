let tempratureElemArr = document.querySelectorAll(".weather-card  span")

//Generate random tempratures
for(var i = 0; i < tempratureElemArr.length; i++){
    if(tempratureElemArr[i].className == "hottest"){
        tempratureElemArr[i].innerText = Math.round((Math.random() * 10 + 20 ) * 10) /10 + "°"
    }else{
        tempratureElemArr[i].innerText = Math.round((Math.random() * 10 + 10 ) * 10) /10 + "°"
    }
}

function loadData(element){
    alert("Loading weather report for " + element.innerText)
    //Generate random tempratures
for(var i = 0; i < tempratureElemArr.length; i++){
    if(tempratureElemArr[i].className == "hottest"){
        tempratureElemArr[i].innerText = Math.round((Math.random() * 10 + 20 ) * 10) /10 + "°"
    }else{
        tempratureElemArr[i].innerText = Math.round((Math.random() * 10 + 10 ) * 10) /10 + "°"
    }
}
}

function unitChange(element){
    if(element.value === "F"){
        for(var i = 0; i < tempratureElemArr.length; i++){
            var celliusToFahrenheit = Math.round(((parseFloat(tempratureElemArr[i].innerText) * 9/5) + 32) * 10) / 10;
            tempratureElemArr[i].innerText = celliusToFahrenheit + "°"
        }
    }else{
        for(var i = 0; i < tempratureElemArr.length; i++){
            var FahrenheitToCellius = Math.round(((parseFloat(tempratureElemArr[i].innerText) - 32) * 5/9) * 10) / 10;
            tempratureElemArr[i].innerText = FahrenheitToCellius + "°"
        }
    }
}