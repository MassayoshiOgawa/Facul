function backToDefault(){
    document.getElementById('container').style.display = "none"
    document.getElementById('image').style.display = "block"
    document.getElementById('title').innerText = `Bem vindo!`
    document.getElementById('desc1').innerText = `Este documento HTML servirá como repositório de atividades`
    document.getElementById('desc2').innerText = `propostas de programação desenvolvidas em HTML, CSS e JavaScript`
}
backToDefault()

function changeDefault(){
    document.getElementById('container').style.display = "block"
    document.getElementById('image').style.display = "none"
    document.getElementById('container').style.display = "flex"
}

let topicAtual = ""

let topicInfo = {
    Se1: "A estrutura condicional if (se) em JavaScript executa um bloco",
    Se2: "de código específico apenas quando uma condição estabelecida é verdadeira.",
    Caso1: "A estrutura switch (caso) permite executar diferentes blocos de código",
    Caso2: "com base no valor de uma variável, comparando com diversos casos possíveis.",
    ParaFaca1: "O loop for (para faça) é utilizado quando se deseja repetir um bloco",
    ParaFaca2: "de código um número pré-determinado de vezes.",
    FacaEnquanto1: "O loop do-while (faça enquanto) executa o bloco de código primeiro",
    FacaEnquanto2: "e depois verifica a condição, garantindo pelo menos uma execução.",
    EnquantoFaca1: "O loop while (enquanto faça) verifica a condição antes de cada execução",
    EnquantoFaca2: "do bloco de código, podendo não executar nenhuma vez se for falsa.",
    Vetor1: "Um vetor é uma estrutura de dados que armazena uma coleção",
    Vetor2: "de elementos do mesmo tipo em posições consecutivas de memória.",
    Matriz1: "Uma matriz é uma estrutura de dados bidimensional que organiza",
    Matriz2: "elementos em linhas e colunas, como uma tabela."
}

function validaFormularioSe1(){
    let idade = document.getElementById("idade").value;
    if(idade === ""){
        alert("Campo Idade é obrigatório!");
        document.frmtstidade.numidade.focus();
        return false;
    }
    else{
        let idadev = parseInt(idade);
        if(idadev >= 18){
            alert("Sua idade é "+idadev+" você é maior de idade!");
        }else{
            alert(`Sua idade é ${idadev} você é menor de idade!`);
        }
    }
    return true;
}

function validaFormularioSe2(){
    let num = document.getElementById("numero").value;
    if(num === ""){
        alert("Campo número é obrigatório!");
        document.frmtstnum.numNumero.focus();
        return false;
    }
    else{
        let numverificado = parseInt(num);
        if((numverificado % 2) == 0){
            alert(`O número ${numverificado} é par!`);
        }else{
            alert(`O número ${numverificado} é ímpar!`);
        }
    }
    return true;
}

function validaFormularioCaso1(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('op').value;

    if (num1 === "" || num2 === "" || op === "") {
        console.log("Os campos tem que estar preenchidos corretamente");
        document.getElementById('num1').focus();
        return false;
    } else {
        num1 = parseInt(document.getElementById('num1').value);
        num2 = parseInt(document.getElementById('num2').value);
        op = parseInt(document.getElementById('op').value);
        switch(op){
            case 1:
                console.log(`A soma de ${num1} + ${num2} é = ${num1 + num2}`);
                return false;
            case 2:
                console.log(`A subtração de ${num1} - ${num2} é = ${num1 - num2}`);
                return false;
            case 3:
                console.log(`A multiplicação de ${num1} * ${num2} é = ${num1 * num2}`);
                return false;
            case 4:
                console.log(`A divisão entre ${num1} / ${num2} é = ${num1 / num2}`);
                return false;
        }
    }
}

