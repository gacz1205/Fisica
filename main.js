let distT = document.getElementById(dist);
let veloA = document.getElementById(velA);
let veloB = document.getElementById(velB);
let distA;
let distB;
let timeT;

let calculate = document.getElementById(cal);

calculate.addEventListener('click', timeTot);

function timeTot ()
{
   // VA X T + VB X T = DISTT
    timeT = distT / (veloA + veloB);

    function distanceA()
    {
    //distT = distA + distB
    //distA = distT - distB
    distB = veloB * timeT;
    distA = distT - distB;
    }

    function distanceB ()
    {
    distB = distT - distA;
    }

}

function printResults ()
{
    console.log("la distancia en A es" + distA);
    console.log("la distancia en B es" + distB);
    console.log("El tiempo es" + timeT);
}