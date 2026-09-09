function validaFormulario(){
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