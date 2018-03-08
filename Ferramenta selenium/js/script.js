function verPassou() {
    const nota = document.getElementById('nota').value;
    const freq = document.getElementById('frequencia').value;
    if (nota >= 60) {
        if (freq > 75) {
            document.getElementById('resultado').innerHTML = 'Aprovado';
            document.getElementById('resultado').value = 'aprovado';
        } else if (freq >= 50) {
            document.getElementById('resultado').value = 'recuperacao';
            document.getElementById('resultado').innerHTML = 'Recuperacao';
        } else {
            document.getElementById('resultado').value = 'reprovado';
            document.getElementById('resultado').innerHTML = 'Reprovado';
        }
    } else if (nota >= 40 && freq >= 50) {
        document.getElementById('resultado').value = 'recuperacao';
        document.getElementById('resultado').innerHTML = 'Recuperacao';
    } else {
        document.getElementById('resultado').value = 'reprovado';
        document.getElementById('resultado').innerHTML = 'Reprovado';
    }
}

function limpar() {
    document.getElementById('resultado').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('nota').value = '';
    document.getElementById('frequencia').value = '';
}