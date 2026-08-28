let pages = {
    "inicio": document.getElementById("inicio"),
    "Se": document.getElementById("Se"),
    "Caso": document.getElementById("Caso"),
    "ParaFaca": document.getElementById("ParaFaca"),
    "FacaEnquanto": document.getElementById("FacaEnquanto"),
    "EnquantoFaca": document.getElementById("EnquantoFaca"),
    "Vetor": document.getElementById("Vetor"),
    "Matriz": document.getElementById("Matriz")
}

let currentPage = "inicio"
try { localStorage.setItem('currPage', currentPage) } catch (e) { }

Object.values(pages).forEach(element => {
    if(element) element.style.display = "none"
});

if(pages["inicio"]) pages["inicio"].style.display = "block"

document.querySelectorAll('[id$="Att2"]').forEach(el => {
    el.style.display = "none"
});

const descricao = {
    ParaFaca: [
        "Imprime no console os números de 1 a 10 usando o laço for.",
        "Recebe um número e mostra no console a tabuada dele (de 1 a 10) usando o laço for."
    ],
    FacaEnquanto: [
        "Solicita números até o usuário digitar 0 e mostra no console a soma de todos os valores, usando o laço do-while.",
        "Recebe um número e mostra a tabuada dele (de 1 a 10) no console, usando o laço do-while."
    ],
    EnquantoFaca: [
        "Pede 3 números e mostra no console a soma entre eles, usando o laço while.",
        "Pede 3 números e mostra no console o maior valor digitado, usando o laço while."
    ],
    Vetor: [
        "Guarda 3 notas em um vetor e mostra no console apenas as notas maiores ou iguais a 7.5.",
        "Guarda 3 números em um vetor e mostra no console o maior valor inserido."
    ],
    Matriz: [
        "Gera uma matriz 3x3 com valores aleatórios, recebe um número e mostra no console todos os elementos multiplicados por ele.",
        "Preenche uma matriz 2x2, seleciona uma linha e mostra no console a soma dos elementos dela."
    ]
}

function switchPage(page){
    Object.values(pages).forEach(element => {
        if(element) element.style.display = "none"
    });
    if(pages[page]) pages[page].style.display = "block"
    currentPage = page
    try { localStorage.setItem('currPage', page) } catch (e) { }
}

function showAtt(AttId){
    let page = pages[currentPage]
    if(!page || page.style.display !== "block"){
        for(let key in pages){
            let el = pages[key]
            if(el && el.style.display === "block" && el.querySelector('.pageInsideBoxLeft')){
                page = el
                currentPage = key
                break
            }
        }
    }
    let att1 = document.getElementById(`${currentPage}Att1`)
    let att2 = document.getElementById(`${currentPage}Att2`)
    if(AttId == 1){
        if(att1) att1.style.display = "block"
        if(att2) att2.style.display = "none"
    }
    if(AttId == 2){
        if(att1) att1.style.display = "none"
        if(att2) att2.style.display = "block"
    }
    let desc = document.getElementById(`desc${currentPage}`)
    if(desc && descricao[currentPage]){
        desc.textContent = descricao[currentPage][AttId - 1]
    }
    if(page) page.style.overflow = "visible"
}