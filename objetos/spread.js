const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senac.rs.com.br',  
    cidade: 'São Paulo'  
}
const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}

console.log(novoUsuario)

const nameList = ['Pedro', 'Tiago', 'João']
const nameList2 = ['Natan', 'Gustavo', 'Adrian']

const copyList = [...nameList, ...nameList2, 'Judas']

console.log(copyList)