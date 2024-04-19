
function printPhrase(words) {
    let phrase = ''
    for (word of words) {
        phrase +=  word + ' ' 
    }    
    return phrase
}

const wordArr = ['Oi', 'sumido', 'tudo', 'bem?', 'Saudades']

console.log(printPhrase(wordArr))
