var distA;
var distB;
var timeT;

var calculate = document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);

// const timeBar = document.querySelector('heading-ts');

// const timeContainer = document.querySelector('time-solution-container');

// timeBar.addEventListener('ckick', toogleTimeContainer);

// function toogleTimeContainer()
// {
//     timeContainer.classList.add('inactive');
// }



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
    
    const solution = document.getElementById("solution");
    
    const data = document.getElementById("datos");
    const dataTitle = document.getElementById("tittle-data");
    
    const answerTimeTittle = document.getElementById("tittle-ts")
    const answerTime = document.getElementById("time-solved");  

    const answerDistanceTittle = document.getElementById("tittle-ds");
    const answerDistance = document.getElementById("distance-solved");

    const allAnswersTittle = document.getElementById("tittle-cs");
    const allAnswers = document.getElementById("compact-solved");
  

    dataTitle.innerHTML += ("Datos: ");
    
    data.innerHTML+=("La distancia total es igual a: " + timeT + "<p>");
    data.innerHTML+=("La velocidad del objeto A es igual a: " + distA + "<p>");
    data.innerHTML+=("La velocidad del objeto B es igual a: " + distB + "<p>");
    
    // data.innerHTML =+ ("La distancia total es igual a:" + distT + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto A es igual a:" + veloA + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto B es igual a:" + veloB + "<p>");

    solution.innerHTML+=("Solución");

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