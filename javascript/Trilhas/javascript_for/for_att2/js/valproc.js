function validaFormulario() {
    let num1 = parseInt(document.getElementById('num1').value);
    for(let i = 1; i <= 10; i++){
        console.log(`${num1} x ${i} = ${num1 * i}`)
    }
    return false;
}