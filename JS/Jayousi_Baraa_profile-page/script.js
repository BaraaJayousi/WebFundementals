console.log("page loaded...");
let connectionRequests = 2;
let connections = 499;

function editName(){
    let userName = document.querySelector("#user-name");
    userName.innerText = "Louis V"
}

function rejectConn(element){
    element.parentElement.parentElement.remove();
    connectionRequests--;
    document.querySelector("#connRequestsCount").innerText = connectionRequests
}

function acceptConn(element){
    let newCnn = element.parentElement.parentElement
    rejectConn(element);
    newCnn.childNodes[3].remove();
    console.log(newCnn)
    document.querySelector("#conn-list").insertAdjacentHTML("afterbegin","<li class='card-list-item start'>" + newCnn.innerHTML +"  </li>")
    connections++;
    if(connections <= 500){
        document.querySelector("#connections").innerText = connections;
    }else{
        document.querySelector("#connections").innerText = "500+"
    }
}