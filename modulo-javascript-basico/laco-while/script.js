// While(condição) {
//    <bloco de excução>
// }


let a = 10
let b = 15

while(a < b){
    console.log('incrementando a variável ' + a) // testa depois executa
    a++
}

// do {
//   <bloco de excução></bloco>
// }while(condição)

var i = 1

do {
    console.log('entrou ' + i) // Executa depois testa
    i++
}while(i <= 5)