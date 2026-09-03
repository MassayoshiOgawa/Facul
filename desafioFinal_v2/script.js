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

let attInfo = [
    {att: "Se1", descricao: `Testes e testes 1.`, codigo: `
        
    `}, 
    {att: "Se2", descricao: `Testes e testes 2.`, codigo: `

    `},
]

function showAtt(num){
    if(num == 1){

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
    document.getElementById('textArea').innerText = ``
}