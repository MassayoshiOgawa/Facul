function validaFormulario() {
    var numdia = document.getElementById("numdia").value;

    if (numdia === "" || isNaN(numdia)) {
        alert("Informe um número inteiro válido!");
        return false;
    }

    numdia = parseInt(numdia);

    if (numdia < 1 || numdia > 7) {
        alert("Informe um número entre 1 e 7!");
        return false;
    }

    var diaSemana;

    switch (numdia) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Segunda-feira";
            break;
        case 3:
            diaSemana = "Terça-feira";
            break;
        case 4:
            diaSemana = "Quarta-feira";
            break;
        case 5:
            diaSemana = "Quinta-feira";
            break;
        case 6:
            diaSemana = "Sexta-feira";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
    }

    alert("O dia da semana é: " + diaSemana);
    return false;
}
