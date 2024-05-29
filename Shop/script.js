document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('close-menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('show');
    });

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão de pesquisa
        const searchTerm = searchInput.value;
        alert("Você pesquisou por: " + searchTerm);
    });

    const formRoupa = document.getElementById('form-roupa');
    const produtosContainer = document.getElementById('produtos');

    formRoupa.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const tamanho = document.getElementById('tamanho').value;
        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const imagem = document.getElementById('imagem').files[0]; // Obtém o arquivo de imagem selecionado pelo usuário

        const novoProduto = criarProduto(tamanho, descricao, valor, imagem);
        produtosContainer.appendChild(novoProduto);

        // Limpar o formulário
        formRoupa.reset();
    });

    function criarProduto(tamanho, descricao, valor, imagem) {
        const produto = document.createElement('div');
        produto.classList.add('produto');
        
        const infoProduto = document.createElement('p');
        infoProduto.textContent = `${tamanho} - ${descricao} - R$ ${valor.toFixed(2)}`;
        
        const imagemProduto = document.createElement('img');
        imagemProduto.src = URL.createObjectURL(imagem); // Exibir a imagem selecionada pelo usuário
        
        produto.appendChild(infoProduto);
        produto.appendChild(imagemProduto); // Adicionar a imagem ao produto
        return produto;
    }
});
