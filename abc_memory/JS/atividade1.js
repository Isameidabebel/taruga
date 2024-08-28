//Mudar de pag com o button continuar
const continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', () => {
    window.location.href = 'atividade2.html'; // Substitua 'outraPagina.html' pela URL desejada
});

//Lógica dos cards + fade
const cardCorreto = 'card1';
var totalPontos1;

function verificarEscolha(cardId) {
    const imagem = document.getElementById('imagem');
    const titulo = document.getElementById('titulo');
    const cT = document.getElementById('containerTitulo');
    let pontos1 = 0;

    imagem.classList.add('fade-out');
    titulo.classList.add('fade-out-title');

    setTimeout(() => {
        if (cardId === cardCorreto) {
            pontos1 += 1;
            imagem.src = '../imgs/Certo.png';
            titulo.textContent = 'Parabéns você acertou!';
            titulo.style.color = '#11ce00';
            cT.textContent = 'Vamos para próxima atividade, clique em continuar';
            alert('Sua pontuação total é: ' + pontos1);
        } else {
            imagem.src = '../imgs/Errado.png';
            titulo.textContent = 'Que pena parece que você errou!';
            titulo.style.color = '#c92300';
            cT.textContent = 'Vamos para próxima atividade, clique em continuar';
            alert('Sua pontuação total é: ' + pontos1);
            boolPontos = false;
        }

        imagem.classList.remove('fade-out');
        titulo.classList.remove('fade-out-title');

        desativarCards();
        exporta(pontos1);
    }, 300);
}

function exporta(pontos) {
    if(pontos > 0){
        totalPontos1 = 1;
        console.log(totalPontos1);
    }
}

//função que muda o css dos cards ao clicar
function desativarCards() {
    const cards = document.getElementsByClassName('cards');

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('inactive');
        cards[i].onclick = null;
    }
}

