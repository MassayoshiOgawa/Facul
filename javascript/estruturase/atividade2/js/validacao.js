function validaFormulario(){
    let num = document.getElementById("numero").value; 
    if(num === ""){
        alert("Campo número é obrigatório!");
        document.frmtstnum.numNumero.focus();
        return false;
    }
    else{
        let numverificado = parseInt(num);
        if((num %2 )==0){
            alert(`O número ${numverificado} é par!`);
        }else{
            alert(`O número ${numverificado} é ímpar!`);
        }
    }
    return true;
}