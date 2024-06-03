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