
let passworUsuario=prompt("Ingrese su contraseña:");

const passworAtorizado=1234;
for(let i=0; i<2; i++){
    if(passworUsuario==passworAtorizado){
        alert ("Contraseña correcta");
        break;
    }else{
        passworUsuario=prompt("Passwor incorrecto, tiene dos intentos mas.");
    }
}


let Precio= parseInt (prompt("Precio del negocio en pesos:"));

let kg= parseInt (prompt("Tonelada:"));

let operacion= (Precio * kg);
alert ("Monto de Parcial en pesos: "+ operacion);

let MontoFinal = (operacion * 0.025);
alert ("Monto de Final en pesos: " + MontoFinal);
       

