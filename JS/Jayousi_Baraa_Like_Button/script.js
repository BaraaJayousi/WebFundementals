//First approach where button's ids' should be unique and ordered correctly starting from zero

// Stores all likes elements in an array
let likeTextArr = document.querySelectorAll(".likes > p");
function incLike(element){
    let likesValue = parseInt(likeTextArr[element.id].innerText) + 1;
    likeTextArr[element.id].innerText = likesValue + " like(s)"
}

//second apporach where no need to keep track of the button's id ==> preferred
function incLike2(element){
    let likeText = document.querySelector("#" +element.id + "+ p");
    likeText.innerText = (parseInt(likeText.innerText) + 1) + " like(s)";
}