function gerarPosicaoAleatoria() {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    return { top: `${top}%`, left: `${left}%` };
}

function verificarSeTodasLetrasForamEncontradas() {
    const letrasRestantes = document.querySelectorAll('.letra');
    if (letrasRestantes.length === 0) {
        window.location.href = 'parabens.html';
    }
}

document.querySelectorAll('.letra').forEach(letra => {
    const posicao = gerarPosicaoAleatoria();
    letra.style.top = posicao.top;
    letra.style.left = posicao.left;
    
    letra.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const videoPlayer = document.getElementById('video-player');
        const videoContainer = document.getElementById('video-container');

        videoPlayer.src = videoSrc;
        videoContainer.style.display = 'block';

        videoPlayer.play();

        letra.classList.add('encontrada');
    });
});

function fecharVideo() {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    
    videoContainer.classList.add('fade-out');

    setTimeout(() => {
        videoContainer.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = ''; // Reseta o vídeo
        videoContainer.classList.remove('fade-out');
    }, 500); // Tempo da animação de fade out

    const letraEncontrada = document.querySelector('.letra.encontrada');
    if (letraEncontrada) {
        letraEncontrada.classList.add('fade-out');
        setTimeout(() => letraEncontrada.remove(), 500); // Tempo da animação de fade out
    }

    verificarSeTodasLetrasForamEncontradas();
}

document.getElementById('close-btn').addEventListener('click', fecharVideo);
