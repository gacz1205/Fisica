var dist;

var calculate= document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);

function evaluateCase(){

    var sp = document.getElementById('speed');
    var speed = (parseFloat(sp.value)); 

    var tm = document.getElementById('time');
    var time = (parseFloat(tm.value))

    function evaluateDistance(){
       
        dist = speed * time;

    }

    evaluateDistance();
    
    dist = dist.toFixed(2);
    
    printResults(dist, speed, time);
    
}

function printResults(dist, speed, time){

    const solution = document.getElementById("solution");
    
    const data = document.getElementById("datos");
    const dataTitle = document.getElementById("tittle-data");
    
    const answerDistanceTittle = document.getElementById("tittle-ds");
    const answerDistance = document.getElementById("distance-solved");

    const allAnswersTittle = document.getElementById("tittle-aa");
    const allAnswers = document.getElementById("all-answers-solved");

    dataTitle.innerHTML += ("Datos: ");
    
    data.innerHTML+=("La velocidad del objeto es igual a: " + speed + "<p>");
    data.innerHTML+=("El tiempo recorrido por el objeto es igual a: " + time + "<p>");
    
    // data.innerHTML =+ ("La distancia total es igual a:" + distT + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto A es igual a:" + veloA + "<p>");
    // data.innerHTML =+ ("La velocidad del objeto B es igual a:" + veloB + "<p>");

    solution.innerHTML+=("Solución");
   
    answerDistanceTittle.innerHTML += ("Calculando las distancias");
    
    answerDistance.innerHTML+=("Para calcular la distancia que recorre el objeto realizamos lo siguiente: "  + "</p>");
    answerDistance.innerHTML+=("Reemplazamos los valores de la ecuación d = v * t" + "</p>");
    answerDistance.innerHTML+=("d = " + speed + " * " + time + "</p>");
    answerDistance.innerHTML+=("d = " + dist + "</p>");
    answerDistance.innerHTML+=("La distancia recorrida por el objeto es: " + dist + "</p>");
    answerDistance.innerHTML+=("Este procedimiento siempre se podrá realizar cuando existan los datos de velocidad y tiempo "  + "</p>");

    allAnswersTittle.innerHTML+= ("En resumen esta es la respuesta: ")

    allAnswers.innerHTML+=("d = " + dist + "</p>");
    allAnswers.innerHTML+=("La distancia recorrida por el objeto es de " + dist + "</p>");

    
}

// TOOGLE MOBILE MENU

const menuMobileIcon = document.querySelector('.menu');

menuMobileIcon.addEventListener('click', toogleMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu');

function toogleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}