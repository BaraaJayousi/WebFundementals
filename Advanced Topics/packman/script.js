let world =
[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2],
[2,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,2,0,2,2,2,2,2,2,2,0,2],
[2,0,2,2,2,2,2,2,2,0,2,2,0,2,2,0,2,2,0,2,2,2,2,2,2,2,0,2],
[2,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2],
[2,0,2,2,0,0,0,0,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,2,2,0,2],
[2,0,0,0,0,0,0,0,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,2,2,2,0,0,0,0,2,2,2,2,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],

]

let worldElem = document.querySelector("#world");
let playerElem = document.getElementById("pacman")
let playerPos ={
    x: 1,
    y:1}

let elementsClasses ={
    0:"empty",
    1:"coin",
    2:"brick",
    3:"cherry",
}

let score = 0;

function drawWorld(){
    let output = ""
    for(let rows =0; rows < world.length; rows++){
        output += `<div class="row">`;
        for(let cols=0; cols < world[rows].length; cols++){
            let currentClass = elementsClasses[`${world[rows][cols]}`]
            output += `<div class=${currentClass}></div>`
        }
        output += "</div>\n"
    }

    worldElem.innerHTML = output
}



function updateGame(){
    document.querySelector("#pacman").style.left = playerPos.x * 20+ "px";
    document.querySelector("#pacman").style.top = playerPos.y * 20 +"px";

    if(world[playerPos.y][playerPos.x] == 1){
        world[playerPos.y][playerPos.x] = 0;
        score += 10;
    }else if(world[playerPos.y][playerPos.x] == 3){
        world[playerPos.y][playerPos.x] = 0;
        score +=50
    }
    displayScore();
    drawWorld();
}

function displayScore(){
    document.querySelector("#score").innerText= score
}


//Draws a cherry for 3 seconds at a random point in the world
function randomCherry(){
    let cherryPos={
        x:Math.round(Math.random() * (world[0].length -1) ),
        y:Math.round(Math.random() * (world.length-1 ))
    }
    console.log("x: " + cherryPos.x +" y: " + cherryPos.y)
    if(world[cherryPos.y][cherryPos.x] == 0){
        world[cherryPos.y][cherryPos.x] = 3
        setTimeout(() => {
            world[cherryPos.y][cherryPos.x] = 0;
            drawWorld();
        }, 3000);
        drawWorld();
        
    }
}

//calls random cherry every 6 seconds
setInterval(randomCherry, 1000);
drawWorld();
updateGame();

//Player's controls
document.onkeydown = function(e){
    if(e.keyCode == 39) //right key
    {
        if(world[playerPos.y][playerPos.x+1] != 2){
            playerPos.x++
        }
        
    }else if(e.keyCode == 37) //left key
    {
        if(world[playerPos.y][playerPos.x-1] != 2){
            playerPos.x-- 
        }
    }else if(e.keyCode == 38) //up key
    {
        if(world[playerPos.y - 1][playerPos.x] != 2){
            playerPos.y-- ;
        }
    }else if(e.keyCode == 40) //down key
    {
        if(world[playerPos.y + 1][playerPos.x] != 2){
            playerPos.y++;
        }
    }

    updateGame();
}