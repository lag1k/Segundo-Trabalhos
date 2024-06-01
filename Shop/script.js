//FUNÇÃO DO BOTÕES DO MENU
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
  
    burger.addEventListener('change', function() {
      if (burger.checked) {
        menu.classList.add('active');
        menu.classList.remove('closing');
      } else {
        menu.classList.add('closing');
        setTimeout(() => {
          menu.classList.remove('active');
        }, 300); 
      }
    });
  });
  
  //FUNÇÃO DO CAMPO DE PESQUISA
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const searchTerm = searchInput.value.trim().toLowerCase();

    updateSearchResults(searchTerm);
});

function updateSearchResults(searchTerm) {

    const items = ["Item 1", "Item 2", "Item 3", "Outro item"];

    const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));

    renderSearchResults(filteredItems);
}

function renderSearchResults(results) {
    searchResults.innerHTML = '';

    const resultList = document.createElement('ul');

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        resultList.appendChild(listItem);
    });

    searchResults.appendChild(resultList);
}


//TROCA O CADASTRO E O LOGIN DE LUGAR
const trocaButtons = document.querySelectorAll('#troca');                  

    trocaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cadDiv = document.getElementById('cad');
            const logDiv = document.getElementById('log');

            if (cadDiv.style.display === "none") {
                cadDiv.style.display = "block";
                logDiv.style.display = "none";
            } else {
                cadDiv.style.display = "none";
                logDiv.style.display = "block";
            }
    });
});


//FUNÇÃO DO ICON DO SITE VOLTAR PRA PAG ANTERIOR
document.getElementById('back-button').addEventListener('click',function(){ 
    window.history.back();
});


//FUNÇÃO DA PAGINA DE CONFIRMAR COMPRA
document.addEventListener("DOMContentLoaded", function() {
    var imagens = document.querySelectorAll('.produtos_img');
    
    imagens.forEach(function(imagem) {
        imagem.addEventListener('click', function(event) {
            var imagemSrc = this.src;
            var textoNome = document.getElementById('nome').textContent;
            
            localStorage.setItem('imagemSrc', imagemSrc);
            localStorage.setItem('textoNome', textoNome);
        });
    });

    var imagemSrc = localStorage.getItem('imagemSrc');
    var textoNome = localStorage.getItem('textoNome');

    var imagemProduto = document.getElementById('imagem');
    var nomeProduto = document.getElementById('nome-produto');

    if (imagemSrc) {
        imagemProduto.src = imagemSrc;
    }
    if (textoNome) {
        nomeProduto.textContent = textoNome;
    }
    
});

//FUNÇÃO DE ADD ITEM NOVO
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
//FUNÇÃO DE CARRREGAR ITEM NOVO
function carregarItens(nomeLista) {
    // Obtém a lista de itens correspondente do localStorage
    var lista = JSON.parse(localStorage.getItem(nomeLista)) || [];

    var listaDiv = document.getElementById(nomeLista);

    // Limpa a lista atual

    // Adiciona cada item à lista
    lista.forEach(function(item) {
        var div = document.createElement("div");
        div.classList.add("produtos");

        var a = document.createElement("a");
        a.href = "compra.html";
        a.id = "produtos";

        var img = document.createElement("img");
        img.src = item.imagem;
        img.classList.add("novo_img");
        img.alt = item.titulo;
        img.id - 'img';

        a.appendChild(img);
        div.appendChild(a);

        var tituloElem = document.createElement("p");
        tituloElem.textContent =  item.titulo;
        tituloElem.id = 'nome';
        

        var tamanhoElem = document.createElement("p");
        tamanhoElem.textContent = "Tamanho: " + item.tamanho;
        tamanhoElem.classList.add("inv")
        

        var descricaoElem = document.createElement("p");
        descricaoElem.textContent = "Descrição: " + item.descricao;
        descricaoElem.classList.add("inv")

        var valorElem = document.createElement("p");
        valorElem.textContent = "Valor: R$ " + item.valor;
        valorElem.classList.add("inv")

      
        div.appendChild(tituloElem);
        div.appendChild(tamanhoElem);
        div.appendChild(descricaoElem);
        div.appendChild(valorElem);

        listaDiv.appendChild(div);
    });
}
//FUNÇÃO DE CARREGAR-2 ITEM NOVO
window.onload = function() {
    // Aqui, você carrega cada lista uma vez
    carregarItens("vestidos");
    carregarItens("conjuntos");
    carregarItens("pijamas");
    carregarItens("acessorios");
};
  





//FUNÇÃO DO CARINHO

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
limpo = document.getElementById('clear-cart').addEventListener('click', function () {
    localStorage.removeItem('carrinho');
    carregarCarrinho();
});
