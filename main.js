const descontos = document.getElementById('descontos');
const inssSaida = document.getElementById('INSS');
const IR = document.getElementById('IR');

function calcular() {
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    console.log('oi')
    if (salarioBruto <= 1302.00) {
        console.log("Alíquota de 7,5% e parcela de R$ 0,00");
        const calculo1 = salarioBruto - (salarioBruto * 0.075);
        console.log(calculo1);
    }

    if (salarioBruto >= 1302.01 && salarioBruto <= 2571.29) {
        console.log("Alíquota de 9% e parcela de R$ 19,53");
        const calculo2 = salarioBruto - (salarioBruto * 0.09) - 19.53;
        console.log(calculo2);
    }

    if (salarioBruto >= 2571.30 && salarioBruto <= 3856.94) {
        console.log("Alíquota de 12% e parcela de R$ 96,67");
        const calculo3 = salarioBruto - (salarioBruto * 0.12) - 96.67;
        console.log(calculo3);
    } if (salarioBruto >= 3856.95) {
        console.log("Alíquota de 14% e parcela de R$ 173,80");
        const calculo4 = salarioBruto - (salarioBruto * 0.14) - 173.80;
        console.log(calculo4);
    }
}