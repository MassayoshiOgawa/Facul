function validaFormulario() {
    let num1 = document.getElementById('num1').value;
    let test = parseInt(num1)
    if (num1 === "" || isNaN(test) || num1.includes(".")) {
        alert("O campo tem que estar preenchido corretamente com um número inteiro.");
        document.getElementById('num1').focus();
        return false;
    }

    let vetor = [];
    let i = 0;
    while (i < 10) {
        let entrada = prompt("Informe o valor inteiro " + (i + 1) + ": ");
        let valor = parseInt(entrada);
        if (isNaN(valor) || entrada.includes(".")) {
            alert("Valor inválido. Informe apenas números inteiros.");
        } else {
            vetor[i] = valor;
            console.log("Valor inserido: " + valor);
            i++;
        }
    }

    console.log("Vetor preenchido: " + vetor);

    let busca = parseInt(num1);
    let posicao = -1;

    for (let i = 0; i < 10; i++) {
        if (vetor[i] === busca) {
            posicao = i;
            break;
        }
    }

    if (posicao !== -1) {
        alert("Valor " + busca + " encontrado na posição " + (posicao + 1) + " do vetor.");
        console.log("Valor " + busca + " encontrado na posição " + (posicao + 1) + " do vetor.");
    } else {
        alert("Valor " + busca + " não foi encontrado no vetor.");
        console.log("Valor " + busca + " não foi encontrado no vetor.");
    }

    return false;
}
