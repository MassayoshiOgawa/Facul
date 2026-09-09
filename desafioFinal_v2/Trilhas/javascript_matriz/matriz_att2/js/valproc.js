console.log(" [ - ] Esperando os dados serem enviados...")

function validaFormulario() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;
    let dropdown = document.getElementById('options');
    let stop = false

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`num${i}`).value;
        if (element === "" || !Number.isInteger(parseFloat(element)) || isNaN(parseInt(element))) {
            stop = true
        }
    }

    if (stop == true || !dropdown.value) {
        alert(" [ - ] Preencha corretamente os campos.");
        document.getElementById('num1').focus();
        return false;
    } else {
        if(dropdown.value == "op1"){
            console.log(` [ - ] A soma da primeira linha da matriz é ${parseInt(num1)} + ${parseInt(num2)} = ${parseInt(num1) + parseInt(num2)}`)
        } else {
            console.log(` [ - ] A soma da segunda linha da matriz é ${parseInt(num3)} + ${parseInt(num4)} = ${parseInt(num3) + parseInt(num4)}`)
        }
        return false
    }
}