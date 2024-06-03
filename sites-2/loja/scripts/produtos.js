// DA PAGINA DE CONFIRMAR COMPRA
document.addEventListener('DOMContentLoaded', function() {
    var imagens = document.querySelectorAll('.produtos_img');
    
    imagens.forEach(function(imagem) {
        imagem.addEventListener('click', function(event) {
            var imagemSrc = this.src;
            var textoNome = this.nextElementSibling.textContent; // Obtém o texto do elemento irmão seguinte
            
            localStorage.setItem('imagemSrc', imagemSrc);
            localStorage.setItem('textoNome', textoNome);
            
            // Carregar os itens depois de salvar no localStorage
            carregarItens();
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

    // Carregar Itens inicialmente
    carregarItens();
});

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
            img.classList.add("produto-img");
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
            
        });
        listaDiv.forEach(function(item){
            listaDiv.appendChild(div);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    carregarItens();
});