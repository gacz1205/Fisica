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
    
    var solution = document.getElementById("solution");
    
    var data = document.getElementById("datos");
    
    var answerTimeTittle = document.getElementById("tittle-ts")
    var answerTime = document.getElementById("time-solved");  

    var answerDistanceTittle = document.getElementById("tittle-ds");
    var answerDistance = document.getElementById("distance-solved");

    var allAnswersTittle = document.getElementById("tittle-cs");
    var allAnswers = document.getElementById("compact-solved");
    

    solution.innerHTML =+ ("Solución: ");

    data.innerHTML =+ ("La distancia total es igual a:" + distT + "<p>");
    data.innerHTML =+ ("La velocidad del objeto A es igual a:" + veloA + "<p>");
    data.innerHTML =+ ("Lavelocidad del objeto B es igual a:" + veloB + "<p>");

    answerTimeTittle.innerHTML+= ("Calculando el tiempo");

    answerTime.innerHTML+=("Conociendo que tenemos como la distancia total entre el punto A y B que corresponde a " + distT + ", creamos la  ecuación:" + "</p>") ;
    answerTime.innerHTML+=("DT = DA + DB, esto se lee como la distancia total es igual a la distancia recorrida por el objeto A sumada a la  recorrida por el objeto B" + "</p>") ;
    answerTime.innerHTML+=("Teniendo en consideración la formula del movimiento rectilineo Uniforme (D = V * T), Procedemos a crear dos ecuaciones, a distancia recorrida por el objeto A y una con la distancia recorrida por el punto B" + "</p>");
    answerTime.innerHTML+=("DA = VA * T" + "</p>");
    answerTime.innerHTML+=("DB = VB * T" + "</p>");
    answerTime.innerHTML+=("Reemplazamos los valores en la ecuacion de distancia total" + "</p>");
    answerTime.innerHTML+=(distT + " = " + "VA * T + VB * T" + "</p>");
    answerTime.innerHTML+=(distT + " = " + veloA + " * T + "  + veloB + " * T" + "</p>");
    answerTime.innerHTML+=(distT + " = " + veloA + "T"  + veloB + "T" + "</p>");
    answerTime.innerHTML+=(distT + " = " + (veloA + veloB) + "T" + "</p>");
    answerTime.innerHTML+=(distT + "/" + (veloA + veloB) + " = T" + "</p>");
    answerTime.innerHTML+=(timeT + "= T" + "</p>");
    answerTime.innerHTML+=("T = " + timeT + "</p>");
    answerTime.innerHTML+=("El tiempo en el que se encuentran los objetos es: " + timeT + "</p>")   

    
    answerDistanceTittle.innerHTML += ("Calculando las distancias");
    
    answerDistance.innerHTML+=("Para calcular la distancia que recorre el objeto A realizamos lo siguiente: "  + "</p>");
    answerDistance.innerHTML+=("Reemplazamos los valores de la ecuación DA = VA * T " + "</p>");
    answerDistance.innerHTML+=("DA = " + veloA + " * " + timeT + "</p>");
    answerDistance.innerHTML+=("DA = " + distA + "</p>");
    answerDistance.innerHTML+=("La distancia recorrida por el objeto A es: " + distA) + "</p>";
    answerDistance.innerHTML+=("Para calcular la distancia que recorre el objeto B realizamos lo siguiente: "  + "</p>");
    answerDistance.innerHTML+=("Reemplazamos los valores de la ecuación DT = DA + DB " + "</p>");
    answerDistance.innerHTML+=(distT + " = " + distA + " + DB" + "</p>");
    answerDistance.innerHTML+=(distT + " - " + distA + " = DB" + "</p>");
    answerDistance.innerHTML+=( distB + " = DB" + "</p>");


    allAnswersTittle.innerHTML+= ("En resumen estas son las respuestas: ")

    allAnswers.innerHTML+=("Las respuestas son: " + "</p>");
    allAnswers.innerHTML+=("T = " + timeT + "</p>");
    allAnswers.innerHTML+=("DA = " + distA + "</p>");
    allAnswers.innerHTML+=("DB = " + distB + "</p>");
}