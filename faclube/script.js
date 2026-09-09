function validarForumalario(){
    let nome = document.getElementById('nome').value
    let sexo = document.querySelector('input[name="sexo"]:checked')
    let datadenascimento = document.getElementById('datenasc').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telf').value
    let participar = document.querySelector('input[name="participar"]').checked

    if(nome === "" || !sexo || datadenascimento === "" || email === "" || telefone === ""){
        alert("Insira todos os campos.")
        return false
    }

    let expRegDataNasc = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/)
    let expRegEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    let expRegTelefone = new RegExp(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/)

    if(!expRegDataNasc.test(datadenascimento)){
        alert("Data de nascimento inválida. Use o formato 00/00/0000.")
        return false
    }

    let partes = datadenascimento.split("/")
    let dataNasc = new Date(partes[2], partes[1] - 1, partes[0])
    if(dataNasc > new Date()){
        alert("Data de nascimento não pode ser no futuro.")
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
    if(!participar){
        alert("Confirme que deseja participar do fã-clube.")
        return false
    }
}