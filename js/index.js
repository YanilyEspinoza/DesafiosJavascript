//Ejercicio: Calcular el pago a realizar según intereses y cuotas a pagar.

//Constantes
const IVA = 0.21
const CUOTABR = 0.10
const CUOTAMR = 0.20
const CUOTAAR = 0.30

//Información solicitada
let montoCreditoSolicitado = parseInt(prompt("Ingrese el monto del crédito a solicitar"));

while (montoCreditoSolicitado < 10000 || montoCreditoSolicitado > 100000) {
    alert ("Debe ingresar un monto mayor a 10.000$ y menor a 100.000$");
    montoCreditoSolicitado = parseInt(prompt("Ingrese el monto del crédito a solicitar"));
}

let numeroCuotas = parseInt(prompt("Ingrese la cantidad de Cuotas deseadas"))

while (numeroCuotas < 6 || numeroCuotas > 12) {
    alert ("Debe seleccionar entre 6 a 12 cuotas");
    numeroCuotas = parseInt(prompt("Ingrese la cantidad de Cuotas deseadas"));
}

//Cálculos

let creditoIVA = (montoCreditoSolicitado * IVA) + montoCreditoSolicitado

switch (numeroCuotas){
    case (6):
        let calculoBR1 = (creditoIVA * CUOTABR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoBR1 + " pesos, con pagos mensuales de: " + (calculoBR1/6) + " pesos." );
        break;
    case (7):
        let calculoBR2 = (creditoIVA * CUOTABR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoBR2 + " pesos, con pagos mensuales de: " + (calculoBR2/7) + " pesos." );
        break;
    case (8):
        let calculoMR1 = (creditoIVA * CUOTAMR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoMR1 + " pesos, con pagos mensuales de: " + (calculoMR1/8) + " pesos." );
        break;
    case (9):
        let calculoMR2 = (creditoIVA * CUOTAMR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoMR2 + " pesos, con pagos mensuales de: " + (calculoBR/9) + " pesos." );
        break;
    case (10):
        let calculoAR1 = (creditoIVA * CUOTAAR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoAR1 + " pesos, con pagos mensuales de: " + (calculoAR1/10) + " pesos." );
        break;
    case (11):
        let calculoAR2 = (creditoIVA * CUOTAAR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoAR2 + " pesos, con pagos mensuales de: " + (calculoAR2/11) + " pesos." );
        break; 
    case (12):
        let calculoAR3 = (creditoIVA * CUOTAAR) + creditoIVA
        alert ("El monto total a pagar será de: " + calculoAR3 + " pesos, con pagos mensuales de: " + (calculoAr3/12) + " pesos." );
        break;
}

function nuevoCalculo (montoCreditoSolicitado , numeroCuotas) {
    switch (numeroCuotas) {
        case (6):
            let calculoBR1 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTABR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoBR1 + " pesos, con pagos mensuales de: " + (calculoBR1/6) + " pesos." );
            break;
        case (7):
            let calculoBR2 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTABR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoBR2 + " pesos, con pagos mensuales de: " + (calculoBR2/7) + " pesos." );
            break;
        case (8):
            let calculoMR1 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTAMR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoMR1 + " pesos, con pagos mensuales de: " + (calculoMR1/8) + " pesos." );
            break;
        case (9):
            let calculoMR2 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTAMR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoMR2 + " pesos, con pagos mensuales de: " + (calculoBR/9) + " pesos." );
            break;
        case (10):
            let calculoAR1 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTAAR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoAR1 + " pesos, con pagos mensuales de: " + (calculoAR1/10) + " pesos." );
            break;
        case (11):
            let calculoAR2 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTAAR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoAR2 + " pesos, con pagos mensuales de: " + (calculoAR2/11) + " pesos." );
            break; 
        case (12):
            let calculoAR3 = (((montoCreditoSolicitado * IVA) + montoCreditoSolicitado) * CUOTAAR) + ((montoCreditoSolicitado * IVA) + montoCreditoSolicitado)
            alert ("El monto total a pagar será de: " + calculoAR3 + " pesos, con pagos mensuales de: " + (calculoAr3/12) + " pesos." );
            break;
    }
}