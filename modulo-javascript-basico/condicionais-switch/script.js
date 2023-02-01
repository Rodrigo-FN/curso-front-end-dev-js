// switch(parametro){
//    case valor1: 
//        <bloco de declaração>
//         break

//    case valor2: 
//        <bloco de declaração>
//         break

//    case valor3: 
//        <bloco de declaração>
//         break
// }

let nomeFilme = 'Aranha'

switch(nomeFilme) {
    case 'Vingadores':
        console.log('Filme dos Vingadores')
        break

    case 'Batman':
        console.log('Filme do Batman')
        break

    case 'Aranha': 
        console.log('Filme do Homem-Aranha')
        break

    default: 
        console.log('É outro filme')   
}

let avaliação = 5

switch(avaliação) {
    case 1:
    case 2:
        console.log('Filme ruim')
        break
    case 3:
    case 4:
        console.log('Filme mediano')
        break
    case 5:
        console.log('Filme bom')
        break
    default: 
        console.log('Nota inválida')
        break
}