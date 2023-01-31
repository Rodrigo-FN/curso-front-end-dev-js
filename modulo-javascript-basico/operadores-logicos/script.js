/*
    == ---- igual ---- a==b ---- True se a for igual a b
    === ---- idêntico ---- a===b True se a for idêntico a b
    != ---- diferente ---- a!=b ----  True se a for diferente de b
    !== ---- não idêntico ---- a!==b ---- True se a não idêntico a b  
    
    < ---- menor que ---- a < b ---- True se a for menor que b
    > ---- maior que ---- a > b ---- True se a for maior que b

    <= ---- menor ou igual ---- a <= b ---- True se a for menor ou igual a b
    >= ---- maior ou igual ---- a >= b ---- True se a for maior ou igual a b
*/

// const a = 3
// const b = 3

// console.log(a < b)



// E (AND)
const a = 2
const b = 2 

console.log( a === b && a <= b)
// V e V = V

console.log(a === b && a > b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a < b && a > b)
// F e F = F



// OU (OR)

console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log(a < b || a > b)
// F ou F = F



// NOT (Inverte)

console.log(!(a === b))

console.log(!(a < b))

