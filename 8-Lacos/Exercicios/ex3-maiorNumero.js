const numbers = [100, 102, 390, 10293, 928938, 1918273, 19182371819]

const biggestNumber = (arr) => {
    let biggest = arr[0] 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i]
        }
    } 
    return biggest
}

console.log(biggestNumber(numbers))

