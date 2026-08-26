function validaFormulario() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num1').value;
    let op = document.getElementById('op').value;

    if (num1 === "" || num2 === "" || op === "") {
        console.log("Os campos tem que estar preenchidos corretamente");
        document.getElementById('num1').focus();
        return false;
    } else {
        num1 = parseInt(document.getElementById('num1').value);
        num2 = parseInt(document.getElementById('num2').value);
        op = parseInt(document.getElementById('op').value);
        switch(true){
            case (op == 1):
                console.log(`A soma de ${num1} + ${num2} é = ${num1+num2}`);
                return false;
            case (op == 2):
                console.log(`A subtração de ${num1} - ${num2} é = ${num1-num2}`);
                return false;
            case (op == 3):
                console.log(`A multiplicação de ${num1} * ${num2} é = ${num1*num2}`);
                return false;
            case (op == 4):
                if(num2 == 0){
                    alert("Não é possível dividir por zero.")
                    return false
                }
                console.log(`A divisão entre ${num1} / ${num2} é = ${num1/num2}`);
                return false;
            default:
                alert("Opção inválida")
                return false
        }
    }
}