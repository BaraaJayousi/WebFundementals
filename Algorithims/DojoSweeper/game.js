var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 1, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [10, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)" ></button>`;
        }
    }
    return result;
    }
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.


function howMany(i, j, element) {
    console.log({i, j});
    let ninjasSum = 0;
    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            //This condition to avoid summing the clicked button
            if(x !=0 || y != 0){
                // console.log("first:condition: ", i+y < theDojo.length  && i+y > -1)
                // console.log("second condition: ", j+x < theDojo[i].length && j+x > -1)
                if((i+y < theDojo.length && i+y > -1) && (j+x < theDojo[i].length  && j+x > -1)){
                    // ninjasSum += theDojo[i+y][j+x]; 
                    let buttonIndex = ((Math.abs((i+y)*10) ) + (j+x))
                    tatamiElemArr[buttonIndex].innerText = theDojo[i+y][j+x]
                }
            }
        }
    }
    // alert(`There are ${ninjasSum} ninjas in the adjacent squares`);
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
// dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

//load all tatami buttons into an element array, must be declared after rendering the dojo
let tatamiElemArr = document.querySelectorAll(".tatami")


