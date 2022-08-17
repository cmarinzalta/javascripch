let inicioDeSesion=document.querySelector('#btnInicioSesion')
inicioDeSesion.addEventListener("click", Ingresar)
function Ingresar(){

    let emailIngresado=document.querySelector('#ingreseEmail').value;
    let claveIngresada=document.querySelector('#ingreseClave').value;
    let textoInicio=document.querySelector('#inicioSesion');
    let mensaje;

    let listaDeUs= LlamarUs();
    let retornarUs = listaDeUs.find((usuario)=>usuario.email==emailIngresado)
    if(retornarUs){
        if(retornarUs.clave==claveIngresada){
            mensaje= `Bienvenido ${emailIngresado}`
            textoInicio.innerText=mensaje
            
        } else {
            mensaje= "Ups! Algo salio mal"
            textoInicio.innerText=mensaje
        }
    } else {
        mensaje= "Ups! Algo salio mal"
        textoInicio.innerText=mensaje
    }
   
}

function LlamarUs(){
    let usuario = [];
        usuario.push(new Usuario ("pepe@g.com", "111"));
        usuario.push(new Usuario ("pepa@g.com", "112"));
        usuario.push(new Usuario ("pepi@g.com", "113"));
        usuario.push(new Usuario ("pepu@g.com", "114"));
        usuario.push(new Usuario ("pepo@g.com", "115"));
        return usuario;
}

class Usuario {
    constructor (email,clave){
        this.email=email;
        this.clave=clave;
    }
}