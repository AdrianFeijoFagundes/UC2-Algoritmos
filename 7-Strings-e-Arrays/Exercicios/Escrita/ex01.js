// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
const readlineSync = require('readline-sync')


const nomeDoUsuario = readlineSync.question('Oi qual seu nome? ')
const emailDoUsuario = readlineSync.question('Informe seu e-mail? ')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)