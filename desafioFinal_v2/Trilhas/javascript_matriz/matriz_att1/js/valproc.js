let matriz = [
    [], /*1*/
    [], /*2*/
    []  /*3*/
]
console.log(" [ - ] Matriz gerada:")
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Math.floor(Math.random() * 10) + 10
    }
    console.log(matriz[i][0], matriz[i][1], matriz[i][2])
}
console.log(" [ - ] Esperando o número ser inserido e enviado...")

function validaFormulario() {
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