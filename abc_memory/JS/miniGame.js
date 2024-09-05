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
        videoContainer.classList.add('show');
        videoPlayer.play();

        letra.classList.add('encontrada');
    });
});

function fecharVideo() {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');

    const letraEncontrada = document.querySelector('.letra.encontrada');
    if (letraEncontrada) {
        letraEncontrada.remove(); // Remove a letra
    }

    videoContainer.classList.add('hide');

    setTimeout(() => {
        videoContainer.classList.remove('show', 'hide');
        videoPlayer.pause();
        videoPlayer.src = ''; // Reseta o vídeo
    }, 500); 

    verificarSeTodasLetrasForamEncontradas();
}

document.getElementById('close-btn').addEventListener('click', fecharVideo);
