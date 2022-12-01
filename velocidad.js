var speed;

var calculate= document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);

function evaluateCase(){

    var dt = document.getElementById('speed');
    var dist = (parseFloat(dt.value)); 

    var tm = document.getElementById('time');
    var time = (parseFloat(tm.value))

    function evaluateSpeed(){
       
        speed = dist / time;

    }

    evaluateSpeed();
    
    speed = speed.toFixed(2);
    
    printResults(dist, speed, time);
    
}

function printResults(dist, speed, time){

    const solution = document.getElementById("solution");
    
    const data = document.getElementById("datos");
    const dataTitle = document.getElementById("tittle-data");
    
    const answerSpeedTittle = document.getElementById("tittle-sp");
    const answerSpeed = document.getElementById("speed-solved");

    const allAnswersTittle = document.getElementById("tittle-aa");
    const allAnswers = document.getElementById("all-answers-solved");

    dataTitle.innerHTML += ("Datos: ");
    
    data.innerHTML+=("d = " + dist + "<p>");
    data.innerHTML+=("t = " + time + "<p>");
    
    // data.innerHTML =+ ("La distancia total es igual a:" + distT + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto A es igual a:" + veloA + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto B es igual a:" + veloB + "<p>");

    solution.innerHTML+=("Solución");
   
    answerSpeedTittle.innerHTML += ("Calculando la velocidad");
    
    answerSpeed.innerHTML+=("Para calcular la velocidad del objeto realizamos lo siguiente: "  + "</p>");
    answerSpeed.innerHTML+=("Reemplazamos los valores de la ecuación v = d / t" + "</p>");
    answerSpeed.innerHTML+=("v = " + dist + " / " + time + "</p>");
    answerSpeed.innerHTML+=("v = " + speed + "</p>");
    answerSpeed.innerHTML+=("La velocidad a la que el objeto recorrio la distancia es: " + speed + "</p>");
    answerSpeed.innerHTML+=("Este procedimiento siempre se podrá realizar cuando existan los datos de distancia y tiempo "  + "</p>");

    allAnswersTittle.innerHTML+= ("En resumen esta es la respuesta: ")

    allAnswers.innerHTML+=("v = " + speed + "</p>");
    allAnswers.innerHTML+=("La velocidad del objeto es: " + speed + "</p>");

    
}