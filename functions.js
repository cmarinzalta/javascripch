function probarCodigo()
    { 


//ENTREGA OPCIONAL CODERHOUSE. CANDELA MARINZALTA

let producto
let precio

producto = prompt("Agregue un producto a su carrito") 
precio = 0

while(producto != ""){
  switch (producto){

    case "Yerba" : 
      alert (("El total de su carrito es $") + (precio += 500))
      break ;

    case "Leche" : 
      alert (("El total de su carrito es $") + (precio += 200))
      break ;

    case "Azucar" : 
      alert (("El total de su carrito es $") + (precio += 150))
      break ;

    case "Sal" : 
      alert (("El total de su carrito es $") + (precio += 80))
      break ;

    default :
      alert ("Ups! no tenemos ese producto")
      break;
  }
  producto = prompt("Agregue un producto a su carrito")
}

 if (precio > 500) {
    alert(("Genial! Conseguiste un descuento del 20%" + "\n" + "El precio final de tu compra es de $") + (precio - precio*0.2))
  } else {
     alert (("Finalizaste tu compra." + "\n" + "Total a pagar $") + (precio))
    }


}