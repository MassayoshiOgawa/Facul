function validaFormulario() {
    let num1 = parseInt(document.getElementById('num1').value);
    let float = parseFloat(document.getElementById('num1').value);
    if(isNaN(num1)){
        alert("Insira um valor correto no campo de input.")
        return false
    } else if(float - num1 > 0) {
        alert("Insira um número inteiro, não real.")
        return false
    }
    console.log("Realizando soma dos números...")
    console.log("Número inserido: " + num1)
    let soma = 1
    let string = ""
    for(let i = 1; i <= num1; i++){
        soma = soma * i
        if(i == num1){
            string += i + " = "
            break
        }
        string += i + " * "
    }
    console.log(string + soma)
    console.log("O fatorial de " + num1 + " é " + soma)
    return false
}