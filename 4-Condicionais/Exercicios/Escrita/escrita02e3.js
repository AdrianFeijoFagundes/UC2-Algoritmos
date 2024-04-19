const turno = "M"

if (turno === 'M') {
    console.log('Bom dia!')

}
else if (turno === 'T') {
    console.log('Boa tarde!')

}
else if (turno === 'N') {
    console.log('Boa noite!')

}


switch (turno) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'T':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
}