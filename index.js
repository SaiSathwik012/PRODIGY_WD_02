var ms = 0, s = 0, m = 0, h = 0;
var timer


var display = document.querySelector('.Timer-Display');
var laps = document.querySelector('.laps');

function Start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms++
    if (ms == 100) {
        ms = 0
        s++
    }
    if (s == 60) {
        s = 0
        m++
    }
    if (m == 60) {
        m = 0
        h++
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " 0 " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms)
}

function Pause()
{
    stopTimer();
}

function stopTimer()
{
    clearInterval(timer);
    timer = false;
}

function Reset()
{
    stopTimer();
    ms=0;
    s=0;
    m=0;
    h=0;
    display.innerHTML =getTimer();
}

function Restart()
{
    if(timer)
    {
        Reset();
        Start();
    }
}


function Lap()
{
    if(timer)
    {
        var li= document.createElement("li");
        li.innerHTML =getTimer();
        laps.appendChild(li);
    }
}


function Resetlap()
{
    laps.innerHTML = "";
}