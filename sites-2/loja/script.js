document.addEventListener('DOMContentLoaded', function() {

    // FUNÇÃO DO BOTÕES DO MENU
    // Seleciona o elementos
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    // Adiciona um ouvinte de eventos para o evento 'change' do elemento 'burger'
    burger.addEventListener('change', function() {
        
        if (burger.checked) {// Verifica se o checkbox do 'burger' está marcado
            menu.classList.add('active'); // Se marcado, adiciona a classe 'active' ao menu
            menu.classList.remove('closing'); // Remove a classe 'closing' do menu, se presente
        } else {
            menu.classList.add('closing');// Se não marcado, adiciona a classe 'closing' ao menu
            setTimeout(() => {// Define um timeout para remover a classe 'active' do menu após 300 milissegundos
                menu.classList.remove('active');
            }, 300); 
        }
    });








    //FUNÇÃO DE PESQUISA
    // Seleciona o elemento de entrada de pesquisa
    const searchInput = document.getElementById('search-input');

    // Seleciona o botão de pesquisa
    const searchButton = document.getElementById('search-button');

    // Seleciona o elemento onde os resultados da pesquisa serão exibidos
    const searchResults = document.getElementById('search-results');

    // Adiciona um ouvinte de eventos ao botão de pesquisa
    searchButton.addEventListener('click', function(event) {
        // Evita o comportamento padrão do botão, que é recarregar a página
        event.preventDefault(); 
        
        // Obtém o termo de pesquisa da entrada de pesquisa, remove espaços em branco e converte para minúsculas
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Chama a função para atualizar os resultados da pesquisa com base no termo de pesquisa
        updateSearchResults(searchTerm);
    });

    // Função que atualiza os resultados da pesquisa com base no termo de pesquisa fornecido
    function updateSearchResults(searchTerm) {
        // Lista de item, possui um nome e um link
        const items = [
            { name: "Vestidos", link: "produtos.html#vestidos" },
            { name: "Conjuntos", link: "produtos.html#conjuntos" },
            { name: "Pijamas", link: "produtos.html#pijamas" },
            { name: "Acessórios", link: "produtos.html#acessorios" }
        ];

        
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));// Filtra os itens com base no termo de pesquisa fornecido
        renderSearchResults(filteredItems);// Chama a função para renderizar os resultados da pesquisa filtrados
    }


    function renderSearchResults(results) {// Função que renderiza os resultados da pesquisa na página
        searchResults.innerHTML = '';// Limpa o conteúdo atual dos resultados da pesquisa
        const resultList = document.createElement('ul');// Cria uma lista não ordenada para armazenar os resultados da pesquisa

        results.forEach(result => {// Para cada resultado da pesquisa, cria um item de lista com um link
            const listItem = document.createElement('li'); // Cria um item de lista
            const link = document.createElement('a'); // Cria um elemento de link
            link.href = result.link; // Define o link do elemento de link
            link.textContent = result.name; // Define o texto do elemento de link
            listItem.appendChild(link); // Adiciona o elemento de link ao item de lista
            resultList.appendChild(listItem); // Adiciona o item de lista à lista de resultados
        });
        searchResults.appendChild(resultList);// Adiciona a lista de resultados à seção de resultados da pesquisa na página
    }





    


    // TROCA O CADASTRO E O LOGIN DE LUGAR
    const trocaButtons = document.querySelectorAll('#troca');// Seleciona todos os botões com o ID 'troca'                  

    trocaButtons.forEach(button => {// Adiciona um ouvinte de eventos a cada botão 'troca'
        button.addEventListener('click', function() {
            // Seleciona as divs 'cad' e 'log' para alternar entre exibição e ocultação
            const cadDiv = document.getElementById('cad');
            const logDiv = document.getElementById('log');
           
            if (cadDiv.style.display === "none") { // Verifica se a div 'cad' está oculta
                // Se 'cad' está oculta, mostra 'cad' e oculta 'log'
                cadDiv.style.display = "block";
                logDiv.style.display = "none";
            } else {
                // Se 'cad' não está oculta, oculta 'cad' e mostra 'log'
                cadDiv.style.display = "none";
                logDiv.style.display = "block";
            }
        });
    });





    


    //FUNÇÃO DE VOLTAR A PAGINA 
    // Adiciona um ouvinte de eventos ao botão 'back-button' para voltar para a página anterior
    document.getElementById('back-button').addEventListener('click', function() { 
        window.history.back();
    });





    


    //FUNÇÃO DE SALVARR ITENS
    // Seleciona todas as imagens com a classe 'produtos_img'
    var imagens = document.querySelectorAll('.produtos_img');
    
    imagens.forEach(function(imagem) {// Adiciona um ouvinte de eventos a cada imagem
        imagem.addEventListener('click', function(event) {
            // Obtém o src da imagem clicada
            var imagemSrc = this.src;
            // Obtém o texto do nome do produto
            var textoNome = document.getElementById('nome').textContent;
            
            // Armazena o src da imagem e o texto do nome do produto no localStorage
            localStorage.setItem('imagemSrc', imagemSrc);
            localStorage.setItem('textoNome', textoNome);
        });
    });

    // Recupera os dados armazenados no localStorage
    var imagemSrc = localStorage.getItem('imagemSrc');
    var textoNome = localStorage.getItem('textoNome');

    // Seleciona os elementos de imagem e nome do produto na página
    var imagemProduto = document.getElementById('imagem');
    var nomeProduto = document.getElementById('nome-produto');

    // Se houver um src de imagem armazenado, define a imagem do produto
    if (imagemSrc) {
        imagemProduto.src = imagemSrc;
    }
    // Se houver um nome de produto armazenado, define o texto do nome do produto
    if (textoNome) {
        nomeProduto.textContent = textoNome;
    }

    carregarItens();// Carrega os itens

});





    


