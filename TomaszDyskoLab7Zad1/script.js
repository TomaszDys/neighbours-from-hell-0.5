var pointsCounter = 0;
var clickingFactor = 1;
var timeFactor = 1;
//funkcja dodająca punkty wraz z czasem
function addPointsTime() {
    pointsCounter += timeFactor;
    document.getElementById("points").innerHTML = pointsCounter;
    document.getElementById("points-per-second").innerHTML = timeFactor;
}
//funkcja dodająca punkty po kliknięciu w sąsiada
function addPointsClick(event) {
    pointsCounter += clickingFactor;
    var pointsNumber = document.getElementById("points").innerHTML;
    pointsNumber = pointsCounter;
    var x = event.clientX;
    var y = event.clientY;
    var elem = document.createElement('h3');
    elem.innerText = "+" + clickingFactor;
    elem.className = "point-alert";
    elem.id = "clicking-area";
    elem.style.top = y + 'px';
    elem.style.left = x + 'px';
    document.body.appendChild(elem);
    fade(elem);   
    
}
//dodawanie punktów wraz z czasem
setInterval(addPointsTime, 1000);
//funkcja tworząca animacje dla bloków wydarzeń
function fade(element) {
    var leftValue = element.style.left;
    leftValue = leftValue.slice(0, -2);
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            document.body.removeChild(element);
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
        leftValue = Number(leftValue) + 2;
        element.style.left = leftValue + 'px';
    }, 50);
}
//funkcje kupowania poszczególnych obiektów ze sklepu
function buyEgg(event) {
    if (pointsCounter >= 50) {
        pointsCounter -= 50;
        timeFactor += 1;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.createElement('h3');
        elem.innerText = "-50pkt + 1 pkt/sek";
        elem.className = "point-alert";
        elem.id = "clicking-area";
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
        document.body.appendChild(elem);
        fade(elem);
        document.getElementById("points-per-second").innerHTML = timeFactor;
    }
}
function buyPins(event) {
    if (pointsCounter >= 100) {
        pointsCounter -= 100;
        timeFactor += 2;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.createElement('h3');
        elem.innerText = "-100pkt + 2pkt/sek";
        elem.className = "point-alert";
        elem.id = "clicking-area";
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
        document.body.appendChild(elem);
        fade(elem);
        document.getElementById("points-per-second").innerHTML = timeFactor;
    }
}
function buySaw(event) {
    if (pointsCounter >= 500) {
        pointsCounter -= 500;
        clickingFactor += 10;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.createElement('h3');
        elem.innerText = "-500pkt + 10pkt/klik";
        elem.className = "point-alert";
        elem.id = "clicking-area";
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
        document.body.appendChild(elem);
        fade(elem);

    }
}
function buyPills(event) {
    if (pointsCounter >= 1500) {
        pointsCounter -= 1500;
        timeFactor += 20;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.createElement('h3');
        elem.innerText = "-1500pkt + 20pkt/sec";
        elem.className = "point-alert";
        elem.id = "clicking-area";
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
        document.body.appendChild(elem);
        fade(elem);
    }
}
function buyFinisher(event) {
    if (pointsCounter >= 999999) {
        pointsCounter -= 999999;
        pointsCounter = 0;
        timeFactor = 1;
        clickingFactor = 1;
        var x = event.clientX;
        var y = event.clientY;
        var elem = document.createElement('h3');
        elem.innerText = "FINISZ!";
        elem.className = "point-alert";
        elem.id = "clicking-area";
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
        document.body.appendChild(elem);
        fade(elem);
        alert("Gratuluję wykończyłeś sąsiada!");
    }
}

