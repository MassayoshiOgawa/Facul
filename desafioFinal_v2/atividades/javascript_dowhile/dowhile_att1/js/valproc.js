function validaFormulario() {
    let soma = 0
    let num 
    do{
        num = parseInt(prompt("Digite um número [0 Para sair]: "))
        if(isNaN(num)){
            alert("Insira um número válido.")
        } else{
            soma += num
        }
    }while(num !== 0)
    console.log("A soma dos números inseridos é: " + soma)
    return false
}