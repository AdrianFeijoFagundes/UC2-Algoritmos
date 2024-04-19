// Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true




const filme = {
    nome: 'Toy Story',
    anoDeLancamento: 1995
}
const filme2 = {
    nome: 'Shrek',
    anoDeLancamento: 2001
}

function firstFilm(film1, film2) {
    console.log('O primeiro filme foi lançado antes do segundo?', film1.anoDeLancamento < film2.anoDeLancamento)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', film1.anoDeLancamento === film2.anoDeLancamento) 
}

firstFilm(filme, filme2)