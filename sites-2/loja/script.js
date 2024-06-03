// Listeners de Eventos e Funções Auxiliares
document.addEventListener('DOMContentLoaded', function() {
    // FUNÇÃO DO BOTÕES DO MENU
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

    // FUNÇÃO DO CAMPO DE PESQUISA
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

    // ICON DO SITE VOLTAR PRA PAG ANTERIOR
    document.getElementById('back-button').addEventListener('click',function(){ 
        window.history.back();
    });
});










