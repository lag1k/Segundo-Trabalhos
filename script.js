document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeMenuBtn = document.getElementById("close-menu");

    // Função para abrir o menu
    function openMenu() {
        sidebar.style.width = "250px"; // Definindo a largura do menu para 250px
    }

    // Função para fechar o menu
    function closeMenu() {
        sidebar.style.width = "0"; // Definindo a largura do menu como 0 para ocultá-lo
    }

    // Event listener para o botão do menu
    menuToggle.addEventListener("click", function() {
        if (sidebar.style.width === "250px") {
            closeMenu(); // Se o menu estiver aberto, feche-o
        } else {
            openMenu(); // Se o menu estiver fechado, abra-o
        }
    });

    // Event listener para o botão de fechar
    closeMenuBtn.addEventListener("click", function() {
        closeMenu(); // Fecha o menu quando o botão de fechar é clicado
    });

    // Fechar o menu se o usuário clicar fora dele
    window.addEventListener("click", function(event) {
        if (event.target !== menuToggle && event.target.parentNode !== menuToggle && sidebar.style.width === "250px") {
            closeMenu(); // Se o menu estiver aberto e o usuário clicar fora dele, feche-o
        }
    });
});