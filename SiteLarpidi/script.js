// script.js

// Adicionando o evento de clique ao botão após o carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("installButton").addEventListener("click", function() {
        // Criando um link para a imagem
        const link = document.createElement('a');
        link.href = 'assets/images/Ínicio.png'; // Caminho da imagem
        link.download = 'assets/images/Ínicio.png'; // Nome do arquivo ao ser baixado

        // Adicionando o link ao documento (não é necessário visivelmente)
        document.body.appendChild(link);
        link.click(); // Simulando um clique no link
        document.body.removeChild(link); // Removendo o link após o clique
    });
});
