var timeA;
var timeB;

var calculate = document.getElementById('calcu');
calculate.addEventListener('click', evaluateCase);

function evaluateCase (){
    
    var tad = document.getElementById('tAdicional');
    var adTime = (parseFloat(tad.value));
    var a = document.getElementById('velA');
    var veloA = (parseFloat(a.value));
    var b = document.getElementById('velB');
    var veloB = (parseFloat(b.value));

    distT = adTime * ((veloA * veloB) / (veloB - veloA));
    timeA = distT/ veloA;
    timeB = timeA - adTime;

    printResults(distT, timeA ,timeB , adTime, veloA, veloB);

    
}

function printResults(distT, timeA ,timeB , adTime, veloA, veloB){

    const solution = document.getElementById("solution");
    
    const data = document.getElementById("datos");
    const dataTitle = document.getElementById("tittle-data");
    
    const answerDistanceTittle = document.getElementById("tittle-ds");
    const answerDistance = document.getElementById("distance-solved");

    const answerTimeTittle = document.getElementById("tittle-ts")
    const answerTime = document.getElementById("time-solved");  

    const allAnswersTittle = document.getElementById("tittle-aa");
    const allAnswers = document.getElementById("all-answers-solved");
  

    dataTitle.innerHTML += ("Datos: ");
    
    data.innerHTML+=("tDif = " + adTime + "<p>");
    data.innerHTML+=("Va = " + veloA + "<p>");
    data.innerHTML+=("Vb = " + veloB + "<p>");
    
    solution.innerHTML+=("Solución");

    answerDistanceTittle.innerHTML += ("Calculando la distancia");
    
    answerDistance.innerHTML+=("Para calcular la distancia que recorren los objetos realizamos lo siguiente: "  + "</p>");
    answerDistance.innerHTML+=("Tomamos como referencia el tiempo que se demora el objeto A para poder conocer el tiempo del objeto B" + "</p>");
    answerDistance.innerHTML+=("El tiempo del Objeto B va a ser el mismo que el de A sumado a la diferencia de tiempo con el que parten los objetos  " + "</p>");
    answerDistance.innerHTML+=("tA = tb + " + adTime + "</p>");
    answerDistance.innerHTML+=("Con estos datos podremos hallar la distancia que recorren los objetos." + "</p>");
    answerDistance.innerHTML+=("Considerando que la distancia que recorren los dos objetos va a ser la misma hasta que el objeto A alcance al objeto B, podemos despejar la ecuacion d = v * t,"  + "</p>");
    answerDistance.innerHTML+=("d = tA * vA  y d = tB * vB" + "</p>");
    answerDistance.innerHTML+=("En cada una de las ecuaciones despejamos el tiempo:" + "</p>");
    answerDistance.innerHTML+=("Como tenemos a la velocidad multiplicando en la ecuación al pasarla al otro lado del igual pasa a dividir, quedandonos de la siguient manera:" + "</p>");
    answerDistance.innerHTML+=("d / vA = tA " + "</p>" + "d / vB = tB" + "</p>");
    answerDistance.innerHTML+=("Reemplazamos los valores en la ecuacion tA = tB + tDif" + "</p>");
    answerDistance.innerHTML+=("(d / " + veloA + " ) = " + "(d / " + veloB + " ) + "  + adTime + "</p>");
    answerDistance.innerHTML+=("Pasamos todas las variables hacia uno de los lados de la ecuación" + "</p>");
    answerDistance.innerHTML+=("(d / " + veloA + " ) - " + "(d / " + veloB + " ) = "  + adTime + "</p>");
    answerDistance.innerHTML+=("Factorizamos por factor común para despejar d" + "</p>");
    answerDistance.innerHTML+=("d ( (1 / " + veloA + " ) - " + " (1 / " + veloB + " ) ) = "  + adTime + "</p>");
    answerDistance.innerHTML+=("Realizamos la operacion dentro del parentesis" + "</p>");
    answerDistance.innerHTML+=("d ( ( " + veloB + " - " + veloA + ") / ( " + veloB + " * " + veloA +  " ) ) = "  + adTime + "</p>");
    answerDistance.innerHTML+=("Despejamos d y para eso todo lo que multiplica en un lado, pasa a dividir y lo que divide pasa a multiplicar" + "</p>");
    answerDistance.innerHTML+=("Hacemos todas las operaciones en orden" + "</p>");
    answerDistance.innerHTML+=("d = " + adTime + " ( " + veloB + " * " + veloA + " ) / ( " + veloB + " - " + veloA + ") </p>");
    answerDistance.innerHTML+=("d = " + adTime + " ( " + (veloB * veloA) + " ) / ( " + (veloB - veloA) + ") </p>");
    answerDistance.innerHTML+=("d = " + adTime + " ( " + (veloB * veloA) / (veloB - veloA) + ") </p>");
    answerDistance.innerHTML+=("d = " + distT);

    answerTimeTittle.innerHTML+= ("Calculando el tiempo que toman en recorrer la distancia");

    answerTime.innerHTML+=("Conociendo la distancia podemos reemplazarla en la ecuacion de tA = d / vA" + "</p>") ;
    answerTime.innerHTML+=("tA = " + distT + " / " + veloA + "</p>") ;
    answerTime.innerHTML+=("tA = " + distT + " / " + veloA + "</p>") ;
    answerTime.innerHTML+=("tA = " + timeA + "</p>") ;
    answerTime.innerHTML+=("Conociendo el tiempo del objeto A reemplazamos  en tA = tB + tDif" + "</p>") ;
    answerTime.innerHTML+=(timeA + " = tB + " + adTime + "</p>") ;
    answerTime.innerHTML+=(timeA + " - " + adTime + " = tB </p>") ;
    answerTime.innerHTML+=(timeB + " = tB </p>") ;
    answerTime.innerHTML+=("tB = " + timeB + "</p>") ;


    allAnswersTittle.innerHTML+= ("En resumen estas son las respuestas: ")

    allAnswers.innerHTML+=("Las respuestas son: " + "</p>");
    allAnswers.innerHTML+=("d = " + distT + "</p>");
    allAnswers.innerHTML+=("tA = " + timeA + "</p>");
    allAnswers.innerHTML+=("tB = " + timeB + "</p>");
    
}

// TOOGLE MOBILE MENU

const menuMobileIcon = document.querySelector('.menu');

menuMobileIcon.addEventListener('click', toogleMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu');

function toogleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}


// function clearWorkSpace()
// {
//     data.innerHTML ="";
//     solution.innerHTML="";
//     answerTimeTittle.innerHTML="";
//     answerTime.innerHTML="";
//     answerDistanceTittle.innerHTML="";
//     answerDistance.innerHTML="";
//     allAnswersTittle.innerHTML="";
//     allAnswers.innerHTML="";
// }