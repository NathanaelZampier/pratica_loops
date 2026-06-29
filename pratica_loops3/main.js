// let numeros = 0

// while (numeros < 30) {
//     numeros++
//     if (numeros % 4 === 0) {
//         console.log(numeros)
//     }
// }

// let numeros2 = 0

// while (numeros2 < 15) {
//     numeros2++
//     if (numeros2 % 2 === 1) {
//         console.log(numeros2)
//     }
// }


// let numeros3 = 0
// let contador = 0

// while (numeros3 < 20) {
//     numeros3 += 3
//     if (numeros3 < 20) {
//         contador++
//         console.log(contador)
//     }
// }

// let numeros4 = 0 

// while (numeros4 < 80) {
//     numeros4++
//     if (numeros4 % 8 === 0) {
//         console.log(numeros4)
//     }
// }


// let numeros5 = 0

// while (numeros5 < 50) {
//     numeros5++
//     if (numeros5 % 2 === 0 || numeros5 % 5 === 0) {
//         console.log(numeros5)
//     }
// }


// let numeros6 = 0 
// let soma = 0

// while (numeros6 < 10) {
//     numeros6++
//     soma += numeros6
// }

// console.log(soma)


// let numeros7 = 0
// let contador2 = 0

// while (numeros7 < 30) {
//     numeros7++
//     if (numeros7 % 2 === 0) {
//         contador2++
//     }
// }

// console.log(contador2)

// let numero8 = 100

// while (numero8 >= 0) {
//     console.log(numero8)
//     numero8 -= 10
// }

// let numero9 = 0
// let tabuada9 = 9
// let resultado = 0

// while (numero9 <= 10) {
//     resultado = tabuada9 * numero9
//     console.log(resultado)
//     numero9++
// }


// let numeros = 0

// while (numeros < 20) {
//     numeros++
//     if (numeros % 2 === 0) {
//         console.log(numeros)
//     }
// }

// let numeros2 = 0
// let contador = 0

// while (numeros2 < 20) {
//     numeros2++
//     if (numeros2 % 2 === 0) {
//         contador++
//     }
// }

// console.log(contador)

// let numeros3 = 0 
// let soma = 0

// while (numeros3 < 20) {
//     numeros3++
//     if (numeros3 % 2 === 0) {
//         soma += numeros3
//     }
// }

// console.log(soma)


// let numeros4 = 0

// while (numeros4 < 50) {
//     numeros4++
//     if (numeros4 % 5 === 0) {
//         console.log(numeros4)
//     }
// }

// let numeros6 = 0
// let contador1 = 0

// while (numeros6 < 50) {
//     numeros6++
//     if (numeros6 % 5 === 0) {
//         contador1++
//     }
// }

// console.log(contador1)

// let numeros7 = 0
// let soma2 = 0

// while (numeros7 < 50) {
//     numeros7++
//     if (numeros7 % 5 === 0) {
//         soma2 += numeros7
//     }
// }

// console.log(soma2)


// const jogos = [
//     'minecraft',
//     'gta V',
//     'fifa',
//     'god of war'
// ];


// let i = 0 

// while (i < jogos.length) {
//     console.log(jogos[i])
//     i++
// }

// const frutas = [
//     'maça',
//     'banana',
//     'laranja',
//     'uva',
//     'pera'
// ];

// let i2 = 0


// while (i2 < frutas.length) {
//     i2++
//     console.log(i2)
// }

// const numeros = [10, 20, 30, 40, 50];

// let i3 = 0
// let soma = numeros[0]
// let resultado = 0

// while (i3 < numeros.length) {
//     i3++
//     resultado += soma
// }

// console.log(resultado)

const numeros = [10, 20, 30, 40, 50];

let i = 0
let soma = 0

while (i < numeros.length) {
    soma += numeros[i]
    i++
}

console.log(soma)

const frutas = [
    'Maçã',
    'Banana',
    'Laranja',
    'Uva',
    'Pera'
];

let i2 = 0

while (i2 < frutas.length) {
    i2++
}

console.log(i2)

const numeros2 = [5, 10, 15, 20, 25, 30];

let i3 = 0

while (i3 < numeros2.length) {

    if (numeros2[i3] % 2 === 0) {
        console.log(numeros2[i3])
    }
    i3++
}


const numeros3 = [2, 5, 8, 11, 14, 17, 20];

let i4 = 0
let contador1 = 0

while (i4 < numeros3.length) {
    if (numeros3[i4] % 2 === 0) {
        contador1++
    }
    i4++
}

console.log(contador1)

const numeros4 = [2, 5, 8, 11, 14, 17, 20];

let i5 = 0
let soma3 = 0

while (i5 < numeros4.length) {
    if (numeros4[i5] % 2 === 0) {
        soma3 += numeros4[i5]
    }

    i5++
}

console.log(soma3)

const numeros5 = [15, 42, 8, 91, 27];

let i6 = 0
let maior = numeros5[0]

while (i6 < numeros5.length) {
    if (numeros5[i6] > maior) {
        maior = numeros5[i6]
    }
    i6++
}

console.log(maior)

const numeros6 = [15, 42, 8, 91, 27];

let i7 = 0
let menor = numeros6[0]

while (i7 < numeros6.length) {
    if (numeros6[i7] < menor) {
        menor = numeros6[i7]
    }
    i7++
}

console.log(menor)

const numeros7 = [10, 25, 8, 40, 15, 50];

let i8 = 0


while (i8 < numeros7.length) {
    if (numeros7[i8] > 20) {
        console.log(numeros7[i8])
    }
    i8++
}


const numeros8 = [10, 25, 8, 40, 15, 50];

let i9 = 0
let soma4 = 0

while (i9 < numeros8.length) {
    if (numeros8[i9] > 20) {
        soma4 += numeros8[i9]
    }
    
    i9++
}

console.log(soma4)






