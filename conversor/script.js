document.getElementById('convert-c').onclick = tempC;  //puxa a função pelo button com a id
document.getElementById('convert-f').onclick = tempF; 
document.getElementById('clear').onclick = clearForm;

function tempC() { // convert celsius
    var fahrenheit = document.getElementById("box").value; //busca o valor na box

    if (isNaN(fahrenheit)) {  //verifica se eh um num ou nao
        alert("Por favor, digite um número válido!"); // alerta na janela se o valor eh valido ou não
        return;
    } else {
        var celsius = (parseFloat(fahrenheit) - 32) * 5 / 9; //conversão cel
        document.getElementById("resultado").innerText = "Celsius: " + parseFloat(celsius).toFixed(2); // dá o retorno e prende o valor em 2 casas decimais
    }
}

function tempF() { // convert fahrenheit
    var celsius = document.getElementById("box").value;

    if (isNaN(celsius)) {  //verifica se eh um num ou nao
        alert("Por favor, digite um número válido!");// alerta na janela se o valor eh valido ou não
        return;
    } else {
        var fahrenheit = parseFloat(celsius) * 9 / 5 + 32; //conversão fahr
        document.getElementById("resultado").innerText = "Fahrenheit: " + parseFloat(fahrenheit).toFixed(2);// dá o retorno e prende o valor em 2 casas decimais
    }
}

function clearForm() { //limpa tudo
    document.getElementById("box").value = "";
    document.getElementById("resultado").innerText = "";
}
