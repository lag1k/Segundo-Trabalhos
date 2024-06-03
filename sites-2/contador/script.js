document.getElementById("clear").onclick = clear //faz o botão puxar a função clear(limpar)

function contarCaracteres() { //cria a função de contar
    texto = document.getElementById("texto").value; // variavel texto igual id texto no html(valor)
    contador = document.getElementById("contador"); // acha o id contator
    contador.textContent = texto.length; // aqui ele define o contador o valor do texto
}

function clear(){ // função de limpar a caixa de texto
    document.getElementById("texto").value = ""; //zera a caixa de texto
    document.getElementById("contador").innerText = "0"; // coloca o contador para 0 dnv

}