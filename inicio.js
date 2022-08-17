function Ingresar(){
    emailIngresado=document.getElementById('ingreseEmail').value;
    claveIngresada=document.getElementById('ingreseClave').value;
    let mensaje;

    let listaDeUs= LlamarUs();
    let retornarUs = listaDeUs.find((usuario)=>usuario.email==emailIngresado)
    if(retornarUs){
        if(retornarUs.clave==claveIngresada){
            let tituloUsuario =document.getElementsByClassName('bienvenida');
            for(elementoTitulo of tituloUsuario) {
                elementoTitulo.innerText = `Bienvenido ${emailIngresado}`;
                document.getElementById('InicioSesion').style.visibility="hidden";
            mensaje="Bienvenido, ya puedes registrar tus puntajes"
            }
        } else {
            mensaje= "Ups! Algo salio mal"
        }
    } else {
        mensaje= "Ups! Algo salio mal"
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