var time;

var calculate= document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);

function evaluateCase(){

    var dt = document.getElementById('distance');
    var dist = (parseFloat(dt.value)); 

    var sp = document.getElementById('speed');
    var speed = (parseFloat(sp.value))

    function evaluateSpeed(){
       
        time = dist / speed;

    }

    evaluateSpeed();
    
    time = time.toFixed(2);
    
    printResults(dist, speed, time);
    
}

function printResults(dist, speed, time){

    const solution = document.getElementById("solution");
    
    const data = document.getElementById("datos");
    const dataTitle = document.getElementById("tittle-data");
    
    const answerTimeTittle = document.getElementById("tittle-tm");
    const answerTime = document.getElementById("time-solved");

    const allAnswersTittle = document.getElementById("tittle-cs");
    const allAnswers = document.getElementById("compact-solved");

    dataTitle.innerHTML += ("Datos: ");
    
    data.innerHTML+=("d = " + dist + "<p>");
    data.innerHTML+=("v = " + speed + "<p>");
    
    // data.innerHTML =+ ("La distancia total es igual a:" + distT + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto A es igual a:" + veloA + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto B es igual a:" + veloB + "<p>");

    solution.innerHTML+=("Solución");
   
    answerTimeTittle.innerHTML += ("Calculando el tiempo");
    
    answerTime.innerHTML+=("Para calcular el tiempo en el que el objeto recorre una distancia, realizamos lo siguiente: "  + "</p>");
    answerTime.innerHTML+=("Reemplazamos los valores de la ecuación t = d / v" + "</p>");
    answerTime.innerHTML+=("t = " + dist + " / " + speed + "</p>");
    answerTime.innerHTML+=("t = " + time + "</p>");
    answerTime.innerHTML+=(" El tiempo que tomo el objeto para recorrer la distancia es: " + time + "</p>");
    answerTime.innerHTML+=("Este procedimiento siempre se podrá realizar cuando existan los datos de distancia y tiempo "  + "</p>");

    allAnswersTittle.innerHTML+= ("En resumen esta es la respuesta: ")

    allAnswers.innerHTML+=("t = " + time + "</p>");
    allAnswers.innerHTML+=("El tiempo en que se recorrio la distancia es: " + time + "</p>");

    
}