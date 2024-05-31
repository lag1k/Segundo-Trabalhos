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

});

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