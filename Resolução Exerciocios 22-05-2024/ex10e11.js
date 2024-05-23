//10
//Utilizando um “for”, conte de 0 até 500, caso o número seja múltiplo de 3 diga “Capitão”, caso for múltiplo de 5 diga “Rico”, caso seja múltiplo de 9 diga “Recruta”, e caso seja múltiplo de 20 diga “Kowalski”.
for (let i = 0; i < 501; i++) {
    let string = i
    if (i % 3 === 0) {
        string += ' Capitão!! '
    }
    if (i % 5 === 0) {
        string += ' Rico!! '
    }
    if(i % 9 === 0) {
        string += ' Recruta!! '
    }
    if (i % 20 === 0) {
        string += ' Kowalski!! '
    }     
    console.log(string)

}
//11
//Crie um array de frutas e use um loop para imprimir cada fruta no console.
const fruits = ['banana','abacate','figo']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}