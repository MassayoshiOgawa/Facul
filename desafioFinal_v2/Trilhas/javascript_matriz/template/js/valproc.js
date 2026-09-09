function validaFormulario() {
    let num1 = document.getElementById('num1').value;

    if (num1 === "") {
        console.log("Os campos tem que estar preenchidos corretamente");
        document.getElementById('num1').focus();
        return false;
    } else {

    }
}