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

localStorage.setItem('currPage', 'inicio')

Object.values(pages).forEach(element => {
    if(element) element.style.display = "none"
});

if(pages["inicio"]) pages["inicio"].style.display = "block"

document.querySelectorAll('[id$="Att2"]').forEach(el => {
    el.style.display = "none"
});

function switchPage(page){
    Object.values(pages).forEach(element => {
        if(element) element.style.display = "none"
    });
    if(pages[page]) pages[page].style.display = "block"
    localStorage.setItem('currPage', page)
}

function showAtt(AttId){
    let currPage = localStorage.getItem('currPage')
    let att1 = document.getElementById(`${currPage}Att1`)
    let att2 = document.getElementById(`${currPage}Att2`)
    if(AttId == 1){
        if(att1) att1.style.display = "block"
        if(att2) att2.style.display = "none"
    }
    if(AttId == 2){
        if(att1) att1.style.display = "none"
        if(att2) att2.style.display = "block"
    }
    let page = pages[currPage]
    if(page) page.style.overflow = "visible"
}
