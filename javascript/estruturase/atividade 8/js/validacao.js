function validaFormulario(){
    let valor = document.getElementById("valor").value; 
    let cupom = document.querySelector('input[name="rdocupom"]:checked').value;

    if(valor === ""){
        alert("Campo Idade é obrigatório!");
        document.getElementById('valor').focus();
        return false;
    }else if(cupom === ""){ 
        alert("Campo Documento é obrigatório!");
        return false;
    }
    else{
        if(valor>500 && cupom=== "S"){
            alert("Você tem desconto");   
        }
        else{
            alert("Você não tem desconto");;
        }
    }
    return true;
}
