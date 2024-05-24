// Crie uma declaração switch que irá mostrar "Olá" se fruits for "banana" e "Bem-vindo" se fruits for "maçã".
// Adicione uma seção que irá alertar "Nem um nem outro" se fruits não for nem "banana" nem "maçã".


const fruits = 'Abacate'

switch (fruits) {
    case 'banana':
        console.log('Olá')
        break
    case 'maçã':
        console.log('Bem-vindo')
        break
    default:
        console.log('Nem um nem outro')
        break
}