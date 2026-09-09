function validarForumalario(){
    let nome = document.getElementById('nome').value
    let sexo = document.querySelector('input[name="sexo"]:checked')
    let datadenascimento = document.getElementById('datenasc').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telf').value

    if(nome === "" || !sexo || datadenascimento === "" || email === "" || telefone === "" || datadenascimento > new Date()){
        alert("Insira todos os campos.")
        return false
    }

    let expRegDataNasc = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
    let expRegEmail = new RegExp(/^\w+@\w+\.\w+$/)
    let expRegTelefone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$")
    if(!expRegDataNasc.test(datadenascimento)){
        alert("Data de nascimento inválida. Use o formato 00/00/0000.")
        return false
    }
    if(!expRegEmail.test(email)){
        alert("Email inválido.")
        return false
    }
    if(!expRegTelefone.test(telefone)){
        alert("Telefone inválido.")
        return false
    }

}