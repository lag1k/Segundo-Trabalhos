// FUNÇÃO DA PÁGINA QUE RESGATA OS ITENS DE PRODUTOS (fazendo-pedidos.html)
document.addEventListener("DOMContentLoaded", function() {
    var imagemSrc = localStorage.getItem('imagemSrc');
    var textoNome = localStorage.getItem('textoNome');

    var imagemProduto = document.getElementById('imagem-produto');
    var nomeProduto = document.getElementById('nome-produto');

    if (imagemSrc) {
        imagemProduto.src = imagemSrc;
    }
    if (textoNome) {
        nomeProduto.textContent = textoNome;
    }
});