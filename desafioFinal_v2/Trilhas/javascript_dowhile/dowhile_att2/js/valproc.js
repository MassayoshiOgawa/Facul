function validaFormulario() {
    let num1 = document.getElementById('num1').value;

    if (num1 === "" || isNaN(parseInt(num1))) {
        console.log("Os campos tem que estar preenchidos corretamente");
        document.getElementById('num1').focus();
        return false;
    } else {
        count = 1
        do{
            console.log(`${num1} x ${count} = ${num1*count}`)
            count++
        }while(count <= 10)
    }
    return false
}