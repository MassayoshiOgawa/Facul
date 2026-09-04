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
        if(dropdown.value == "op1"){
            console.log(` [ - ] A soma da primeira linha da matriz é ${parseInt(num1)} + ${parseInt(num2)} = ${parseInt(num1) + parseInt(num2)}`)
        } else {
            console.log(` [ - ] A soma da segunda linha da matriz é ${parseInt(num3)} + ${parseInt(num4)} = ${parseInt(num3) + parseInt(num4)}`)
        }
        return false
    }
}

let attInfo = {
    Se1: {
        descricao: `Faça um algoritmo que leia a idade de uma pessoa e diga se ela é maior ou menor de 18 anos.`,
        titulo: `Estrutura Se (if) - Atividade 1`,
        formulario: `<form name="frmtstidade" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadidade">
        <legend>Entrada de dados</legend>
        <br>
        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="numidade">
        <br>
        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioSe1.toString().replace("validaFormularioSe1", "validaFormulario")
    },
    Se2: {
        descricao: `Faça um algoritmo que leia um número e informe se ele é par ou ímpar.`,
        titulo: `Estrutura Se (if) - Atividade 2`,
        formulario: `<form name="frmtstnum" method="get" action="#" onsubmit="return validaFormulario()">
    <fieldset class="cadnum">
        <legend>Entrada de dados</legend>
        <label>Número:</label>
        <input type="number" id="numero" name="numNumero">
        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioSe2.toString().replace("validaFormularioSe2", "validaFormulario")
    },
    Caso1: {
        descricao: `Faça um algoritmo que leia dois números e a operação desejada, executando-a com o comando switch (caso).`,
        titulo: `Estrutura Caso (switch) - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Informe o primeiro número:</label>
        <input type="text" name="num1" id="num1">
        <br>
        <label for="num2">Informe o segundo número:</label>
        <input type="text" name="num2" id="num2">
        <br>
        <label for="op">Informe a operação correspondente:</label>
        <br>
        <p>[1] Adição</p>
        <p>[2] Subtração</p>
        <p>[3] Multiplicação</p>
        <p>[4] Divisão</p>
        <input type="text" name="op" id="op">
        <br><br>
        <button type="reset">limpar</button><button type="submit">Enviar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioCaso1.toString().replace("validaFormularioCaso1", "validaFormulario")
    },
    Caso2: {
        descricao: `Faça um algoritmo que leia um número inteiro de 1 a 7 e informe o dia da semana correspondente, usando switch (caso).`,
        titulo: `Estrutura Caso (switch) - Atividade 2`,
        formulario: `<form name="frmnumdia" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadiasem">
        <legend>Entrada de dados</legend>
        <br>
        <label for="numdia">Informe um número inteiro (1 a 7):</label>
        <input type="text" name="txtnumdia" id="numdia">
        <br>
        <br>
        <button type="reset">Limpar</button>
        <button type="submit">Enviar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioCaso2.toString().replace("validaFormularioCaso2", "validaFormulario")
    },
    ParaFaca1: {
        descricao: `Faça um algoritmo que utilize o loop for (para faça) para exibir os números de 1 a 10 no console.`,
        titulo: `Estrutura Para Faça (for) - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <button type="submit">Enviar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioParaFaca1.toString().replace("validaFormularioParaFaca1", "validaFormulario")
    },
    ParaFaca2: {
        descricao: `Faça um algoritmo que leia um número e exiba a tabuada dele de 1 a 10 usando o loop for (para faça).`,
        titulo: `Estrutura Para Faça (for) - Atividade 2`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Informe o número:</label>
        <input type="text" name="num1" id="num1">
        <button type="reset">limpar</button><button type="submit">Enviar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioParaFaca2.toString().replace("validaFormularioParaFaca2", "validaFormulario")
    },
    FacaEnquanto1: {
        descricao: `Faça um algoritmo que some números informados pelo usuário até que ele digite 0, usando do-while (faça enquanto).`,
        titulo: `Estrutura Faça Enquanto (do-while) - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <button type="submit">Começar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioFacaEnquanto1.toString().replace("validaFormularioFacaEnquanto1", "validaFormulario")
    },
    FacaEnquanto2: {
        descricao: `Faça um algoritmo que leia um número e exiba a tabuada dele de 1 a 10 usando do-while (faça enquanto).`,
        titulo: `Estrutura Faça Enquanto (do-while) - Atividade 2`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Informe o primeiro número:</label>
        <input type="text" name="num1" id="num1">
        <button type="reset">limpar</button><button type="submit">Enviar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioFacaEnquanto2.toString().replace("validaFormularioFacaEnquanto2", "validaFormulario")
    },
    EnquantoFaca1: {
        descricao: `Faça um algoritmo que leia 3 números e exiba a soma deles, usando while (enquanto faça).`,
        titulo: `Estrutura Enquanto Faça (while) - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Clique no botão para iniciar</label>
        <button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioEnquantoFaca1.toString().replace("validaFormularioEnquantoFaca1", "validaFormulario")
    },
    EnquantoFaca2: {
        descricao: `Faça um algoritmo que leia 3 números e exiba o maior deles, usando while (enquanto faça).`,
        titulo: `Estrutura Enquanto Faça (while) - Atividade 2`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Clique no botão para iniciar</label>
        <button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioEnquantoFaca2.toString().replace("validaFormularioEnquantoFaca2", "validaFormulario")
    },
    Vetor1: {
        descricao: `Faça um algoritmo que leia 3 notas, guarde-as em um vetor e exiba as notas maiores ou iguais a 7.5.`,
        titulo: `Estrutura Vetor - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Clique no botão para iniciar</label>
        <button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioVetor1.toString().replace("validaFormularioVetor1", "validaFormulario")
    },
    Vetor2: {
        descricao: `Faça um algoritmo que leia 3 números, guarde-os em um vetor e exiba o maior deles.`,
        titulo: `Estrutura Vetor - Atividade 2`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <label for="num1">Clique no botão para iniciar</label>
        <button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioVetor2.toString().replace("validaFormularioVetor2", "validaFormulario")
    },
    Matriz1: {
        descricao: `Faça um algoritmo que gere uma matriz 3x3 aleatória e multiplique todos os elementos por um número informado.`,
        titulo: `Estrutura Matriz - Atividade 1`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <p>Insira um número no input para multiplicar uma matriz 3x3 inteira que contém números inteiros aleatórios. Olhe o console para ver o resultado!</p>
        <br>
        <label for="num1">Informe um número inteiro:</label>
        <input type="number" name="num1" id="num1">
        <button type="reset">limpar</button><button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: matriz1Topo + validaFormularioMatriz1.toString().replace("validaFormularioMatriz1", "validaFormulario")
    },
    Matriz2: {
        descricao: `Faça um algoritmo que preencha uma matriz 2x2 e calcule a soma dos elementos da linha escolhida.`,
        titulo: `Estrutura Matriz - Atividade 2`,
        formulario: `<form name="frmnumint" action="#" method="get" onsubmit="return validaFormulario()">
    <fieldset class="cadnumint">
        <legend>Entrada de dados</legend>
        <br>
        <p>Aperte o botão Iniciar para preencher uma matriz 2x2 para depois realizar a soma dos elementos de uma linha.</p>
        <br>
        <div style="text-align: center;">
            <label for="">Insira os valores da matriz respectivamente:</label>
            <br>
            <label for="num1">[ 1, 1 ]</label>
            <input type="text" name="num1" id="num1">
            <br>
            <label for="num2">[ 1, 2 ]</label>
            <input type="text" name="num2" id="num2">
            <br>
            <label for="num3">[ 2, 1 ]</label>
            <input type="text" name="num3" id="num3">
            <br>
            <label for="num4">[ 2, 2 ]</label>
            <input type="text" name="num4" id="num4">
        </div>
        <br>
        <div style="display: flex; justify-content: center; align-items: center; gap: 5px;">
            <p>Calcular a soma da:</p>
            <select name="options" id="options">
                <option value="">Selecione</option>
                <option value="op1">Linha 1</option>
                <option value="op2">Linha 2</option>
            </select>
        </div>
        <br>
        <button type="reset">limpar</button><button type="submit">Iniciar</button>
    </fieldset>
</form>`,
        codigo: validaFormularioMatriz2.toString().replace("validaFormularioMatriz2", "validaFormulario")
    }
}

