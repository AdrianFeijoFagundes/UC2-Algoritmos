// Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:
// O nome da pessoa
// A idade dessa pessoa
// Um true ou false que diz se ela é maior de idade
// Quantos anos ela terá em 2050

const nome = 'Adrian'
const anoDeNascimento = 2002

const anoAtual = 2024

const idade = anoAtual - anoDeNascimento

const eMaior = idade >= 18

const idadeEm2050 = 2050 - anoDeNascimento


console.log("É maior de idade?", eMaior)
console.log("Sua idade é", idade)
console.log("Em 2050 sua idade será", idadeEm2050)
