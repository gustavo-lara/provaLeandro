document.addEventListener('DOMContentLoaded', function () {

    const elementoAno = document.getElementById('anoAtual');
    const anoAtual = new Date().getFullYear();

    if (elementoAno) {
        elementoAno.textContent = anoAtual;
    }
});