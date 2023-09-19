
alert("Bienvenido al simulador de créditos");

function creditoHipotecario(dineroHipotecario, cantidadAnios, porcenFinancia) {
    let valoresCredito = {
        dineroHipoteConInteres: "",
        valorCuota: "",
        valoresCreditoEscrito: "",
        pie: "",
        valorHipotecarioEscrito: ""
    };
    const decimales = 0;
    valoresCredito.dineroHipoteConInteres = (dineroHipotecario * 1.1).toFixed(decimales);
    valoresCredito.pie = valoresCredito.dineroHipoteConInteres - (valoresCredito.dineroHipoteConInteres * (porcenFinancia / 100));
    valoresCredito.pie = valoresCredito.dineroHipoteConInteres - (valoresCredito.dineroHipoteConInteres * (porcenFinancia / 100));
    valoresCredito.valorCuota = ((valoresCredito.dineroHipoteConInteres - valoresCredito.pie) / (cantidadAnios * 12)).toFixed(decimales);
    valoresCredito.valorHipotecarioEscrito = "EL pie necesario es: " + valoresCredito.pie + "\n" + " El valor de la cuota mensual es : " + valoresCredito.valorCuota + "\n Valor final a pagar : " + valoresCredito.dineroHipoteConInteres;
    return valoresCredito;
}

function creditoConsumo(dineroSolicitar, cantidaCuotas) {
    let valoresCredito = {
        dineroSolicitarConInteres: "",
        valorCuota: "",
        valoresCreditoEscrito: ""
    };
    const decimales = 0;
    dineroSolicitarConInteres = dineroSolicitar * 1.1;
    valoresCredito.dineroSolicitarConInteres = dineroSolicitarConInteres.toFixed(decimales);
    valorCuota = dineroSolicitarConInteres / cantidaCuotas;
    valoresCredito.valorCuota = valorCuota.toFixed(decimales);
    valoresCredito.valoresCreditoEscrito = "El valor de la cuota mensual es : " + valoresCredito.valorCuota + "\n Valor final a pagar : " + valoresCredito.dineroSolicitarConInteres;

    return valoresCredito;
};

const simularCredito = () => {
    let personas = [];

    do {
        let infoPersona = {
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
            resulltadoConsumo: {
                dineroSolicitarConInteres: "",
                valorCuota: "",
                valoresCreditoEscrito: ""
            },
            resultadoHipotecario: {
                dineroHipoteConInteres: "",
                valorCuota: "",
                valoresCreditoEscrito: "",
                pie: "",
                valorHipotecarioEscrito: ""
            }
        };
        infoPersona.nombre = prompt("Ingrese su nombre :  ");
        infoPersona.correo = prompt("Ingrese su correo :  ");
        infoPersona.renta = prompt("Ingrese su renta: ");
        infoPersona.tipoCredito = prompt("ingrese número de opción del credito : \n 1.-Consumo \n 2.-Hipotecario");

        if (infoPersona.tipoCredito == 1) {
            infoPersona.dineroSolicitar = Number(prompt("Ingrese cantidad a solicitar (hasta 5 millones : )"))
            if (infoPersona.dineroSolicitar >= 1000000) {
                infoPersona.cantidaCuotas = Number(prompt("Ingrese cantidad de cuotas (hasta 64 cuotas): "));
                let resultado = creditoConsumo(infoPersona.dineroSolicitar, infoPersona.cantidaCuotas);
                infoPersona.resulltadoConsumo = {
                    dineroSolicitarConInteres: resultado.dineroSolicitarConInteres,
                    valorCuota: resultado.valorCuota,
                    valoresCreditoEscrito: resultado.valoresCreditoEscrito
                };

                alert(" Estimado(a) : " + infoPersona.nombre + "\n" +
                    " Correo : " + infoPersona.correo + "\n" + " " +
                    infoPersona.resulltadoConsumo.valoresCreditoEscrito);
                console.log(infoPersona);
            } else {
                alert("el mínimo a solicitar debe ser de 1000000")
            };
        } else if (infoPersona.tipoCredito == 2) {
            if (infoPersona.renta > 1200000) {
                infoPersona.tipoPropiedad = prompt("Ingrese tipo de propiedad : \n 1.- Casa \n 2.- Departamento ");
                infoPersona.dineroHipotecario = Number(prompt("Ingrese cantidad a solicitar: "));
                infoPersona.porcenFinancia = Number(prompt("Ingrese porcentaje de financiación (Hasta el 90%)"));
                infoPersona.cantidadAnios = prompt("Ingrese años a pagar el credito (hasta 30 años) : ")
                infoPersona.cantidaCuotas = infoPersona.cantidadAnios * 12;
                let resultado2 = creditoHipotecario(infoPersona.dineroHipotecario, infoPersona.cantidadAnios, infoPersona.porcenFinancia);
                infoPersona.resultadoHipotecario = {
                    dineroHipoteConInteres: resultado2.dineroHipoteConInteres,
                    valorCuota: resultado2.valorCuota,
                    pie: resultado2.pie,
                    valorHipotecarioEscrito: resultado2.valorHipotecarioEscrito,
                }
                console.log(infoPersona);
                alert(" Estimado(a) : " + infoPersona.nombre + "\n" +
                    " Correo : " + infoPersona.correo + "\n" + " " +
                    infoPersona.resultadoHipotecario.valorHipotecarioEscrito);
            } else {
                alert("renta debe ser mayor  a 1200000");
            };
        } else {
            alert("Ingrese una opción válida");
        };
        personas.push(infoPersona);
        seguirSimulando = confirm("¿Desea seguir simulando?");
    } while (seguirSimulando);

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        let numeroCuotas = persona.cantidaCuotas;
        console.log("Información de la persona " + (i + 1) + ":");
        console.log("Nombre: " + persona.nombre);
        console.log("Correo: " + persona.correo);
        console.log("Tipo de crédito: " + (persona.tipoCredito == 1 ? "Consumo" : "Hipotecario"));
       
        if (persona.tipoCredito == 1) {
            for (let i = 0; i < persona.cantidaCuotas; i++) {
                console.log("Número de cuotas y valor : ");
                console.log("n° " + (i + 1) + ": " + persona.resulltadoConsumo.valorCuota);
            };

        } else if (persona.tipoCredito == 2) {
            for (let i = 0; i < persona.cantidaCuotas; i++) {
                console.log("Número de cuotas y valor : ");
                console.log("n° " + (i + 1) + ": " + persona.resultadoHipotecario.valorCuota);
            };

        };
    };
}
simularCredito();

