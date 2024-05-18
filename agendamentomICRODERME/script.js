function exibirDados() {
    var nome = document.getElementById("nome").value;
    var dataHora = document.getElementById("data-hora").value;
    var telefone = document.getElementById("telefone").value;
    var jotapeCheckbox = document.getElementById("jotape").checked ? document.getElementById("jotape").value : "";

    var mensagem = "Nome: " + nome + "\n";
    mensagem += "Data e Hora: " + dataHora + "\n";
    mensagem += "Telefone: " + telefone + "\n";
    mensagem += "Olá, gostaria de restaurar minha autoestima com o novo método revolucionário Microderme. conto com sua proficionalidade sra. " + jotapeCheckbox;

    document.getElementById("mensagem").value = mensagem;
}



function enviarParaWhatsapp() {
    // Obtém o conteúdo do textarea
    var mensagem = document.getElementById("mensagem").value;

    // Seu número de WhatsApp
    var numeroWhatsapp = "5591987660757"; // Seu número real

    // Codifica a mensagem para que caracteres especiais sejam tratados corretamente
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Cria o link direto para enviar a mensagem para o WhatsApp
    var url = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada;

    // Abre o link em uma nova aba
    window.open(url, '_blank');
}
