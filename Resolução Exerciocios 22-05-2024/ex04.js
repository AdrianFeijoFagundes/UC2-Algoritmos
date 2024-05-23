//Crie um loop usando 'for', que conte de 0 a 100, porém em cada número que termine com '7', imprima "Penguin Imperador". Quando for multiplo de 9, diga "Kowalski! Relatório.";
for (let i = 0; i < 101; i++) {
    const n = i.toString()
    
    if ((n === '7' || n[n.length - 1] === '7') && (i % 9 === 0) ) {
        console.log(n + ' Penguin Imperador' + ' Kowalski! Relatório.')
    }
    else if (n == '7' || n[n.length - 1] == '7') {
        console.log(n + ' Penguin Imperador.')
    }
    else if(i % 9 === 0) {
        console.log(i + ' Kowalski! Relatório.')
    } 
    else {
        console.log(n)
    }
}