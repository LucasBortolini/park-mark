// Função para redirecionar para a versão com "www."
function canonicalizeURL() {
    var hostname = window.location.hostname;
    var pathname = window.location.pathname;
    var search = window.location.search;

    // Verifica se a URL não contém "www."
    if (hostname === 'parkmark.com.br') {
        // Redireciona para a versão com "www."
        window.location.href = 'https://www.parkmark.com.br' + pathname + search;
    }
}

// Executa a função de canonização quando a página carrega
window.onload = canonicalizeURL;
