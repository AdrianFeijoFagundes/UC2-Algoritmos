const characters = ['Luffy', 'Buggy', 'Zoro', 'Sanji', 'Nami', 'Chopper', 'Jimbei', 'MiHawk', 'Robin']

const youAre = () => {
    const randomNumber = Math.floor(Math.random() * characters.length)
    return `You are ${characters[randomNumber]}`
}
console.log(youAre())