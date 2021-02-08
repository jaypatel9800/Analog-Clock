setInterval (setTime, 1000)
const hours  = document.querySelector('[hrs]');
const minutes = document.querySelector('[min]');
const seconds = document.querySelector('[sec]');

function setTime () {
    let currentTime = new Date();
    let secondRatio = currentTime.getSeconds()/60;
    let minuteRatio = (secondRatio + currentTime.getMinutes())/60;
    let hourRatio = (minuteRatio + currentTime.getHours())/12;
    
    function setRotation(element, rotationRatio) {
        element.style.setProperty ('--rotation',rotationRatio * 360)
    }
    setRotation(seconds, secondRatio);
    setRotation(minutes, minuteRatio);
    setRotation(hours, hourRatio);
}