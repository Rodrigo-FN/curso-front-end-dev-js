/*
    function nomeFunção(){
        <bloco de excução>
    }

    nomeFunção()
*/ 

/*
    function nomeFunção(parametro1, parametro2, parametro3){
        <bloco de excução>
    }

    nomeFunção(parametro1, parametro2, parametro3)
*/ 

function incentivarQuester(nomeQuester = 'Quester') {
    alert(`Muito bem ${nomeQuester} você chegou ao JS, parabéns!`)
}

incentivarQuester('Rodrigo')

function soma(numero1, numero2) {
   return numero1 + numero2
}

let resutadoSoma = soma(10, 20)
console.log(resutadoSoma)