function validaFormularioCaso2(){
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

function validaFormularioParaFaca1(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
    return false
}

function validaFormularioParaFaca2(){
    let num1 = parseInt(document.getElementById('num1').value);
    for(let i = 1; i <= 10; i++){
        console.log(`${num1} x ${i} = ${num1 * i}`)
    }
    return false;
}

function validaFormularioFacaEnquanto1(){
    let soma = 0
    let num
    do{
        num = parseInt(prompt("Digite um número [0 Para sair]: "))
        if(isNaN(num)){
            alert("Insira um número válido.")
        } else{
            soma += num
        }
    }while(num !== 0)
    console.log("A soma dos números inseridos é: " + soma)
    return false
}

function validaFormularioFacaEnquanto2(){
    let num1 = document.getElementById('num1').value;

    if (num1 === "" || isNaN(parseInt(num1))) {
        console.log("Os campos tem que estar preenchidos corretamente");
        document.getElementById('num1').focus();
        return false;
    } else {
        let count = 1
        do{
            console.log(`${num1} x ${count} = ${num1 * count}`)
            count++
        }while(count <= 10)
    }
    return false
}

function validaFormularioEnquantoFaca1(){
    let soma = 0
    let count = 0
    while(count < 3){
        count++
        let answer = parseInt(prompt(`Insira o ${count}° número:`))
        if(isNaN(answer)){
            alert("Insira um número válido.")
            soma = 0
            count = 0
        } else {
            soma += answer
        }
    }
    console.log(`Soma dos números inseridos: ${soma}`)
    return false;
}

function validaFormularioEnquantoFaca2(){
    let count = 0
    let maior = 0
    while(count < 3){
        count++
        let answer = parseInt(prompt(`Insira o ${count}° número:`))
        if(isNaN(answer)){
            alert("Insira um número válido.")
            count = 0
            maior = 0
        } else {
            if(answer > maior){
                maior = answer
            }
        }
    }
    console.log(`O maior número é: ${maior}`)
    return false;
}

function validaFormularioVetor1(){
    let notas = []
    let count = 0
    while(count < 3){
        count++
        let nota = parseFloat(prompt(`Insira a ${count}° nota:`))
        if(isNaN(nota) || nota < 0){
            count = 0
            alert("Insira um número válido.")
            notas = []
        } else {
            notas[count] = nota
        }
    }

    for(let i = 1; i < 4; i++){
        if(notas[i] >= 7.5){
            console.log(notas[i])
        }
    }
    return false;
}

function validaFormularioVetor2(){
    let numeros = []
    let count = 0
    while(count < 3){
        count++
        let numero = parseFloat(prompt(`Insira a ${count}° número:`))
        if(isNaN(numero)){
            count = 0
            alert("Insira um número válido.")
            numeros = []
        } else {
            numeros[count] = numero
        }
    }
    let maior = 0
    for(let i = 1; i < 4; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }
    console.log(`O maior número inserido foi: ${maior}`)
    return false;
}

function validaFormularioMatriz1(){
    let num1 = document.getElementById('num1').value;

    if (num1 === "" || !Number.isInteger(parseFloat(num1)) || isNaN(parseInt(num1))) {
        alert("Insira um número válido.");
        document.getElementById('num1').focus();
        return false;
    } else {
        console.log(" [ - ] Número inserido: " + parseInt(num1))
        console.log(" [ - ] Matriz após multiplicar os valores por " + num1 + ": ")
        for(let i = 0; i < 3; i++){
            console.log(matriz[i][0] * num1, matriz[i][1] * num1, matriz[i][2] * num1)
        }
        return false
    }
}

let matriz1Topo = `let matriz = [
    [],
    [],
    []
]
console.log(" [ - ] Matriz gerada:")
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Math.floor(Math.random() * 10) + 10
    }
    console.log(matriz[i][0], matriz[i][1], matriz[i][2])
}
console.log(" [ - ] Esperando o número ser inserido e enviado...")
`

function validaFormularioMatriz2(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;
    let dropdown = document.getElementById('options');
    let stop = false

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`num${i}`).value;
        if (element === "" || !Number.isInteger(parseFloat(element)) || isNaN(parseInt(element))) {
            stop = true
        }
    }

    if (stop == true || !dropdown.value) {
        alert(" [ - ] Preencha corretamente os campos.");
        document.getElementById('num1').focus();
        return false;
    } else {

    }
}

let topicAtual = ""
function changeTopic(topic){
    changeDefault()
    topicAtual = topic
    document.getElementById('title').innerText = `Estrutura ${topic}`
    document.getElementById('desc1').innerText = `${topicInfo[`${topic}1`]}`
    document.getElementById('desc2').innerText = `${topicInfo[`${topic}2`]}`
    showAtt(1)
}