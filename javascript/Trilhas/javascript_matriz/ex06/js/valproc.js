let clientes = [];
let matriz = [];
let qtdCompras = [];
let mediaCompras = [];
let cadastrado = false;

console.log(" [ - ] Esperando os dados serem enviados...")

function validaFormulario() {
    let nome = document.getElementById('num1').value;
    let dropdown = document.getElementById('options');

    if (!dropdown.value) {
        alert(" [ - ] Selecione uma opção do menu.");
        return false;
    }
    if (dropdown.value == "op1" && nome === "") {
        alert(" [ - ] Informe o nome do cliente.");
        document.getElementById('num1').focus();
        return false;
    }

    if (dropdown.value == "op3") {
        console.log(" [ - ] Cadastro dos clientes e das compras dos 3 últimos meses...")

        for (let i = 0; i < 3; i++) {
            let keep = false
            while (keep == false) {
                let valor = prompt("Digite o nome do cliente [" + (i + 1) + "]:")
                if (valor === "") {
                    alert("Insira um nome válido.")
                } else {
                    keep = true
                    clientes[i] = valor
                }
            }

            matriz[i] = []
            for (let j = 0; j < 3; j++) {
                let keep = false
                while (keep == false) {
                    let valor = prompt("Digite a compra de " + clientes[i] + " no mês [" + (j + 1) + "] (0 se não houve compra):")
                    if (valor === "" || isNaN(parseFloat(valor))) {
                        alert("Insira um valor válido.")
                    } else {
                        keep = true
                        matriz[i][j] = Number(valor)
                    }
                    console.log("Compra inserida de " + clientes[i] + " no mês [" + (j + 1) + "]: R$ " + matriz[i][j])
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            let soma = 0
            let qtd = 0
            for (let j = 0; j < 3; j++) {
                if (matriz[i][j] != 0) {
                    qtd++
                    soma = soma + matriz[i][j]
                }
            }
            qtdCompras[i] = qtd
            if (qtd == 0) {
                mediaCompras[i] = 0
            } else {
                mediaCompras[i] = Math.round((soma / qtd) * 100) / 100
            }
        }
        cadastrado = true
        console.log(" [ - ] Clientes cadastrados com sucesso! Escolha uma opção do menu para consultar.")
    } else {
        if (cadastrado == false) {
            alert(" [ - ] Nenhum cliente cadastrado. Use a opção 'Adicionar clientes' primeiro.");
            return false;
        }

        if (dropdown.value == "op1") {
            let indice = -1
            for (let i = 0; i < 3; i++) {
                if (clientes[i] == nome) {
                    indice = i
                }
            }
            if (indice == -1) {
                alert(" [ - ] Cliente não encontrado.")
            } else {
                console.log(" [ - ] Cliente: " + clientes[indice])
                console.log(" [ - ] Mês 1: R$ " + matriz[indice][0] + " | Mês 2: R$ " + matriz[indice][1] + " | Mês 3: R$ " + matriz[indice][2])
                console.log(" [ - ] Quantidade de compras: " + qtdCompras[indice])
                console.log(" [ - ] Média das compras: R$ " + mediaCompras[indice])
            }
        } else {
            for (let i = 0; i < 3; i++) {
                console.log(" [ - ] Cliente: " + clientes[i])
                console.log(" [ - ] Mês 1: R$ " + matriz[i][0] + " | Mês 2: R$ " + matriz[i][1] + " | Mês 3: R$ " + matriz[i][2])
                console.log(" [ - ] Quantidade de compras: " + qtdCompras[i])
                console.log(" [ - ] Média das compras: R$ " + mediaCompras[i])
            }
        }
    }
    return false
}
