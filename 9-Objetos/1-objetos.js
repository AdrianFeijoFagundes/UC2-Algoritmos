const professor = {
    nome: 'Vitor',
    idade: 34,
    email: 'vitor@gmail.com',
    tarefas: ['Dar aula', 'Reponder dúvidas'],
    contarPiada: function() {
        console.log('É pa ve ou pa cume?')
    },
    'nome-completo' : 'Vitor de moraes',
    endereco: {
        rua: 'Lori herzer',
        numero: 220,
        cep: '00000-00'
    }
}


const {email, nome} = professor
console.log(professor.nome)
console.log(professor.tarefas)
professor.contarPiada()

console.log(professor['idade'])
console.log(professor['email'])

professor.nome = 'Leonardo'
console.log(professor.nome)

console.log(email)
console.log(nome)

const donoDoPet = {
    nome: 'Adrian',
    pet: {
        nomePet: 'Cinzinha',
        raca:'meio-siames',
        idade: 5
    }
}

console.log(donoDoPet.pet)
const curso  = {
    nome: "noturno frontend",
    linguagens: ['js', 'html', 'css']
}
console.log(curso.linguagens[0])

const professores = [
    {nome: 'Andrei', modulo: 1},
    {nome: 'Leo', modulo: 2},
    {nome: 'Lucas', modulo: 3}
]
console.log(professores[2].nome)

curso.numeroDeEstudantes = 50
console.log(curso)