function montaPagina(att){
    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${att.titulo}</title>
    <style>
        section{
            margin-top: 0px auto;
        }
        fieldset{
            width: 300px;
            margin: 0px auto;
            font-weight: bold;
            margin-bottom: 10px;
        }
        fieldset input, fieldset select{
            margin: 5px 0px;
            width: 100%;
            padding: 5px 0;
        }
        fieldset button{
            width: 30%;
            font-weight: bold;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
        }
        label{
            float: left;
        }
        h2{
            text-align: center;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 50px;
        }
    </style>
</head>
<body>
    <section>
        <h2>${att.titulo}</h2>
${att.formulario}
    </section>
    <script>
${att.codigo}
    </script>
</body>
</html>`
}

function showAtt(num){
    let att = attInfo[`${topicAtual}${num}`]
    if(!att) {
        return
    } 
    document.getElementById('desc').innerText = att.descricao
    document.getElementById('textArea').value = montaPagina(att)
}

function changeTopic(topic){
    changeDefault()
    topicAtual = topic
    document.getElementById('title').innerText = `Estrutura ${topic}`
    document.getElementById('desc1').innerText = `${topicInfo[`${topic}1`]}`
    document.getElementById('desc2').innerText = `${topicInfo[`${topic}2`]}`
    showAtt(1)
}