function trolage() {
    const imagem = document.getElementById("imagemFull");
    imagem.style.display = 'block'; 
}

function soma() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 + valor2;
    alert("O resultado da soma entre " + valor1 + " e " + valor2 + " é " + resultado);
}
function subtração() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 - valor2;
    alert("O resultado da subtração entre " + valor1 + " e " + valor2 + " é " + resultado);
}
function multiplicação() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 * valor2;
    alert("O resultado da multiplicação entre " + valor1 + " e " + valor2 + " é " + resultado);
}
function divisão() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 / valor2;
    alert("O resultado da divisão entre " + valor1 + " e " + valor2 + " é " + resultado);
}
function resto() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 % valor2;
    alert("O resto da divisão de " + valor1 + " e " + valor2 + " é " + resultado);
}
function raiz() {
    let valor1 = Number(prompt("digite o primeiro valor"));
    let valor2 = Number(prompt("digite o segundo valor"));
    let resultado = valor1 ** valor2;
    alert("A potencia de " + valor1 + " a " + valor2 + " é " + resultado);
}

function perguntadorDeNome() {
    var nomeUsuario = prompt("Olá, qual seu nome?")
    if (nomeUsuario === null || nomeUsuario.trim() === "") {
        document.getElementById("usr").innerHTML = "usuário";
    } else {
        document.getElementById("usr").innerHTML = nomeUsuario;
    }
}

onload = perguntadorDeNome;
