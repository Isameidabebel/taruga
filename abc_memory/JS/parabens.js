document.addEventListener('DOMContentLoaded', () => {
    const atividades = ['atividade1'];
    let totalPoints = 0;

    // Iterar sobre cada atividade e somar os pontos
    for (let i = 0; i < atividades.length; i++) {
        let pontos = parseInt(localStorage.getItem(atividades[i])) || 0;
        totalPoints += pontos;
    }

    // Exibir o resultado
    alert(`Sua pontuação total é: ${totalPoints}`);
});
