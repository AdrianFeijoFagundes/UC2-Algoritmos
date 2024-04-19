let i = 10

while(i >= 0) {
    if (i === 0) {
        console.log(i, 'BOOM!!!!')
    } else if (i % 2 === 0) {
        console.log(i, 'TIC')
    } else {
        console.log(i, 'TAC')
    }
    i--
}