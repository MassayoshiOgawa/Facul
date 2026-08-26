function validaFormulario() {
    let verify = false
    while(true){
        let msg = "Insira o nome de usuário: "
        if(verify == true){
            verify = false
            msg = "Usuário incorreto. Insira o nome de usuário: "
            console.log("Usuário incorreto. Insira o nome correto do usuário.")
        }
        let answer = prompt(msg)
        console.log("Usuário inserido: " + answer)
        if(answer == "admin"){
            console.log("Usuário correto inserido.")
            break
        } else{
            verify = true
        }
    }
    return false
}