// for (let i = 0; i < 11; i ++) {
//     console.log(i)
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// let numero = 0

// while (numero < 10) {
//     numero++
//     console.log(numero)
// }


// let numero = 0

// do {
//     numero++
//     console.log(numero)
// } while (numero < 10)

for(let i = 1; i <= 10; i ++) {
    console.log(i)
}


for(let i = 20; i > 0; i--) {
    console.log(i)
}

for(let i = 0; i < 20; i++) {
    console.log(i)
    i++
}

for(let i = 0; i < 20; i++) {
    i++
    console.log(i)
}

let soma = 0

for(let i = 0; i < 11; i ++) {
    soma += i
    console.log
}


const jogos = [
    'minecraft',
    'gta 5',
    'fifa',
    'god of war',
];


for(let dados of jogos) {
    console.log(dados)
}

const numeros = [10,20,30,40,50];

let soma1 = 0

for(let dados of numeros) {
    soma1 += dados 
}

console.log(soma1)

const numeros1 = [15,42,8,91,27];

for(let i = 0; i < numeros1.length; i ++) {
    console.log(numeros1[i])
    console.log(numeros1[3])
}


const produtos = [
    {nome: 'mouse', estoque: 5},
    {nome: 'teclado', estoque: 0},
    {nome: 'monitor', estoque: 3},
    {nome: 'headset', estoque: 0}
];

for(let dados of produtos) {
    if (dados.estoque === 0) {
        console.log(dados)
    }
}

