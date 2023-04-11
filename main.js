function calcular() {
    let descontos = Number(document.getElementById('descontos').value);
    let salarioBruto = Number(document.getElementById('salarioBruto').value);
    let salarioLiquido = document.getElementById('salarioLiquido');
    let inssSaida = document.getElementById('INSS');
    let IRSaida = document.getElementById('IR').value;
    if (salarioBruto <= 1302.00) {
        console.log("Alíquota de 7,5% e parcela de R$ 0,00");
        const calculo1 = salarioBruto - (salarioBruto * 0.075) - descontos; // salario liquido
        const calculo11 = (salarioBruto * 0.075); // pagamento da porcentagem pro INSS
        inssSaida.value = "R$ " + calculo11.toFixed(2);
        salarioLiquido.value = "R$ " + calculo1.toFixed(2);
    }

    if (salarioBruto >= 1302.01 && salarioBruto <= 2571.29) {
        console.log("Alíquota de 9% e parcela de R$ 19,53");
        const calculo2 = salarioBruto - (salarioBruto * 0.09) - descontos - 19.53;
        const calculo22 = (salarioBruto * 0.075); // pagamento da porcentagem pro INSS
        inssSaida.value = "R$ " + calculo22.toFixed(2);
        salarioLiquido.value = "R$ " + calculo2.toFixed(2);
        console.log(calculo2.toFixed(2));
    }

    if (salarioBruto >= 2571.30 && salarioBruto <= 3856.94) {
        console.log("Alíquota de 12% e parcela de R$ 96,67");
        const calculo3 = salarioBruto - (salarioBruto * 0.12) - descontos - 96.67;
        const calculo33 = (salarioBruto * 0.075); // pagamento da porcentagem pro INSS
        inssSaida.value = "R$ " + calculo33.toFixed(2);
        salarioLiquido.value = "R$ " + calculo3.toFixed(2);
        console.log(calculo3.toFixed(2));
    }
    if (salarioBruto >= 3856.95) {
        console.log("Alíquota de 14% e parcela de R$ 173,80");
        const calculo4 = salarioBruto - (salarioBruto * 0.14) - descontos - 173.80;
        const calculo33 = (salarioBruto * 0.075); // pagamento da porcentagem pro INSS
        inssSaida.value = "R$ " + calculo33.toFixed(2);
        salarioLiquido.value = "R$ " + calculo4.toFixed(2);
        console.log(calculo4.toFixed(2));
    }
}