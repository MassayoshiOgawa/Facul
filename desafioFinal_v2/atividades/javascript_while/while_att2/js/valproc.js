function validaFormulario(){
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