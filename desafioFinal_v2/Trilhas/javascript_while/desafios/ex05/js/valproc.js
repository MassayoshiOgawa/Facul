function validaFormulario() {
    let verify = false
    while(true){
        let msg = "Digite a opção desejada: "
        if(verify == true){
            verify = false
            msg = "Insira um número válido. Digite a opção desejada: "
        }
        let num1 = prompt(msg)
        if (num1 === "" || isNaN(parseInt(num1))) {
            verify = true
        } else {
            console.log("Número inserido: " + num1)
            if(num1 >= 0 && num1 <= 3){
                if(num1 == 0){
                    console.log("Encerrando sistema...")
                    break
                }
                console.log("Opção escolhida: " + num1)
                break
            } else {
                verify = true
            }
        }
    }
    return false
}