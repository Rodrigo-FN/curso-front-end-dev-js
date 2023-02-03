
let resultadoSoma = (numero1, numero2) => {
    return numero1 + numero2        
}                                   // Função Anonima

document.write(resultadoSoma(20,50) + '<br>')

//----------------------------------------------------------------------------

let resultadoDivisão = (numero1, numero2) => numero1 / numero2        
                                  // Função Anonima
document.write(resultadoDivisão(20, 10) + '<br>')

//----------------------------------------------------------------------------

const incentivarQuester = nomeQuester => document.write(`Parabéns ${nomeQuester}, você chegou ao JS intermediário!<br>`)

incentivarQuester('Rodrigo')

const dizerOla = nick => document.write(`Olá senhor ${nick}! Bem vindo!`)

dizerOla('Rodrigo')