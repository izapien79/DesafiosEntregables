function solicitarNombre () {
    let nombre = prompt("Ingrese su nombre");
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre");
    }
}

function solicitarSaldo () {
    let saldo = parseFloat(prompt("Ingresa tu saldo"));
}

function solicitarMeses () {
    let meses = parseInt(prompt("Ingresa el plazo para hacer tus pagos \n1) En un Solo Pago\n2) En 3 meses\n3) En 6 meses\n4) En 9 meses\n 5) En 12 meses"))

    
    switch(meses){
        case 1:
            alert("En un solo pago, recibiras un 10% de descuento");
            break;
        case 2:
            let pagoTres = meses;
            alert("En 3 meses, se te cobrara con un 15% de interes");
            break;
        case 3:
            let pagoSeis = meses;
            alert("En 6 meses, se te cobrara con un 20% de interes. ");
            break;
        case 4:
            let pagoNueve = meses;
            alert("En 9 meses, se te cobrara con un 25% de interes. ");
            break;
        case 5:
            let pagoDoce = meses;
            alert("En 12 meses, se te cobrara con un 30% de interes. ");
            break;
        default:
            alert("Opcion invalida")
        }
    
}


solicitarNombre();
solicitarSaldo();
solicitarMeses();

