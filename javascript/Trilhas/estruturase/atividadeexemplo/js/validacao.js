function validaFormulario(){
    if(document.frmcadastro.txtnome.value == ""){
        alert("O campo nome é obrigatório!");
        document.frmcadastro.txtnome.focus();
        return false;
    }else if(document.frmcadastro.txtfone.value == ""){
        alert("O campo telefone é obrigatório!");
        document.frmcadastro.txtfone.focus();
        return false;
    }else if (document.frmcadastro.txtemail.value == ""){
        alert("O campo email é obrigatório!");
        document.frmcadastro.txtemail.focus();
        return false;
    }else{
        alert("Cadastro realizado com sucesso!");
        return true;
    }
}