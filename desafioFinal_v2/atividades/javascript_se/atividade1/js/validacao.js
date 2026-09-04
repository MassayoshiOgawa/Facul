function validaFormulario(){
    let idade = document.getElementById("idade").value; 
    if(idade === ""){
        alert("Campo Idade é obrigatório!");
        document.frmtstidade.numidade.focus();
        return false;
    }
    else{
        let idadev = parseInt(idade);
        if(idade>=18){
            alert("Sua idade é "+idadev+" você é maior de idade!");
        }else{
            alert(`Sua idade é ${idadev} você é menor de idade!`);;
        }
    }
    return true;
}