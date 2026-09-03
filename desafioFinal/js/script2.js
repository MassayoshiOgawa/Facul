// ===== script2.js — REVAMP completo, do zero =====

const ATIVIDADES = {
    inicio: {
        titulo: "Atividades",
        tipo: "home",
        html: `
            <h1 class="title">Atividades</h1>
            <h1>Bem vindo ao Projeto Final de JS!</h1>
            <p>Este documento HTML servirá como repositório de atividades</p>
            <p>propostas de programação desenvolvidas em HTML, CSS e JavaScript</p>
            <p>servindo de base para futuras consultas quando houver necessidade</p>
            <p>ou também para pessoas que estejam em processo de aprendizagem.</p>
            <img src="imgs/banner.png" id="banner-img">
        `
    },
    Se: {
        titulo: "Estrutura Se",
        tipo: "info",
        html: `
            <h1 class="title">Estrutura Se</h1>
            <p>A estrutura condicional if (se) em JavaScript executa um bloco</p>
            <p>de código específico apenas quando uma condição estabelecida é verdadeira.</p>
        `
    },
    Caso: {
        titulo: "Estrutura Caso",
        tipo: "info",
        html: `
            <h1 class="title">Estrutura Caso</h1>
            <p>A estrutura switch (caso) permite executar diferentes blocos de código</p>
            <p>com base no valor de uma variável, comparando com diversos casos possíveis.</p>
        `
    },
    ParaFaca: {
        titulo: "Para Faça",
        tipo: "atividade",
        resumo: `<p>O loop for (para faça) é utilizado quando se deseja repetir um bloco</p><p>de código um número pré-determinado de vezes.</p>`,
        atividades: [
            {
                descricao: "Imprime no console os números de 1 a 10 usando o laço for.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Para Faça 1</title>
<style>
    .cadnumint{
        width: 300px;
        margin: 0px auto;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .cadnumint button{
        width: 30%;
        margin: 0 10%;
        background-color: #b1ccf5;
        font-weight: bold;
        font-size: 16px;
    }
    h2{
        text-align: center;
        margin-top: 0px;
        font-size: 50px;
    }
</style>
</head>
<body>
    <section>
        <h2>Estruturas for() atividade 1</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            for (let i = 1; i <= 10; i++) {
                console.log(i)
            }
            return false
        }
    <\/script>
</body>
</html>`
            },
            {
                descricao: "Recebe um número e mostra no console a tabuada dele (de 1 a 10) usando o laço for.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Para Faça 2</title>
<style>
    .cadnumint{
        width: 300px;
        margin: 0 auto;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .cadnumint input{
        margin: 5px 0;
        width: 100%;
        padding: 5px 0;
    }
    .cadnumint button{
        width: 30%;
        margin: 0 10%;
        background-color: #b1ccf5;
        font-weight: bold;
        font-size: 16px;
    }
    h2{
        text-align: center;
        margin-top: 0px;
        font-size: 50px;
    }
</style>
</head>
<body>
    <section>
        <h2>Atividade</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Informe o número:</label>
                    <input type="text" id="num1">
                    <button type="reset">limpar</button><button type="submit">Enviar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let num1 = parseInt(document.getElementById('num1').value);
            for (let i = 1; i <= 10; i++) {
                console.log(num1 + ' x ' + i + ' = ' + (num1 * i))
            }
            return false;
        }
    <\/script>
</body>
</html>`
            }
        ]
    },
    FacaEnquanto: {
        titulo: "Faça Enquanto",
        tipo: "atividade",
        resumo: `<p>O loop do-while (faça enquanto) executa o bloco de código primeiro</p><p>e depois verifica a condição, garantindo pelo menos uma execução.</p>`,
        atividades: [
            {
                descricao: "Solicita números até o usuário digitar 0 e mostra no console a soma de todos os valores, usando o laço do-while.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Faça Enquanto 1</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold;font-size:16px}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Somatoria de numeros</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <button type="submit">Comecar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let soma = 0
            let num
            do {
                num = parseInt(prompt("Digite um numero [0 Para sair]: "))
                if (isNaN(num)) {
                    alert("Insira um numero valido.")
                } else {
                    soma += num
                }
            } while (num !== 0)
            console.log("A soma dos numeros inseridos e: " + soma)
            return false
        }
    <\/script>
</body>
</html>`
            },
            {
                descricao: "Recebe um número e mostra a tabuada dele (de 1 a 10) no console, usando o laço do-while.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Faça Enquanto 2</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold}.cadnumint input{width:100%;padding:5px 0}.cadnumint button{width:30%;margin:0 10%;background:#b1ccf5;font-weight:bold}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Tabuada</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Informe o primeiro numero:</label>
                    <input type="text" id="num1">
                    <button type="reset">limpar</button><button type="submit">Enviar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let num1 = document.getElementById('num1').value;
            if (num1 === "" || isNaN(parseInt(num1))) {
                console.log("Os campos tem que estar preenchidos corretamente");
                document.getElementById('num1').focus();
                return false;
            } else {
                let count = 1
                do {
                    console.log(num1 + ' x ' + count + ' = ' + (num1 * count))
                    count++
                } while (count <= 10)
            }
            return false
        }
    <\/script>
</body>
</html>`
            }
        ]
    },
    EnquantoFaca: {
        titulo: "Enquanto Faça",
        tipo: "atividade",
        resumo: `<p>O loop while (enquanto faça) verifica a condição antes de cada execução</p><p>do bloco de código, podendo não executar nenhuma vez se for falsa.</p>`,
        atividades: [
            {
                descricao: "Pede 3 números e mostra no console a soma entre eles, usando o laço while.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Enquanto Faça 1</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Atividade While()</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Clique no botao para iniciar</label>
                    <button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let soma = 0
            let count = 0
            while (count < 3) {
                count++
                let answer = parseInt(prompt('Insira o ' + count + '° numero:'))
                if (isNaN(answer)) {
                    alert("Insira um numero valido.")
                    soma = 0
                    count = 0
                } else {
                    soma += answer
                }
            }
            console.log('Soma dos numeros inseridos: ' + soma)
            return false;
        }
    <\/script>
</body>
</html>`
            },
            {
                descricao: "Pede 3 números e mostra no console o maior valor digitado, usando o laço while.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Enquanto Faça 2</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Atividade While()</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Clique no botao para iniciar</label>
                    <button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let count = 0
            let maior = 0
            while (count < 3) {
                count++
                let answer = parseInt(prompt('Insira o ' + count + '° numero:'))
                if (isNaN(answer)) {
                    alert("Insira um numero valido.")
                    count = 0
                    maior = 0
                } else {
                    if (answer > maior) {
                        maior = answer
                    }
                }
            }
            console.log('O maior numero e: ' + maior)
            return false;
        }
    <\/script>
</body>
</html>`
            }
        ]
    },
    Vetor: {
        titulo: "Vetor",
        tipo: "atividade",
        resumo: `<p>Um vetor é uma estrutura de dados que armazena uma coleção</p><p>de elementos do mesmo tipo em posições consecutivas de memória.</p>`,
        atividades: [
            {
                descricao: "Guarda 3 notas em um vetor e mostra no console apenas as notas maiores ou iguais a 7.5.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vetor 1</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Atividade</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Clique no botao para iniciar</label>
                    <button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let notas = []
            let count = 0
            while (count < 3) {
                count++
                let nota = parseFloat(prompt('Insira a ' + count + '° nota:'))
                if (isNaN(nota) || nota < 0) {
                    count = 0
                    alert("Insira um numero valido.")
                    notas = []
                } else {
                    notas[count] = nota
                }
            }
            for (let i = 1; i < 4; i++) {
                if (notas[i] >= 7.5) {
                    console.log(notas[i])
                }
            }
            return false;
        }
    <\/script>
</body>
</html>`
            },
            {
                descricao: "Guarda 3 números em um vetor e mostra no console o maior valor inserido.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vetor 2</title><style>.cadnumint{width:300px;margin:0 auto;font-weight:bold}h2{text-align:center;font-size:50px}</style>
</head>
<body>
    <section>
        <h2>Atividade While()</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <label for="num1">Clique no botao para iniciar</label>
                    <button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        function validaFormulario() {
            let numeros = []
            let count = 0
            while (count < 3) {
                count++
                let numero = parseFloat(prompt('Insira o ' + count + '° numero:'))
                if (isNaN(numero)) {
                    count = 0
                    alert("Insira um numero valido.")
                    numeros = []
                } else {
                    numeros[count] = numero
                }
            }
            let maior = 0
            for (let i = 1; i < 4; i++) {
                if (numeros[i] > maior) {
                    maior = numeros[i]
                }
            }
            console.log('O maior numero inserido foi: ' + maior)
            return false;
        }
    <\/script>
</body>
</html>`
            }
        ]
    },
    Matriz: {
        titulo: "Matriz",
        tipo: "atividade",
        resumo: `<p>Uma matriz é uma estrutura de dados bidimensional que organiza</p><p>elementos em linhas e colunas, como uma tabela.</p>`,
        atividades: [
            {
                descricao: "Gera uma matriz 3x3 com valores aleatórios, recebe um número e mostra no console todos os elementos multiplicados por ele.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Matriz 1</title>
<style>
    .cadnumint{width:300px;margin:0 auto;font-weight:bold}
    .cadnumint input{width:100%;padding:5px 0}
    .cadnumint button{width:30%;margin:0 10%;background:#b1ccf5;font-weight:bold}
    h2{text-align:center;font-size:50px}
</style>
</head>
<body>
    <section>
        <h2>Atividade</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <p>Insira um numero no input para multiplicar uma matriz 3x3 inteira que contem numeros inteiros aleatorios. Olhe o console para ver o resultado!</p>
                    <label for="num1">Informe um numero inteiro:</label>
                    <input type="number" id="num1">
                    <button type="reset">limpar</button><button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        let matriz = [[], [], []]
        console.log(" [ - ] Matriz gerada:")
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matriz[i][j] = Math.floor(Math.random() * 10) + 10
            }
            console.log(matriz[i][0], matriz[i][1], matriz[i][2])
        }
        console.log(" [ - ] Esperando o numero ser inserido e enviado...")
        function validaFormulario() {
            let num1 = document.getElementById('num1').value;
            if (num1 === "" || !Number.isInteger(parseFloat(num1)) || isNaN(parseInt(num1))) {
                alert("Insira um numero valido.");
                document.getElementById('num1').focus();
                return false;
            } else {
                console.log(" [ - ] Numero inserido: " + parseInt(num1))
                console.log(" [ - ] Matriz apos multiplicar os valores por " + num1 + ": ")
                for (let i = 0; i < 3; i++) {
                    console.log(matriz[i][0] * num1, matriz[i][1] * num1, matriz[i][2] * num1)
                }
                return false
            }
        }
    <\/script>
</body>
</html>`
            },
            {
                descricao: "Preenche uma matriz 2x2, seleciona uma linha e mostra no console a soma dos elementos dela.",
                codigo: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Matriz 2</title>
<style>
    .cadnumint{width:340px;margin:0 auto;font-weight:bold}
    .cadnumint div{margin:2px 0;text-align:center}
    .cadnumint button{width:25%;margin:2%;background:#b1ccf5;font-weight:bold}
    h2{text-align:center;font-size:50px}
</style>
</head>
<body>
    <section>
        <h2>Atividade</h2>
        <font face="arial">
            <form action="#" method="get" onsubmit="return validaFormulario()">
                <fieldset class="cadnumint">
                    <legend>Entrada de dados</legend>
                    <p>Aperte o botao Iniciar para preencher uma matriz 2x2 para depois realizar a soma dos elementos de uma linha.</p>
                    <div><label>[1,1]</label><input type="text" id="m11"></div>
                    <div><label>[1,2]</label><input type="text" id="m12"></div>
                    <div><label>[2,1]</label><input type="text" id="m21"></div>
                    <div><label>[2,2]</label><input type="text" id="m22"></div>
                    <p>Multiplicar elementos da:</p>
                    <select id="linha">
                        <option value="">Selecione</option>
                        <option value="1">Linha 1</option>
                        <option value="2">Linha 2</option>
                    </select>
                    <br>
                    <button type="reset">limpar</button><button type="submit">Iniciar</button>
                </fieldset>
            </form>
        </font>
    </section>
    <script>
        console.log(" [ - ] Esperando os dados serem enviados...")
        function validaFormulario() {
            let a = [document.getElementById('m11').value,
                     document.getElementById('m12').value,
                     document.getElementById('m21').value,
                     document.getElementById('m22').value];
            let linha = document.getElementById('linha').value;
            for (let i = 0; i < 4; i++) {
                if (a[i] === "" || isNaN(parseInt(a[i]))) {
                    alert(" [ - ] Preencha corretamente os campos.");
                    return false;
                }
            }
            if (!linha) { alert("Selecione a linha."); return false; }
            if (linha === "1") {
                console.log('Soma da 1a linha: ' + (parseInt(a[0]) + parseInt(a[1])));
            } else {
                console.log('Soma da 2a linha: ' + (parseInt(a[2]) + parseInt(a[3])));
            }
            return false;
        }
    <\/script>
</body>
</html>`
            }
        ]
    },
    Operacoes: {
        titulo: "Operações",
        tipo: "atividade",
        resumo: `<p>Operações em vetores incluem tarefas como somar elementos,</p><p>calcular a média, contar ocorrências ou combinar vetores.</p>`,
        atividades: [
            {
                descricao: "Descrição da primeira atividade de operações em vetores.",
                codigo: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Operações 1</title></head>
<body>
    <h2>Operações - Atividade 1</h2>
    <p>Escreva aqui o código da atividade.</p>
</body>
</html>`
            },
            {
                descricao: "Descrição da segunda atividade de operações em vetores.",
                codigo: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Operações 2</title></head>
<body>
    <h2>Operações - Atividade 2</h2>
    <p>Escreva aqui o código da atividade.</p>
</body>
</html>`
            }
        ]
    }
};

