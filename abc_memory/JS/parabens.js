import { pontos1 } from './atividade1.js';

const button = document.getElementById('teste');
const h1 = document.getElementById('h1');

button.addEventListener('click', () => {
    h1.textContent = 'Sua pontuação total é: ' + pontos1;
});
