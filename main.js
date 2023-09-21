
alert("Bienvenido al simulador de créditos");

function creditoHipotecario(dineroHipotecario, cantidadAnios, porcenFinancia) {
    let valoresCredito = {
        dineroHipoteConInteres: "",
        valorCuota: "",
        pie: ""
    };
    const decimales = 0;
    valoresCredito.dineroHipoteConInteres = (dineroHipotecario * 1.1).toFixed(decimales);
    valoresCredito.pie = valoresCredito.dineroHipoteConInteres - (valoresCredito.dineroHipoteConInteres * (porcenFinancia / 100));
    valoresCredito.pie = valoresCredito.dineroHipoteConInteres - (valoresCredito.dineroHipoteConInteres * (porcenFinancia / 100));
    valoresCredito.valorCuota = ((valoresCredito.dineroHipoteConInteres - valoresCredito.pie) / (cantidadAnios * 12)).toFixed(decimales);
    return valoresCredito;
};

function creditoConsumo(dineroSolicitar, cantidaCuotas) {
    let valoresCredito = {
        dineroSolicitarConInteres: "",
        valorCuota: "",
    };
    const decimales = 0;
    dineroSolicitarConInteres = dineroSolicitar * 1.1;
    valoresCredito.dineroSolicitarConInteres = dineroSolicitarConInteres.toFixed(decimales);
    valorCuota = dineroSolicitarConInteres / cantidaCuotas;
    valoresCredito.valorCuota = valorCuota.toFixed(decimales);
    return valoresCredito;
};

function mayorQue(n) {
    return (m) => m >= n;
}

const simularCredito = () => {
    let personas = [];
    let mayorConsumo = mayorQue(1000000);
    let mayorHipotecario = mayorQue(1200000);
    do {
        let infoPersona = {
            rut: "",
            nombre: "",
            correo: "",
            renta: "",
            tipoCredito: "",
            dineroSolicitar: "",
            cantidaCuotas: "",
            tipoPropiedad: "",
            dineroHipotecario: "",
            porcenFinancia: "",
            cantidadAnios: "",
            resultadoConsumo: {
                dineroSolicitarConInteres: "",
                valorCuota: "",
            },
            resultadoHipotecario: {
                dineroHipoteConInteres: "",
                valorCuota: "",
                pie: ""
            }
        };
        infoPersona.rut = prompt("Ingrese su rut / Dni : ").trim()? prompt("Ingrese su rut / Dni : ").trim() : "N/A"  ;                                                                                                                      
        rutCompara = infoPersona.rut;
        infoPersona.nombre = prompt("Ingrese su nombre :  ")? prompt("Ingrese su nombre :  ") : "N/A" ;
        infoPersona.correo = prompt("Ingrese su correo :  ").trim()? prompt("Ingrese su correo :  ").trim() : "N/A";
        infoPersona.renta = prompt("Ingrese su renta: ");
        infoPersona.tipoCredito = prompt("ingrese número de opción del credito : \n 1.-Consumo \n 2.-Hipotecario").trim();

        if (infoPersona.tipoCredito == 1) {
            infoPersona.dineroSolicitar = Number(prompt("Ingrese cantidad a solicitar (hasta 5 millones : )"))
            if (mayorConsumo(infoPersona.dineroSolicitar)) {
                infoPersona.cantidaCuotas = Number(prompt("Ingrese cantidad de cuotas (hasta 64 cuotas): "));
                let resultado = creditoConsumo(infoPersona.dineroSolicitar, infoPersona.cantidaCuotas);
                infoPersona.resultadoConsumo = {
                    dineroSolicitarConInteres: resultado.dineroSolicitarConInteres,
                    valorCuota: resultado.valorCuota,
                };

                alert(" Estimado(a) : " + infoPersona.nombre + "\n" +
                    " Correo : " + infoPersona.correo + "\n" + " " +
                    "El valor de la cuota mensual es : " + infoPersona.resultadoConsumo.valorCuota + "\n Valor final a pagar : " + infoPersona.resultadoConsumo.dineroSolicitarConInteres
                );

            } else {
                alert("el mínimo a solicitar debe ser de 1000000")
            };
        } else if (infoPersona.tipoCredito == 2) {
            if (mayorHipotecario(infoPersona.renta)) {
                infoPersona.tipoPropiedad = prompt("Ingrese tipo de propiedad : \n 1.- Casa \n 2.- Departamento ");
                infoPersona.dineroHipotecario = Number(prompt("Ingrese cantidad a solicitar: "));
                infoPersona.porcenFinancia = Number(prompt("Ingrese porcentaje de financiación (Hasta el 90%)"));
                infoPersona.cantidadAnios = prompt("Ingrese años a pagar el credito (hasta 30 años) : ")
                infoPersona.cantidaCuotas = infoPersona.cantidadAnios * 12;
                let resultado2 = creditoHipotecario(infoPersona.dineroHipotecario, infoPersona.cantidadAnios, infoPersona.porcenFinancia);
                infoPersona.resultadoHipotecario = {
                    dineroHipoteConInteres: resultado2.dineroHipoteConInteres,
                    valorCuota: resultado2.valorCuota,
                    pie: resultado2.pie
                };
                console.log(infoPersona);
                alert(" Estimado(a) : " + infoPersona.nombre + "\n" +
                    " Correo : " + infoPersona.correo + "\n" + " " +
                    "EL pie necesario es: " + infoPersona.resultadoHipotecario.pie + "\n" + " El valor de la cuota mensual es : " + infoPersona.resultadoHipotecario.valorCuota + "\n Valor final a pagar : " + infoPersona.resultadoHipotecario.dineroHipoteConInteres);
            } else {
                alert("renta debe ser mayor  a 1200000");
            };
        } else {
            alert("Ingrese una opción válida 1 o 2.");
        };
        personas.push(infoPersona);
        seguirSimulando = confirm("¿Desea seguir simulando?");
    } while (seguirSimulando);

    const credito = personas.find((persona) => persona.rut === rutCompara)


    let numeroCuotas = credito.cantidaCuotas;
    console.log("Información del credito a solicitar: " );
    console.log("Nombre: " + credito.nombre);
    console.log("Correo: " + credito.correo);
    console.log("Tipo de crédito: " + (credito.tipoCredito == 1 ? "Consumo" : "Hipotecario"));


    if (credito.tipoCredito == 1) {
        for (let i = 0; i < credito.cantidaCuotas; i++) {
            console.log("Número de cuotas y valor : ");
            console.log("n° " + (i + 1) + ": " + credito.resultadoConsumo.valorCuota);
        };
    } else if (credito.tipoCredito == 2) {
        for (let i = 0; i < credito.cantidaCuotas; i++) {
            console.log("Número de cuotas y valor : ");
            console.log("n° " + (i + 1) + ": " + credito.resultadoHipotecario.valorCuota);
        };
    };

}
simularCredito();

