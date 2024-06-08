

function buttonClick() {
    const imagem = document.getElementById('dollynho')
    if (imagem.style.display === "none") {
        imagem.style.display = "block"
    } else {
        imagem.style.display = "none"
    }
}

document.getElementById("myButton").addEventListener('click', buttonClick)