const MENU = [
    { secao: "Estruturas Condicionais", itens: [["Se", "Se"], ["Caso", "Caso"]] },
    { secao: "Estruturas de Repetição", itens: [["ParaFaca", "Para Faça"], ["FacaEnquanto", "Faça Enquanto"], ["EnquantoFaca", "Enquanto Faça"]] },
    { secao: "Vetores", itens: [["Vetor", "Vetor"], ["Matriz", "Matriz"], ["Operacoes", "Operações"]] }
];

let paginaAtual = "inicio";
let atividadeSelecionada = 1;
let areaAtividade = null;

function montarMenu() {
    const nav = document.getElementById("menuNavegacao");
    MENU.forEach(bloco => {
        const h2 = document.createElement("h2");
        h2.textContent = bloco.secao;
        nav.appendChild(h2);
        bloco.itens.forEach(([chave, rotulo]) => {
            const h3 = document.createElement("h3");
            h3.className = "click";
            h3.textContent = rotulo;
            h3.addEventListener("click", () => switchPage(chave));
            nav.appendChild(h3);
        });
    });
}

function renderizarAtividade(pagina) {
    const dados = ATIVIDADES[pagina];
    const destino = document.getElementById("areaConteudo");
    destino.innerHTML = "";

    if (!dados) {
        destino.innerHTML = '<p>Página não encontrada.</p>';
        return;
    }

    if (dados.tipo === "home" || dados.tipo === "info") {
        destino.innerHTML = dados.html;
        return;
    }

    if (dados.tipo === "atividade") {
        const container = document.createElement("div");
        container.className = "pageInsideContainer";

        const esquerda = document.createElement("div");
        esquerda.className = "pageInsideBoxLeft";
        const tituloAtiv = document.createElement("h1");
        tituloAtiv.textContent = "Atividades";
        esquerda.appendChild(tituloAtiv);
        dados.atividades.forEach((_, i) => {
            const btn = document.createElement("h2");
            btn.textContent = "Att " + (i + 1);
            btn.addEventListener("click", () => selecionarAtividade(i + 1));
            esquerda.appendChild(btn);
        });

        const direita = document.createElement("div");
        direita.className = "pageInsideBoxRight";

        const desc = document.createElement("div");
        desc.className = "desc";
        desc.innerHTML = '<h1>Descrição</h1><p id="textoDescricao">Desc</p>';

        const code = document.createElement("div");
        code.className = "codeArea";
        code.id = "areaCodigo";

        direita.appendChild(desc);
        direita.appendChild(code);

        container.appendChild(esquerda);
        container.appendChild(direita);

        destino.appendChild(tituloAtivPeloTitulo(pagina, dados));
        destino.appendChild(container);

        areaAtividade = { dados, code, desc };
        atividadeSelecionada = 1;
        selecionarAtividade(1);
        return;
    }
}

