function validaFormulario() {

    let matriz = [];
    let dobro = [];

    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        dobro[i] = [];

        for (let j = 0; j < 5; j++) {
            let keep = false
            while(keep == false){
                let valor = prompt("Digite o número inteiro [" + i + "][" + j + "]:")
                if(valor === "" || isNaN(parseInt(valor)) || parseFloat(valor) - parseInt(valor) > 0){
                    alert("Insira um número inteiro válido.")
                } else {
                    keep = true
                }
                console.log("Número inserido: " + valor)
                matriz[i][j] = Number(valor);
                dobro[i][j] = matriz[i][j] * 2;
            }
        }
    }

    console.log("Matriz original:");
    for (let i = 0; i < 5; i++){
            console.log(matriz[i][0] + " " + matriz[i][1] + " " + matriz[i][2] + " " + matriz[i][3] + " " + matriz[i][4])
    }


    console.log("Matriz dobrada:");
    for (let i = 0; i < 5; i++){
        console.log(dobro[i][0] + " " + dobro[i][1] + " " + dobro[i][2] + " " + dobro[i][3] + " " + dobro[i][4])
    }
    return false
}