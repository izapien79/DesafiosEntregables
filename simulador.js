function pagarUno (saldo, numPago){
    let interes = 1
    let pagoInteres = saldo * interes / numPago;
    return pagoInteres;
}
function pagarTres (saldo, numPago){
    let interes = 0.15
    let pagoInteres = saldo * interes / numPago;
    return pagoInteres;
}
function pagarSeis (saldo, numPago){
    let interes = 0.20
    let pagoInteres = saldo * interes / numPago;
    return pagoInteres;
}
function pagarNueve (saldo, numPago){
    let pagoInteres = saldo * interes / numPago;
    return pagoInteres;
}
function pagarDoce (saldo, numPago){
    let pagoInteres = saldo * interes / numPago;
    return pagoInteres;
}

function mostrarSaldo (pagoInteres) {
    alert ("Esto seria lo que pagaria cada mes: "+ pagoInteres);
}

function mostrarOpcPagos () {
    let opcion = parseInt(prompt("Bienvenido a cuanto meses deseas pagar tu prestamo \n1.-Un solo pago\n 2.-A 3 meses\n 3.-A 6 meses\n 4.-A 9 meses\n 5.-A 12 meses"));
    let opcMes = parseFloat(prompt("Ingresa el saldo que debes"));
    return opcion;
    
}

function simular(){
    let opcSelec = mostrarOpcPagos();
    while (opcSelec !== "ESC"){
        if (opcSelec !==""){           
            opcSelec = parseInt(opcSelec);

            if(!isNaN(opcSelec)){
                switch (opcSelec) {
                    case 1:
                        let resultadoUno = pagarUno (saldo, numPago);
                        mostrarSaldo(resultadoUno);
                        break;
                    case 2:
                        let resultadoTres = pagarTres (saldo, numPago);
                        mostrarSaldo(resultadoTres);
                        break;
                    case 3:
                        let resultadoSeis = pagarSeis (saldo, numPago);
                        mostrarSaldo(resultadoSeis);
                        break;
                    case 4:
                        let resultadoNueve = pagarNueve (saldo, numPago);
                        mostrarSaldo(resultadoNueve);
                        break;
                    case 5:
                        let resultadoDoce = pagarDoce (saldo, numPago);
                        mostrarSaldo(resultadoDoce);
                        break;
                    default:
                        alert("Opcion Incorrecta");
                        break;
                }
            } else {
                alert ("Selecciones la opcion");
            }
            opcSelec = mostrarOpcPagos();
        }
    }
}


simular();
