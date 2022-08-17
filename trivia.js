class  quizz {
    constructor (categoria, pregunta, respuestaCorrecta, respuestaIncorrectaUno, respuestaIncorrectaDos){
         this.categoria = categoria
         this.pregunta = pregunta;
         this.respuestaCorrecta = respuestaCorrecta;
         this.respuestaIncorrectaUno =  respuestaIncorrectaUno;
         this.respuestaIncorrectaDos =  respuestaIncorrectaDos;
     }
 }
 const trivia = [
     {
         categoria: "Historia De Aviacion",
         quizz : [
              {
                 pregunta:"¿Cuantos aviones militares y comerciales hay en el mundo?", 
                 respuestaCorrecta: "39.000",  
                 respuestaIncorrectaUno: "26.000", 
                 respuestaIncorrectaDos:"42.000"
             }, 
             {
                 pregunta:"Los hermanos Wright crearon el primer avion. ¿En que año fue?", 
                 respuestaCorrecta:"1903", 
                 respuestaIncorrectaUno:"1910", 
                 respuestaIncorrectaDos:"1900"
             },
             {
                 pregunta: "El Antonov An-225 fue el avion mas grande del mundo ¿En que año se registro su primer vuelo",
                 respuestaCorrecta:"1988",
                 respuestaIncorrectaUno:"1989",
                 respuestaIncorrectaDos:"1998"
             },
             {
                 pregunta:"El I.Ae. 27 Pulqui fue un avión a reacción diseñado y construido en Argentina ¿En que año?",
                 respuestaCorrecta:"1947",
                 respuestaIncorrectaUno:"1950",
                 respuestaIncorrectaDos:"1949"
             },
             {
                 pregunta:"¿Como se llamaba la primer mujer piloto?",
                 respuestaCorrecta:"Amelia Earhart",
                 respuestaIncorrectaUno:"Raymonde de Laroche",
                 respuestaIncorrectaDos:"Emma Catalina Encinas Aguayo"
             }
         ]        
     },
     {
         categoria: "Piloto Principiante",
         quizz : [
             {
                 pregunta:"¿Para que sirve el altimetro?", 
                 respuestaCorrecta:"Medir la altura",
                 respuestaIncorrectaUno:"Reducir la presion del aire en la altura",
                 respuestaIncorrectaDos:"Reducir el arrastre"
             },
             {
                 pregunta: "¿Qué herramienta usan los pilotos para controlar los giros en el eje vertical?",
                 respuestaCorrecta:"Timon", 
                 respuestaIncorrectaUno:"Fuselaje",
                 respuestaIncorrectaDos:"Alas"
             },
             {
                 pregunta:"¿A qué ayuda la curva en la parte superior del ala de un avión?",
                 respuestaCorrecta:"Disminuye la presión encima del ala",
                 respuestaIncorrectaUno:" Ofrece más espacio para misiles",
                 respuestaIncorrectaDos:"Controla el bandazo"
             },
             {
                 pregunta:"Si el piloto levanta la nariz del avión, ¿qué es lo que está cambiando?",
                 respuestaCorrecta:"Ángulo de ataque",
                 respuestaIncorrectaUno:"Cabeceo",
                 respuestaIncorrectaDos:"Gravedad específica"
             },
             {
                 pregunta:"¿Qué elemento controlan los timones de profundidad?",
                 respuestaCorrecta:"Cabeceo",
                 respuestaIncorrectaUno:"Radio",
                 respuestaIncorrectaDos:"Vortice"
             }
         ]
     },
     {
         categoria: "Piloto Avanzado",
         quizz : [
             {
                 pregunta:"¿Para que sirve el ILS?", 
                 respuestaCorrecta:"Para hacer un aterrizaje instrumental",
                 respuestaIncorrectaUno:"Para localizar el aeropuerto",
                 respuestaIncorrectaDos:"Para cogerregir el giro direccional"
             },
             {
                 pregunta:"¿Que indica el arco blanco en el velocimetro?",
                 respuestaCorrecta:"Indica la velocidad apta para vuelos con FLAPS extendidos",
                 respuestaIncorrectaUno:"Indica la velocidad de nunca exceder",
                 respuestaIncorrectaDos:"Indica la velocidad de maniobra"
             },
             {
                 pregunta:"¿Que es el VOR?", 
                 respuestaCorrecta:"Frecuencia muy alta de rango omnidireccional",
                 respuestaIncorrectaUno:"Sistema de posicion global",
                 respuestaIncorrectaDos:"Sistema de aterrizaje instrumental"
             },
             {
                 pregunta:"¿Que es el transponder?",
                 respuestaCorrecta:"Instrumento para ser localizado por el radar",
                 respuestaIncorrectaUno:"Sistema de posicion global",
                 respuestaIncorrectaDos:"Sistema para comunicacion radiofonica"
             },
             {
                 pregunta:"¿Que detecta el ADF?",
                 respuestaCorrecta:"Señales de frecuencia de amplitud modulada",
                 respuestaIncorrectaUno:"Señales de radio de frecuencia modulada",
                 respuestaIncorrectaDos:"Frecuencias del radar del aeropuerto"
             }
         ]
     }  
 ]


 function iniciar(elegirCategoria){
     let puntaje = 0
     let error = 0
     let busqueda = trivia.find((item)=> item.categoria == elegirCategoria)
     if (busqueda != undefined) {
         busqueda.quizz.forEach((item) => {
             let respuesta = prompt(
                 item.pregunta + "\n" + item.respuestaCorrecta + "\n" + item.respuestaIncorrectaDos + "\n" + item.respuestaIncorrectaUno
             )
         if(respuesta == item.respuestaCorrecta){
             alert("¡Correcto!")
             puntaje += 2
         } else {
             alert ("Incorrecto, la respuesta correcta es " + item.respuestaCorrecta)
             puntaje --
             error ++
         }      
     }
     )

 }
 alert("Obtuviste: " + puntaje + " puntos\nTuviste " + error + " errores")
 }

 let confirmacion = true
 while (confirmacion) {
     let mensaje = " "
     trivia.forEach(item=> mensaje += "\n" + item.categoria)

     let eleccion = prompt("Las categorias son: " + mensaje)
     if (eleccion != ""){
         iniciar(eleccion)
     } else {
         alert ("Opcion invalida")
     }
     confirmacion = confirm("¿Desea seleccionar otra categoria?")
 } 




























