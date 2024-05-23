//14
//Crie um pequeno quiz que pergunte ao usuário sua cor favorita e responda com mensagens diferentes dependendo da cor escolhida.
const rl = require('readline-sync')
const mensagens = [
    'normalmente o VERMELHO está associado a raiva, paixão, fúria, ira, desejo, excitação, energia, velocidade, força, poder, calor, amor, agressão, perigo, fogo, sangue, guerra, violência.',
    'normalmente o AZUL está associado fé, espiritualidade, contentamento, lealdade, paz, tranquilidade, calma, estabilidade, harmonia, unidade, confiança, verdade, confiança, conservadorismo, segurança, limpeza, ordem, céu, água, frio, tecnologia, depressão.',
    'normalmente o ROSA está associado amor, inocência, saúde, felicidade, satisfação, romantismo, charme, brincadeira, leveza, delicadeza, feminilidade.',
    'normalmente o AMARELO está associado sabedoria, conhecimento, relaxamento, alegria, felicidade, otimismo, idealismo, imaginação, esperança, claridade, radiosidade, verão, desonestidade, covardia, traição, inveja, cobiça, engano, doença, perigo.',
    'normalmente o VERDE está associado cura, calma, perseverança, tenacidade, autoconsciência, orgulho, imutabilidade natureza, meio ambiente, saudável, boa sorte, renovação, juventude, vigor, Primavera, generosidade, fertilidade, ciúme, inexperiência, inveja, imaturidade, destruição.',
]
console.log('Escolha uma cor:\n 1. Vermelho \n 2. Azul \n 3. Rosa \n 4. Amarelo \n 5. Verde')

const resposta = Number(rl.question('Digite um numero: ')) - 1

if (resposta >= 0 && resposta < 5) {
    console.log(mensagens[resposta])
} else {
    console.log('O número é invalido')
}