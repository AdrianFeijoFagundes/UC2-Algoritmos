let idade = 13
// Condicional composta com uma condicão e um "senão"
if (idade >= 18) {
    console.log("é maior de idade")
} else {
    console.log("é menor de idade")
}


//Condicional composta com mais de uma condição
if (idade >= 18) {
    console.log("é maior de idade")

} //se a idade for entre 13 e 18 
else if (idade >= 18 && idade <= 13) {
    console.log("é adolescente")
}
else {
    console.log("é menor de idade")
}