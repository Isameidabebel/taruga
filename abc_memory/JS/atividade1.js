// Função para obter a pontuação atual ou inicializar em 0
function obterPontos() {
    return parseInt(localStorage.getItem('pontos')) || 0;
}

// Função para salvar a pontuação no localStorage
function salvarPontos(pontos) {
    localStorage.setItem('pontos', pontos);
}

// Função de verificação de escolha
function Escolha(cardId) {
    const imagem = document.getElementById('imagem');
    const titulo = document.getElementById('titulo');
    const cT = document.getElementById('containerTitulo');

    let pontos = obterPontos(); // Obtém a pontuação atual

    imagem.classList.add('fade-out');
    titulo.classList.add('fade-out-title');

    setTimeout(() => {
        if (cardId === 'card1') { // Verifica se o cardId é o correto
            pontos = 1; // Incrementa a variável
            imagem.src = '../imgs/Certo.png';
            titulo.textContent = 'Parabéns você acertou!';
            titulo.style.color = '#11ce00';
            cT.textContent = 'Vamos para próxima atividade, clique em continuar';
            alert('Sua pontuação total é: ' + pontos);
        } else {
            imagem.src = '../imgs/Errado.png';
            titulo.textContent = 'Que pena parece que você errou!';
            titulo.style.color = '#c92300';
            cT.textContent = 'Vamos para próxima atividade, clique em continuar';
            alert('Sua pontuação total é: ' + pontos);
        }

        salvarPontos(pontos); // Salva a pontuação atualizada

        imagem.classList.remove('fade-out');
        titulo.classList.remove('fade-out-title');

        desativarCards();
    }, 300);
}

// Função para desativar os cards após o clique
function desativarCards() {
    const cards = document.getElementsByClassName('cards');

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('inactive');
        cards[i].onclick = null;
    }
}

// Mudar de página com o botão continuar
const continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', () => {
    window.location.href = 'atividade2.html'; // Substitua 'atividade2.html' pela URL desejada
});
