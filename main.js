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

    console.log("Conociendo que tenemos como la distancia total entre el punto A y B que corresponde a " + distT + ", creamos la siguiente ecuación:") ;
    console.log("DT = DA + DB, esto se lee como la distancia total es igual a la distancia recorrida por el objeto A sumada a la distancia recorrida por el objeto B") ;
    console.log("Teniendo en consideración la formula del movimiento rectilineo Uniforme (D = V * T), Procedemos a crear dos ecuaciones, una con la distancia recorrida por el objeto A y una con la distancia recorrida por el punto B");
    console.log("DA = VA * T");
    console.log("DB = VB * T");
    console.log("Reemplazamos los valores en la ecuacion de distancia total");
    console.log(distT + " = " + "VA * T + VB * T");
    console.log(distT + " = " + veloA + " * T + "  + veloB + " * T");
    console.log(distT + " = " + veloA + "T"  + veloB + "T");
    console.log(distT + " = " + (veloA + veloB) + "T");
    console.log(distT + "/" + (veloA + veloB) + " = T");
    console.log(timeT + "= T");
    console.log("T = " + timeT);
    console.log("El tiempo en el que se encuentran los objetos es: " + timeT)   
        
    console.log("Para calcular la distancia que recorre el objeto A realizamos lo siguiente: " );
    console.log("Reemplazamos los valores de la ecuación DA = VA * T ");
    console.log("DA = " + veloA + " * " + timeT);
    console.log("DA = " + distA);

    console.log("La distancia recorrida por el objeto A es: " + distA);

    console.log("Para calcular la distancia que recorre el objeto B realizamos lo siguiente: " );
    console.log("Reemplazamos los valores de la ecuación DT = DA + DB ");
    console.log(distT + " = " + distA + " + DB");
    console.log(distT + " - " + distA + " = DB");
    console.log( distB + " = DB");

    console.log("Las respuestas son: ");
    console.log("T = " + timeT);
    console.log("DA = " + distA);
    console.log("DB = " + distB);

}
