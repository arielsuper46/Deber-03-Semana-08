'use strict'

let vehicle={
    make: "Ferrari",
    model: "F1",
    color: "Red", 
    licensePlate: "Schumacher",
    year: 2006,
    isEnable: false,
}

function validarTaxi(vehicle){
    let currentYear=Number(prompt("Ingresar año actual"))
    let isUsable=currentYear-vehicle.year;
    if(isUsable<=10){
        alert("Si esta disponible");
    }else{
        alert("No esta disponible");
    }
}
validarTaxi(vehicle);