function tituloAtivPeloTitulo(pagina, dados) {
    const topo = document.createElement("div");
    topo.id = "topoAtividade";
    const h = document.createElement("h1");
    h.className = "title";
    h.textContent = dados.titulo;
    h.style.fontSize = "60px";
    h.style.marginBottom = "8px";
    topo.appendChild(h);
    const divResumo = document.createElement("div");
    divResumo.innerHTML = dados.resumo;
    divResumo.style.fontSize = "13px";
    topo.appendChild(divResumo);
    return topo;
}

function selecionarAtividade(n) {
    if (!areaAtividade) return;
    const { dados, code, desc } = areaAtividade;
    const atv = dados.atividades[n - 1];
    if (!atv) return;
    atividadeSelecionada = n;

    const pDesc = desc.querySelector("#textoDescricao");
    if (pDesc) pDesc.textContent = atv.descricao;

    code.innerHTML = "";
    const caixa = document.createElement("div");
    caixa.style.display = "flex";
    caixa.style.flexDirection = "column";
    caixa.style.alignItems = "flex-start";
    caixa.style.height = "100%";

    const textarea = document.createElement("textarea");
    textarea.name = "codigoFonte";
    textarea.cols = 70;
    textarea.rows = 20;
    textarea.style.height = "260px";
    textarea.style.margin = "15px 15px 0 0";
    textarea.style.flexGrow = "1";
    textarea.value = atv.codigo.trim() + "\n";
    caixa.appendChild(textarea);

    const botao = document.createElement("input");
    botao.type = "button";
    botao.value = "Testar a página";
    botao.style.margin = "8px 15px 0 0";
    botao.addEventListener("click", function (event) {
        event.preventDefault();
        testarPagina(textarea.value);
    });
    caixa.appendChild(botao);

    code.appendChild(caixa);

    document.querySelectorAll(".pageInsideBoxLeft > h2").forEach(h => {
        h.style.border = "2px solid " + (h.textContent === "Att " + n ? "yellow" : "transparent");
    });
}

function testarPagina(codigoHtml) {
    if (!codigoHtml || !codigoHtml.trim()) {
        alert("A textarea está vazia.");
        return;
    }
    const win = window.open("", "_blank");
    if (!win) {
        alert("Habilite pop-ups para testar a página.");
        return;
    }
    win.document.open();
    win.document.write(codigoHtml);
    win.document.close();
}

function switchPage(pagina) {
    paginaAtual = pagina;
    const dados = ATIVIDADES[pagina];
    if (!dados) return;
    document.getElementById("topoAtividade")?.remove();
    renderizarAtividade(pagina);
}

function iniciar() {
    montarMenu();
    renderizarAtividade("inicio");
    try { localStorage.setItem("currPage", "revamp") } catch (e) { }
}

iniciar();