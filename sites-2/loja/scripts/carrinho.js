// FUNÇÃO DO CARRINHO
document.addEventListener("DOMContentLoaded", function() {
    // Função para adicionar um item ao carrinho
    document.getElementById('adicionar-ao-carrinho').addEventListener('click', function() {
        var titulo = document.getElementById("nome-produto").textContent;
        var img = document.getElementById("imagem").src;
        var valor = document.getElementById("valor").textContent;

        var item = {
            name: titulo,
            image: img,
            price: valor
            // Adicione outras propriedades do item, se necessário
        };

        localStorage.setItem('itemParaCarrinho', JSON.stringify(item));

        // Redireciona para a página do carrinho
        window.location.href = 'pags/carrinho.html'; // Supondo que a página do carrinho seja 'carrinho.html'
    });

    // Função para carregar os itens do carrinho do localStorage
    function carregarCarrinho() {
        var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        var carrinhoElemento = document.getElementById('carrinho');
        carrinhoElemento.innerHTML = ''; // Limpa o conteúdo atual
        var total = 0;
        var itemCounts = {};

        // Verifica se há um item armazenado no localStorage
        var itemParaCarrinho = JSON.parse(localStorage.getItem('itemParaCarrinho'));
        if (itemParaCarrinho) {
            adicionarItemAoCarrinho(itemParaCarrinho); // Adiciona o item ao carrinho
            localStorage.removeItem('itemParaCarrinho'); // Remove o item do localStorage
        }

        // Restante do código para carregar o carrinho...
    }

    // Configura o botão para limpar o carrinho
    document.getElementById('clear-cart').addEventListener('click', function () {
        localStorage.removeItem('carrinho');
        carregarCarrinho();
    });
});