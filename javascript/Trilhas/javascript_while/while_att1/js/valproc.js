function validaFormulario(){
    let soma = 0
    let count = 0
    while(count < 3){
        count++
        let answer = parseInt(prompt(`Insira o ${count}° número:`))
        if(isNaN(answer)){
            alert("Insira um número válido.")
            soma = 0
            count = 0
        } else {
            soma += answer
        }
    }
    console.log(`Soma dos números inseridos: ${soma}`)
    return false;
}