// Função para gerar posições aleatórias dentro do cenário
function gerarPosicaoAleatoria() {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    return { top: `${top}%`, left: `${left}%` };
}

// Função para verificar se todas as letras foram encontradas
function verificarSeTodasLetrasForamEncontradas() {
    const letrasRestantes = document.querySelectorAll('.letra');
    if (letrasRestantes.length === 0) {
        // Redirecionar para outra página
        window.location.href = 'parabens.html'; // Substitua pelo caminho da página desejada
    }
}

// Seleciona todas as letras e posiciona cada uma aleatoriamente
document.querySelectorAll('.letra').forEach(letra => {
    const posicao = gerarPosicaoAleatoria();
    letra.style.top = posicao.top;
    letra.style.left = posicao.left;
    
    // Adiciona o evento de clique para exibir o vídeo
    letra.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const videoPlayer = document.getElementById('video-player');
        const videoContainer = document.getElementById('video-container');

        // Exibe o vídeo correspondente com animação
        videoPlayer.src = videoSrc;
        videoContainer.classList.add('show');
        videoPlayer.play();

        // Armazena a letra clicada para remover depois
        letra.classList.add('encontrada');
    });
});

// Função para fechar o vídeo e remover a letra
function fecharVideo() {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');

    // Remove a letra encontrada
    const letraEncontrada = document.querySelector('.letra.encontrada');
    if (letraEncontrada) {
        letraEncontrada.remove(); // Remove a letra
    }

    // Adiciona a classe hide para iniciar a animação de desaparecimento
    videoContainer.classList.add('hide');

    // Remove o vídeo e a classe hide após a animação
    setTimeout(() => {
        videoContainer.classList.remove('show', 'hide');
        videoPlayer.pause();
        videoPlayer.src = ''; // Reseta o vídeo
    }, 500); // Tempo igual à duração da animação de fade out

    // Verifica se todas as letras foram encontradas
    verificarSeTodasLetrasForamEncontradas();
}

// Evento de clique no botão "X" para fechar o vídeo
document.getElementById('close-btn').addEventListener('click', fecharVideo);
