function mudaFoto (foto) {
    document.getElementById("oculos").src = foto;
}

function calc_total() {
    let qtd = Number(document.getElementById('cQtd').value);
    let tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}