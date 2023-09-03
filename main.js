

alert("Bienvenido al simulador de créditos");

function creditoHipotecario(dineroHipotecario, cantidadAnios, porcenFinancia) {
    const decimales = 0;
    dineroHipoteConInteres = dineroHipotecario * 1.1;
    dineroHipoteConInteres = dineroHipoteConInteres.toFixed(decimales);
    pie = dineroHipoteConInteres - (dineroHipoteConInteres * (porcenFinancia / 100));
    valorCuota = (dineroHipoteConInteres - pie) / (cantidadAnios * 12);
    valorCuotaFormateado = valorCuota.toFixed(decimales);
    return "EL pie necesario es: " + pie + "\n" + " El valor de la cuota mensual es : " + valorCuotaFormateado + "\n Valor final a pagar : " + dineroHipoteConInteres;
}

function creditoConsumo(dineroSolicitar, cantidaCuotas) {
    const decimales = 0;
    dineroSolicitarConInteres = dineroSolicitar *  1.1;
    dineroSolicitarConInteres = dineroSolicitarConInteres.toFixed(decimales);
    valorCuota = dineroSolicitarConInteres / cantidaCuotas;
    valorCuotaFormateado2 = valorCuota.toFixed(decimales);
    return "El valor de la cuota mensual es : " + valorCuotaFormateado2 + "\n Valor final a pagar : " + dineroSolicitarConInteres;
}

const simularCredito = () => {
    let tipoCredito = "";
    let renta = "";
    let dineroSolicitar = "";
    let dineroHipotecario = "";
    let porcenFinancia = "";
    let cantidaCuotas = "";
    let seguirSimulando = true;
    let nombre = "";
    let correo = "";
    let resultadoHipotecario = "";
    let resulltadoConsumo = "";

    do {
        nombre = prompt("Ingrese su nombre :  ");
        correo = prompt("Ingrese su correo :  ");
        renta = prompt("Ingrese su renta: ");
        tipoCredito = prompt("ingrese número de opción del credito : \n 1.-Consumo \n 2.-Hipotecario");

        if (tipoCredito == 1) {
            dineroSolicitar = Number(prompt("Ingrese cantidad a solicitar (hasta 5 millones : )"))
            if (dineroSolicitar >= 1000000) {
                cantidaCuotas = Number(prompt("Ingrese cantidad de cuotas (hasta 64 cuotas): "));
                resulltadoConsumo = creditoConsumo(dineroSolicitar, cantidaCuotas);
                console.log(resulltadoConsumo);
                alert(" Estimado(a) : " + nombre + "\n" +
                    " Correo : " + correo + "\n" + " " +
                    resulltadoConsumo);
            }else{
                alert("el mínimo a solicitar debe ser de 1000000")
            };
        } else if (tipoCredito == 2) {
            if (renta > 1200000) {
                tipoPropiedad = prompt("Ingrese tipo de propiedad : \n 1.- Casa \n 2.- Departamento ");
                dineroHipotecario = Number(prompt("Ingrese cantidad a solicitar: "));
                porcenFinancia = Number(prompt("Ingrese porcentaje de financiación (Hasta el 90%)"));
                cantidadAnios = prompt("Ingrese años a pagar el credito (hasta 30 años) : ")
                resultadoHipotecario = creditoHipotecario(dineroHipotecario, cantidadAnios, porcenFinancia);
                console.log(resultadoHipotecario);
                alert(" Estimado(a) : " + nombre + "\n" +
                    " Correo : " + correo + "\n" + " " +
                    resultadoHipotecario);
            } else {
                alert("renta debe ser mayor  a 1200000");
            };
        } else {
            alert("Ingrese una opción válida");
        };
        seguirSimulando = confirm("¿Desea seguir simulando?");
    } while (seguirSimulando);
};
simularCredito();

