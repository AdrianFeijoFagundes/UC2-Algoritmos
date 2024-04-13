const numbers = [1,2,3,4,5,6,7,8,9,10]

function sumAll(arr) {
    let sum = 0 // variavel para inicilizar a soma 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] // a cada iteraçao do loop ele soma o valor anterior com o item atual do array
        
    }
    return sum
}

console.log(sumAll(numbers))