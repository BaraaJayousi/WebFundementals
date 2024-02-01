function clockHandAngles(seconds){
    //0 seconds all hands are up with angle equals to zero
    let secondsHandAngle = (seconds % 60) * 6
    let mintuesHandAngle = ((seconds / 60) * 6) % 360
    let hoursHandAngle = (( seconds / 3600) * 6) % 360

    console.log("Hours Angle (degrees): " +hoursHandAngle + " Mintues Angle (degrees): " + mintuesHandAngle + " secondsAngle (degrees): " + secondsHandAngle)
}