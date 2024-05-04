const temIdadeParaDirigir = true
const temCarteiraDeMotorista = true
const temCarroProprio = false



if (temIdadeParaDirigir && temCarteiraDeMotorista ) {
    console.log("Você pode dirigir legalmente!")
} else if (temCarroProprio || temCarteiraDeMotorista) {
    console.log("Você pode dirigir, mas seja cuidadoso!")
} else {
    console.log("Você não pode dirigir.")
}