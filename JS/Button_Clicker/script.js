function login(element){
    if(element.innerHTML == "Login"){
        element.innerHTML = "Logout";
    }else{
        element.innerHTML = "Login";
    }
}

function addDefinition(element){
    element.remove();
}

function likeButton(element){
    element.innerHTML =(parseInt(element.innerHTML) + 1) + " likes";
    alert("there is " + element.innerHTML + "Now!")
}