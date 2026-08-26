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

Object.values(pages).forEach(element => {
    element.style.display = "none"
});

pages["inicio"].style.display = "block"

function switchPage(page){
    Object.values(pages).forEach(element => {
        element.style.display = "none"
    });
    pages[page].style.display = "block"
}
