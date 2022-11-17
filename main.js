var distA;
var distB;
var timeT;

var calculate = document.getElementById('calcu');
calculate.addEventListener('click', printResults);




function printResults (){
    var d = document.getElementById('dist');
    var distT = (parseInt(d.value));
    var a = document.getElementById('velA');
    var veloA = (parseInt(a.value));
    var b = document.getElementById('velB');
    var veloB = (parseInt(b.value));

    function timeTot ()
    {
    // VA X T + VB X T = DISTT
    timeT = distT / (veloA + veloB);
    }

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

//     function problemText()
// {
//     const problemToSolve = document.createElement('p');
//     problemToSolve.innerText =  "La velocidad del objeto A es de " + veloA + " y la velocidad del objeto B es " + veloB + ", teniendo en cuenta que la distancia total entre los dos objetos es de " + distT + "." + "¿Cual sera el tiempo que tarden los objetos en encontrarse?" + "¿Cuales seran las distancias recorridas por cada uno de los objetos?";
// }

//     problemText();
    timeTot();
    distanceA();
    distanceB();

    console.log("El tiempo en el que se encuentran los objetos es: " + timeT)
    console.log("La distancia en A es: " + distA)
    console.log("La distancia en B es: " + distB)
}
