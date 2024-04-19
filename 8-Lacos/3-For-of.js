const numbers = [10,20,30,50,29,21,22]


const biggestNumber = (arr) => {
    let biggest = arr[0] 
    for (let i of arr) {
        if (i > biggest) {
            biggest = i
        }
    } 
    return biggest
}

console.log(biggestNumber(numbers))