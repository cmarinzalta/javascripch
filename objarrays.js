function probarCodigo(){

class  quizz {
    constructor (pregunta, respuestaCorrecta, respuestaIncorrectaUno, respuestaIncorrectaDos){
        this.pregunta = pregunta;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestaIncorrectaUno =  respuestaIncorrectaUno;
        this.respuestaIncorrectaDos =  respuestaIncorrectaDos;
    }
}

const quizzHistoriaDeAviacion = [];
    quizzHistoriaDeAviacion.push(new quizz ("¿Cuantos aviones militares y comerciales hay en el mundo?", "39.000", "26.000", "42.000")); 
    quizzHistoriaDeAviacion.push(new quizz("Los hermanos Wright crearon el primer avion. ¿En que año fue?", "1903","1910", "1900"));
    quizzHistoriaDeAviacion.push(new quizz ("El Antonov An-225 fue el avion mas grande del mundo ¿En que año se registro su primer vuelo","1988", "1989", "1998"));
    quizzHistoriaDeAviacion.push(new quizz ("El I.Ae. 27 Pulqui fue un avión a reacción diseñado y construido en Argentina ¿En que año?", "1947", "1950", "1949"));
    quizzHistoriaDeAviacion.push(new quizz ("¿Como se llamaba la primer mujer piloto?", "Amelia Earhart", "Raymonde de Laroche", "Emma Catalina Encinas Aguayo"));

const quizzPilotoPrincipiante = [];
    quizzPilotoPrincipiante.push(new quizz ("¿Para que sirve el altimetro?", " Medir la altura", "Reducir la presion del aire en la altura", "Reducir el arrastre"));
    quizzPilotoPrincipiante.push(new quizz ("¿Qué herramienta usan los pilotos para controlar los giros en el eje vertical?", "Timon", "Fuselaje", "Alas" ));
    quizzPilotoPrincipiante.push(new quizz ("¿A qué ayuda la curva en la parte superior del ala de un avión?", "Disminuye la presión encima del ala", " Ofrece más espacio para misiles", "Controla el bandazo"));
    quizzPilotoPrincipiante.push(new quizz ("Si el piloto levanta la nariz del avión, ¿qué es lo que está cambiando?", "Ángulo de ataque", "Cabeceo", "Gravedad específica"));
    quizzPilotoPrincipiante.push(new quizz ("¿Qué elemento controlan los timones de profundidad?", "Cabeceo", "Radio", "Vortice"));

const quizzPilotoAvanzado = [];
    quizzPilotoAvanzado.push(new quizz ("¿Para que sirve el ILS?", "Para hacer un aterrizaje instrumental", "Para localizar el aeropuerto", "Para cogerregir el giro direccional"));
    quizzPilotoAvanzado.push(new quizz ("¿Que indica el arco blanco en el velocimetro?", "Indica la velocidad apta para vuelos con FLAPS extendidos", "Indica la velocidad de nunca exceder", "Indica la velocidad de maniobra"));
    quizzPilotoAvanzado.push(new quizz ("¿Que es el VOR?", "Frecuencia muy alta de rango omnidireccional", "Sistema de posicion global", "Sistema de aterrizaje instrumental"));
    quizzPilotoAvanzado.push(new quizz ("¿Que es el transponder?", "Instrumento para ser localizado por el radar", "Sistema de posicion global", "Sistema para comunicacion radiofonica"));
    quizzPilotoAvanzado.push(new quizz ("¿Que detecta el ADF", "Señales de frecuencia de amplitud modulada", "Señales de radio de frecuencia modulada", "Frecuencias del radar del aeropuesrto"));
    
    let puntaje = 0
    let error = 0 
function queEmpieceElJuego (){
for(i =0; i<6; i++){
    let quizz = quizzHistoriaDeAviacion[i]
    let pregunta = quizz.pregunta
    let respuesta1 = quizz.respuestaCorrecta
    let respuesta2 = quizz.respuestaIncorrectaUno
    let respuesta3 = quizz.respuestaIncorrectaDos
    let respuestaU = prompt(pregunta + "\n" + respuesta1 + "\n" + respuesta2 + "\n" + respuesta3)

    if(respuestaU == respuesta1){
        alert("Correcto!")
        puntaje += 2
    }else {
        alert("Incorrecto la respuesta era " + respuesta1)
        error ++
        puntaje -1
    }
    
    alert("Termino el juego, tu puntaje es: " + puntaje + "\nTuviste " + error + "errores")
}
}


queEmpieceElJuego ();
console.log(queEmpieceElJuego ());


























}