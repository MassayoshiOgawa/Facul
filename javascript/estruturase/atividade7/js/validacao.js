function validaFormulario(){
    let valor = document.getElementById("valor").value; 
    let cupom = document.querySelector('input[name="rdodocumento"]:checked');

    if(valor === ""){
        alert("Campo Idade é obrigatório!");
        document.getElementById('valor').focus();
        return false;
    }else if(cupom === ""){ 
        alert("Campo Documento é obrigatório!");
        return false;
    }
    else{
        let valorv = parseInt(valor);
        if(valor>=16 && cupom === "S"){
            alert("Sua idade é "+valorv+", você tem documento com foto e pode assistir o filme!");
        }else if(valor>=16 && cupom === "N"){
            alert("Sua idade é "+valorv+", você tem a idade necessária, mas não tem documento com foto, não pode assistir o filme!");
        }else if(valor<16 && cupom === "S"){
            alert(`Sua idade é ${valorv}, você tem documento com foto, mas não tem idade suficiente, não pode assistir o filme!`);;
        }    
        else{
            alert(`Sua idade é ${valorv}, você não tem documento e idade suficiete, não pode assistir o filme!`);;
        }
    }
    return true;
}