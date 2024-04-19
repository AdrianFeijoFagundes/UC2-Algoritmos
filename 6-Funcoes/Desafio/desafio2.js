

const calcularHipotenusa = (cateto1, cateto2) => {
    const hipotenusa = calcularCateto(cateto1) + calcularCateto(cateto2)
    return hipotenusa**0.5 // seria o equivalente a calcular a raiz quadrada
}

const calcularCateto = (valor) => valor**2; // não é necessário mas criei uma função só para calcular os catenos, no entando é mais fácil fazer direro na funcao calcularHipotenusa
