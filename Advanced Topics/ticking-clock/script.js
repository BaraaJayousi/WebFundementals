function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);    
    // your code here
    let secondsPerMinute =time % 60;
    let minutesPerHour = (time / 60) % 60;
    let hours = time /3600;

    let secondsHand = document.querySelector("#seconds");
    let minutesHand = document.querySelector("#minutes")
    let hoursHand = document.querySelector("#hour");

    secondsHand.style.transform = `rotate(${(secondsPerMinute * 6) + 180}deg)`;
    minutesHand.style.transform = `rotate(${(minutesPerHour * 6) - 180}deg) `;
    hoursHand.style.transform = `rotate(${(hours * 30) + 180}deg)`;

}, 1000);

// function drawFaceMarks(){
//     let faceElement = document.querySelector("#face");
    
    
//     for(let i = 0; i < 4; i++){
//         let markElement =document.createElement("div")
//         let degree = i * 90
//         markElement.classList.add("mark")
//         markElement.style.transform = `rotate(${degree}deg)`
//         if(i%2 !== 0){
//             let orientation = Math.round(Math.sin(degree * Math.PI/180))
//             markElement.style.top = "50%"
//             markElement.style.left = `${orientation > 0? 100: 0}%`
//         }else{
//             let orientation = Math.round(Math.cos(degree * Math.PI/180))
//             markElement.style.left = "50%";
//             markElement.style.top = `${orientation > 0? 100 : 0}%`
//         }
//         faceElement.appendChild(markElement)        
//     }
// }
// drawFaceMarks();