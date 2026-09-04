function validaFormulario(){
    
    let numero
    do{
        numero = prompt(`Insira o valor desejado para saque: `)
        if(Number.isInteger(parseInt(numero)) == true && !isNaN(numero)) {
            if(numero > 0){
                break
            }
        } else {
            console.log("Valor inválido! O valor " + numero + " não é um número válido.")
        }
    }while(true)
        
    console.log("Saque autorizado. Dinheiro a sacar: " + numero)
    return false
}