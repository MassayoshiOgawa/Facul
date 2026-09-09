function validaFormulario(){
    let notas = []
    let count = 0
    while(count < 3){
        count++
        let nota = parseFloat(prompt(`Insira a ${count}° nota:`))
        if(isNaN(nota) || nota < 0){
            count = 0
            alert("Insira um número válido.")
            notas = []
        } else {
            notas[count] = nota
        }
    }

    for(let i = 1; i < 4; i++){
        if(notas[i] >= 7.5){
            console.log(notas[i])
        }
    }
    return false;
}