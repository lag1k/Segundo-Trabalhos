// TROCA O CADASTRO E O LOGIN DE LUGAR
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