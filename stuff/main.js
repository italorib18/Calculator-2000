function soma() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 + valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function subtração() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 - valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function multiplicação() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 * valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function divisão() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 / valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function resto() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 % valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function raiz() {
    let valor1 = Number(document.getElementById("primeiraEntrada").value);
    let valor2 = Number(document.getElementById("segundaEntrada").value);
    let resultado = valor1 ** valor2;
    return document.getElementById("visor").innerHTML = resultado;
}
function limpar() {
    document.getElementById("visor").innerHTML = 0;
}