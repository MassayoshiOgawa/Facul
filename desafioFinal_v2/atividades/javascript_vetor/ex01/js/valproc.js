let contador = 0
let aptos = []
let nomes = []
let moradores = []
let rendas = []

function validaFormulario() {
    let nome = document.getElementById('num1').value
    let apto = document.getElementById('num2').value
    let morad = document.getElementById('op').value
    let renda = document.getElementById('num3').value

    if (nome === "" || apto === "" || morad === "" || renda === "") {
        alert("Preencha todos os campos!")
        return false
    }

    morad = parseInt(morad)
    renda = parseFloat(renda)

    if (isNaN(morad) || morad <= 0 || isNaN(renda) || renda <= 0) {
        alert("Valores inválidos!")
        return false
    }

    for (let i = 0; i < contador; i++) {
        if (aptos[i] == apto) {
            alert("Apartamento já cadastrado!")
            return false
        }
    }

    for (let i = 0; i < contador; i++) {
        if (nomes[i] == nome) {
            alert("Esse nome já foi registrado!")
            return false
        }
    }

    aptos[contador] = apto
    nomes[contador] = nome
    moradores[contador] = morad
    rendas[contador] = renda
    contador++

    console.log(`Cadastrado: Apt ${apto} | ${nome} | ${morad} moradores | R$ ${renda.toFixed(2)}`)

    if (contador == 4) {
        alert("4 famílias cadastradas! Agora pesquise por apartamento.")
        pesquisar()
    }

    return false
}

function pesquisar() {
    let opcao
    do {
        let apto = prompt("Informe o apartamento:")
        if (apto === null) break

        let achou = false
        for (let i = 0; i < aptos.length; i++) {
            if (aptos[i] == apto) {
                let perCapita = rendas[i] / moradores[i]
                let msg = `Apartamento: ${aptos[i]}\nSobrenome: ${nomes[i]}\nRenda total: R$ ${rendas[i].toFixed(2)}\nRenda per capita: R$ ${perCapita.toFixed(2)}`
                alert(msg)
                console.log(msg)
                achou = true
                break
            }
        }

        if (!achou) {
            alert("Apartamento não encontrado!")
        }

        opcao = confirm("Pesquisar outro apartamento?")
    } while (opcao)

    alert("Programa encerrado.")
}
