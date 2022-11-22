var distA;
var distB;
var timeT;

var calculate = document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);




function evaluateCase (){
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

    timeTot();
    distanceA();
    distanceB();

    timeT = timeT.toFixed(2);
    distA = distA.toFixed(2);
    distB = distB.toFixed(2);

    printResults(distT, distA ,distB , timeT, veloA, veloB);

    
}

function printResults(distT, distA ,distB , timeT, veloA, veloB){
    
    var respuesta = document.getElementById("problem-solved")

    respuesta.innerHTML+=("Conociendo que tenemos como la distancia total entre el punto A y B que corresponde a " + distT + ", creamos la siguiente ecuación:" + "</p>") ;
    respuesta.innerHTML+=("DT = DA + DB, esto se lee como la distancia total es igual a la distancia recorrida por el objeto A sumada a la distancia recorrida por el objeto B" + "</br>") ;
    respuesta.innerHTML+=("Teniendo en consideración la formula del movimiento rectilineo Uniforme (D = V * T), Procedemos a crear dos ecuaciones, una con la distancia recorrida por el objeto A y una con la distancia recorrida por el punto B" + "</p>");
    respuesta.innerHTML+=("DA = VA * T" + "</p>");
    respuesta.innerHTML+=("DB = VB * T" + "</p>");
    respuesta.innerHTML+=("Reemplazamos los valores en la ecuacion de distancia total" + "</p>");
    respuesta.innerHTML+=(distT + " = " + "VA * T + VB * T" + "</p>");
    respuesta.innerHTML+=(distT + " = " + veloA + " * T + "  + veloB + " * T" + "</p>");
    respuesta.innerHTML+=(distT + " = " + veloA + "T"  + veloB + "T" + "</p>");
    respuesta.innerHTML+=(distT + " = " + (veloA + veloB) + "T" + "</p>");
    respuesta.innerHTML+=(distT + "/" + (veloA + veloB) + " = T" + "</p>");
    respuesta.innerHTML+=(timeT + "= T" + "</p>");
    respuesta.innerHTML+=("T = " + timeT + "</p>");
    respuesta.innerHTML+=("El tiempo en el que se encuentran los objetos es: " + timeT + "</p>")   

    respuesta.innerHTML+=("Para calcular la distancia que recorre el objeto A realizamos lo siguiente: "  + "</p>");
    respuesta.innerHTML+=("Reemplazamos los valores de la ecuación DA = VA * T " + "</p>");
    respuesta.innerHTML+=("DA = " + veloA + " * " + timeT + "</p>");
    respuesta.innerHTML+=("DA = " + distA + "</p>");

    respuesta.innerHTML+=("La distancia recorrida por el objeto A es: " + distA) + "</p>";

    respuesta.innerHTML+=("Para calcular la distancia que recorre el objeto B realizamos lo siguiente: "  + "</p>");
    respuesta.innerHTML+=("Reemplazamos los valores de la ecuación DT = DA + DB " + "</p>");
    respuesta.innerHTML+=(distT + " = " + distA + " + DB" + "</p>");
    respuesta.innerHTML+=(distT + " - " + distA + " = DB" + "</p>");
    respuesta.innerHTML+=( distB + " = DB" + "</p>");

    respuesta.innerHTML+=("Las respuestas son: " + "</p>");
    respuesta.innerHTML+=("T = " + timeT + "</p>");
    respuesta.innerHTML+=("DA = " + distA + "</p>");
    respuesta.innerHTML+=("DB = " + distB + "</p>");

}
