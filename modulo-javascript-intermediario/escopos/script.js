if(true) {
    const mensagem = 'Olá' // Escopo de bloco
    console.log(mensagem) // Não pode ser reatribuido
}

console.log(mensagem)

//--------------------------------------------------------

{
    let msg = 'Bem Vindo!'
    console.log(msg)          // Bloco de codigo autônomo
}                             // Pode ser reatribuido dentro de um bloco 

console.log(msg)

//--------------------------------------------------------

if(true) {
    var menss = 'Olá' 
    console.log(menss) // pode ser reatribuido em qualquer momento
}

console.log(menss)

//--------------------------------------------------------

let url = 'https://www.google.com.br/'  // Escopo Global (tem que ser declarada antes)