// FUNÇÃO DE ADD ITEM NOVO (add.html)
function adicionarItem(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

    // Obtém os valores dos campos do formulário
    var imagem = document.getElementById("imagem").files[0];
    var titulo = document.getElementById("titulo").value;
    var tamanho = document.getElementById("tamanho").value;
    var descricao = document.getElementById("descricao").value;
    var valor = document.getElementById("valor").value;
    var listaSelecionada = document.getElementById("lista").value;

    // Verifica se todos os campos estão preenchidos
    if (imagem && titulo && tamanho && descricao && valor) {
        // Cria um leitor de arquivo para ler a imagem como um dado base64
        var reader = new FileReader();
        reader.onload = function(event) {
            // Quando a imagem é carregada como base64, cria um objeto para o item
            var item = {
                imagem: event.target.result, // Usa o dado base64 da imagem
                titulo: titulo,
                tamanho: tamanho,
                descricao: descricao,
                valor: valor
            };

            // Obtém a lista de itens correspondente do localStorage ou cria uma nova lista se não existir
            var lista = JSON.parse(localStorage.getItem(listaSelecionada)) || [];
            lista.push(item);

            // Salva a lista atualizada no localStorage
            localStorage.setItem(listaSelecionada, JSON.stringify(lista));

            // Limpa os campos do formulário
            document.getElementById("form-roupa").reset();

            alert("Item adicionado com sucesso!");
        };
        // Lê a imagem como um dado base64
        reader.readAsDataURL(imagem);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}





    


// FUNÇÃO DE CARRREGAR ITEM NOVO (produtos.html)
function carregarItens() {
    var listas = ['vestidos', 'conjuntos', 'pijamas', 'acessorios'];

    listas.forEach(function(lista) {
        var listaItens = JSON.parse(localStorage.getItem(lista)) || [];
        var listaDiv = document.getElementById(lista);

        listaItens.forEach(function(item) {
            var div = document.createElement("div");
            div.classList.add("produtos");

            var link = document.createElement("a");
            link.href = "fazendo_pedido.html";
            link.id = 'produtos';

            var img = document.createElement("img");
            img.classList.add("produtosimg");
            img.id = 'img';
            img.src = item.imagem;
            img.alt = item.titulo;

            var tituloElem = document.createElement("p");
            tituloElem.textContent = item.titulo;
            tituloElem.id ='nome';
            tituloElem.style.textAlign = 'center';

            link.appendChild(img);
            div.appendChild(link);
            div.appendChild(tituloElem);

            // Adiciona o item à listaDiv
            listaDiv.appendChild(div);
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    carregarItens();
});





    


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
        window.location.href = ''; // Supondo que a página do carrinho seja 'carrinho.html'
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


