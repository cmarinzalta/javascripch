function probarCodigo()
    { 

// ENTREGA DE SIMULADOR INTERACTIVO

//Creamos un quizz para pilotos, hay tres categorias Historia de la aviacion, pilotos principiantes y pilotos avanzados. Elegis una categoria y empieza la experiencia. Por cada respuesta correcta sumaras dos puntos y por cada incorrecta restas 1. 

let puntaje = 0
let error = 0

function quizzHistoriaDeAviacion () {

  while ( puntaje == 0){
    
    //1
    let respuesta = prompt("¿Cuantos aviones militares y comerciales hay en el mundo? \n1- 26.000\n2- 39.000\n3- 42.000")
    if (respuesta == 2) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, en el mundo hay 39.000 aviones comerciales y militares")
      error ++
      console.log(error)
      }

    //2  
    respuesta= prompt("Los hermanos Wright crearon el primer avion. ¿En que año fue? \n1- 1903 \n2- 1910 \n3- 1900")
      if (respuesta == 1) {
        alert ("Correcto")
        puntaje +=2
        console.log(puntaje)
      }  else {
        alert ("Incorrecto, el primer avion fue creado en 1903")
        error ++
        console.log(error)
      }

    //3
    respuesta= prompt("El Antonov An-225 fue el avion mas grande del mundo ¿En que año se registro su primer vuelo? \n1- 1988 \n2- 1998 \n3- 1989")
      if (respuesta == 1) {
        alert ("Correcto")
        puntaje +=2
        console.log(puntaje)
      } else {
        alert ("Incorrecto, el Antonov An-225 volo por 14 minutos el 21 de Diciembre en 1988")
        error ++
        console.log(error)
      }

    //4 
    respuesta= prompt("El I.Ae. 27 Pulqui fue un avión a reacción diseñado y construido en Argentina ¿En que año? \n1- 1950 \n2- 1949 \n3- 1947")
      if (respuesta == 3 ) {
        alert ("Correcto")
        puntaje +=2
        console.log(puntaje)
      } else {
        alert ("Incorrecto, este avion fue creado en 1947")
        error ++
        console.log(error)
        } 

    //5
    respuesta= prompt("¿Como se llamaba la primer mujer piloto?\n1- Raymonde de Laroche \n2- Amelia Earhart \n3- Emma Catalina Encinas Aguayo ")
      if (respuesta ==2  ) {
        alert ("Correcto")
        puntaje +=2
        console.log(puntaje)
      } else {
        alert ("Incorrecto, la mujer que hizo historia fue Amelia Earhart")
        error ++
        console.log(error)
      } 

  alert("Llegaste al final \n Tuviste: " + puntaje + " puntos y " + error + " errores")
  }  
}   


function quizzPilotoPrincipiante() {
  while ( puntaje == 0){
    
    //1
    let respuesta = prompt("¿Para que sirve el altimetro? \n1- Reducir la presion del aire en la altura \n2- Reducir el arrastre \n3- Medir la altura")
    if (respuesta == 3) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, sirve para medir la altura ")
      error ++
      console.log(error)
      }

    //2 
    respuesta = prompt("¿Qué herramienta usan los pilotos para controlar los giros en el eje vertical? \n1- Timon \n2- Fuselaje \n3- Alas")
      if (respuesta == 1) {
        alert ("Correcto")
        puntaje +=2
        console.log(puntaje)
      } else {
        alert ("Incorrecto, utilizan el timon")
        error ++
        console.log(error)
        }
    
    //3
    respuesta = prompt("¿A qué ayuda la curva en la parte superior del ala de un avión? \n1- Ofrece más espacio para misiles \n2- Controla el bandazo \n3- Disminuye la presión encima del ala")
    if (respuesta == 3) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, sirve para disminuir la presion del aire")
      error ++
      console.log(error)
      }

    //4
    respuesta = prompt("Si el piloto levanta la nariz del avión, ¿qué es lo que está cambiando?\n1- Ángulo de ataque \n2- Cabeceo \n3- Gravedad específica")
    if (respuesta == 1) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, esta cambiando el angulo de ataque")
      error ++
      console.log(error)
      }

   //5
    respuesta = prompt("¿Qué elemento controlan los timones de profundidad?\n1- Radio \n2- Cabeceo \n3- Vórtice")
    if (respuesta == 2) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, controlan el cabeceo")
      error ++
      console.log(error)
      }
   
    alert("Llegaste al final \nTuviste: " + puntaje + " puntos y " + error + " errores")
  }  
}


function quizzPilotoAvanzado () {
  while ( puntaje == 0){
    
    //1
    let respuesta = prompt("¿Para que sirve el ILS? \n1- Para hacer un aterrizaje instrumental \n2- Para localizar el aeropuesto \n3- Para cogerregir el giro direccional")
    if (respuesta == 1) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, sirve para hacer un aterrizaje instrumental")
      error ++
      console.log(error)
      }

    //2
    respuesta = prompt("¿Que indica el arco blanco en el velocimetro? \n1- Indica la velocidad de nunca exceder  \n2- Indica la velocidad de maniobra \n3- Indica la velocidad apta para vuelos con FLAPS extendidos")
    if (respuesta == 3 ) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
      alert ("Incorrecto, indica la velocidad apta para vuelos con FLAPS extendidos ")
      error ++
      console.log(error)
      }

    //3
    respuesta = prompt("¿Que es el VOR? \n1- Sistema de posicion global \n2- Frecuencia muy alta de rango omnidireccional \n3- Sistema de aterrizaje instrumental")
    if (respuesta == 2 ) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
        alert ("Incorrecto, es frecuencia muy alta de rango omnidireccional ")
        error ++
        console.log(error)
      }

    //4
    respuesta = prompt("¿Que es el transponder? \n1- Sistema de posicion global \n2- Instrumento para ser localizado por el radar \n3- Sistema para comunicacion radiofonica")
    if (respuesta == 2 ) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
        alert ("Incorrecto, es un instrumento para ser localizado por el radar ")
        error ++
        console.log(error)
      }

    //5
    respuesta = prompt("¿Que detecta el ADF \n1- Señales de radio de frecuencia modulada \n2- Frecuencias del radar del aeropuesrto \n3- Señales de frecuencia de amplitud modulada")
    if (respuesta == 3) {
      alert ("Correcto")
      puntaje +=2
      console.log(puntaje)
    } else {
        alert ("Incorrecto, es un instrumento para ser localizado por el radar ")
        error ++
        console.log(error)
      }

    alert("Llegaste al final \nTuviste: " + puntaje + " puntos y " + error + " errores")
  }
}


alert ("Bienvenido a bordo")
confirm ("Queres probar tus conocimientos piloto? Responde nuestro QuiZz, cada respuesta correcta sumara 2 puntos y cada error te restara 1 \n¿Cuantos puntos podes conseguir?")

let eleccion = (prompt("Elije que QuiZz queres responder \n1- Historia de la aviacion \n2- Pilotos principiantes \n3- Pilotos avanzado"))
if (eleccion == 1 ){
  quizzHistoriaDeAviacion()
} else if ( eleccion == 2){
  quizzPilotoPrincipiante();
} else {
  quizzPilotoAvanzado ();
}





}