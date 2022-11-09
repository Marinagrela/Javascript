
function Ingreso (nombre, apellido, legajo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.legajo = legajo;

    this.saludar = function (){
        console.log("Bienvenido a una nueva consulta " + this.nombre);
    }
}

const ingreso1 =  new Ingreso ("Juan", "Perez", 376);
console.log (ingreso1);

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su Apellido");
let legajonuevo = parseInt(prompt("Ingrese su legajo"));

const ingreso3 = new Ingreso(nombre, apellido, legajonuevo);
console.log(ingreso3);

ingreso3.saludar();

class Cereales {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 10000;
    }

    vender(){
        if(this.cantidad > 0){
            this.cantidad --;
        }else{
            console.log ("sin stock disponible");
        }
    }

    sumaStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
    }

}

const soja = new Cereales ("Soja", 64300);
const trigo = new Cereales ("Trigo", 56980);
const maiz = new Cereales ("Maiz", 39470);

let stockCereale = [];
stockCereale.push(soja);
stockCereale.push(trigo);
stockCereale.push(maiz);
console.log(stockCereale);

for (let Cereales of stockCereale) {
    console.log(Cereales);
}

let Precio= parseInt (prompt("Precio del negocio en pesos:"));

let kg= parseInt (prompt("Tonelada:"));

let operacion= (Precio * kg);
alert ("Monto de Parcial en pesos: "+ operacion);

let MontoFinal = (operacion * 0.025);
alert ("Monto de Final en pesos: " + MontoFinal);




