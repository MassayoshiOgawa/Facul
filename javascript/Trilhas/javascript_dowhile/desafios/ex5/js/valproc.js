function validaFormulario(){

    const randnum = Math.floor(Math.random() * 10) + 1;
    let attempt
    do{
        attempt = parseInt(prompt("Adivinhe o número entre 1 e 10: "))
        if(isNaN(attempt)){
            alert("Insira um número válido.")
            return false
        }
        if(attempt !== randnum){
            console.log("Número inserido: " + attempt + ". Não é o número certo.")
        }
        
    }while(attempt !== randnum)
        
        console.log("Parabéns! Você acertou, o número escolhido era " + randnum)
}
