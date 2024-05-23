//22
//Desenvolva uma função que calcule o IMC (Índice de Massa Corporal) e retorne uma mensagem com a categoria do IMC.

function calcularIMC(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2)

    console.log('Seu imc é ' + imc)
    if (imc >= 40) {
        console.log('Você está em um nivel de obesidade grau 3')
    }
    else if (imc >= 35) {
        console.log('Você está em um nivel de obesidade grau 2')
    } 
    else if (imc >= 30) {
        console.log('Você está em um nivel de obesidade grau 1')
    }
    else if (imc >= 25) {
        console.log('Você está em um nível de pré-obesidade') 
    } 
    else if (imc >= 18.5) {
       
        console.log('Você está com um peso normal')
    } else {
        console.log('Você está abaixo do peso')
    }
}
calcularIMC(70, 1.70)